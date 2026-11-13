"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Procedural cloud sky (WebGL fragment shader, no image assets):
 * a rosy Ziks sky with soft clouds that thicken toward the bottom and melt
 * into white, drifting slowly sideways.
 *
 * Time is measured from page load (not randomised) so every instance on the
 * page shows the same frame. That keeps the infinite-scroll loop seamless,
 * where a copy of the hero sits at the end of the page.
 *
 * - Renders at reduced resolution (clouds are soft, upscaling is invisible)
 * - Pauses when off-screen or the tab is hidden
 * - One still frame for prefers-reduced-motion
 */

const VERTEX = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAGMENT = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;

// "Hash without Sine" (Dave Hoskins, MIT): stable on all GPUs. The usual
// fract(sin(x) * 43758.5) loses precision as x grows, which made the clouds
// tremble more and more the longer the page was open.
float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i), b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
  return a + (b - a) * u.x + (c - a) * u.y + (a - b - c + d) * u.x * u.y;
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 m = mat2(1.6, -1.2, 1.2, 1.6);
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = m * p + vec2(3.1, 1.7); a *= 0.47; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes; // y = 0 at the bottom
  float aspect = uRes.x / uRes.y;

  // Sky: deep rose at the top, lighter toward the horizon
  vec3 top = vec3(0.541, 0.169, 0.255);  // #8A2B41
  vec3 mid = vec3(0.725, 0.337, 0.435);  // #B9566F
  vec3 low = vec3(0.886, 0.627, 0.694);  // #E2A0B1
  vec3 sky = mix(mid, top, smoothstep(0.45, 1.0, uv.y));
  sky = mix(low, sky, smoothstep(0.0, 0.5, uv.y));

  // Clouds: drift sideways, denser toward the bottom
  vec2 p = vec2(uv.x * aspect, uv.y * 1.35) * 1.7 + vec2(uTime * 0.045, 0.0);
  float d = fbm(p);
  float thr = 0.68 - 0.36 * smoothstep(0.72, 0.0, uv.y);
  float cover = smoothstep(thr, thr + 0.22, d);

  // Light from above: tops of clouds bright, undersides faintly pink
  float dUp = fbm(p + vec2(0.0, 0.08));
  float lit = clamp(0.55 + (d - dUp) * 5.0, 0.0, 1.0);
  vec3 cloud = mix(vec3(0.95, 0.86, 0.89), vec3(1.0), lit);

  vec3 col = mix(sky, cloud, cover * 0.97);
  col = mix(col, vec3(1.0), smoothstep(0.24, 0.0, uv.y)); // melt into white
  gl_FragColor = vec4(col, 1.0);
}
`;

/** Fraction of CSS pixels rendered: high enough that cloud edges glide instead of crawling. */
const RENDER_SCALE = 0.75;
/**
 * Shared clock so every sky on the page shows the same frame. It stays at 0
 * until the loading screen lifts (startCloudClock), so the loader's still
 * clouds and the hero's clouds are identical at the hand-off.
 */
let clockStart: number | null = null;

export const startCloudClock = () => {
  if (clockStart === null) clockStart = performance.now();
};

const cloudTime = () =>
  clockStart === null ? 0 : (performance.now() - clockStart) / 1000;

/** `still`: draw a single frame and never animate (e.g. behind the loader). */
const CloudSky = ({
  className = "",
  still = false,
}: {
  className?: string;
  still?: boolean;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
      powerPreference: "low-power",
    });

    if (!gl) return;

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type)!;

      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) ?? "shader compile failed");
      }

      return shader;
    };

    let program: WebGLProgram;

    try {
      program = gl.createProgram()!;
      gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX));
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    } catch {
      return; // CSS gradient fallback stays visible
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const aPos = gl.getAttribLocation(program, "aPos");

    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(program, "uRes");
    const uTime = gl.getUniformLocation(program, "uTime");

    const reduceMotion =
      still || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let visible = true;
    let first = true;

    const draw = () => {
      const w = Math.max(1, Math.round(canvas.clientWidth * RENDER_SCALE));
      const h = Math.max(1, Math.round(canvas.clientHeight * RENDER_SCALE));

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
      gl.uniform1f(uTime, reduceMotion ? 0 : cloudTime());
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (first) {
        first = false;
        setReady(true);
      }
    };
    const loop = () => {
      draw();
      frame = requestAnimationFrame(loop);
    };
    const play = () => {
      if (reduceMotion || frame || !visible || document.hidden) return;
      frame = requestAnimationFrame(loop);
    };
    const pause = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    // Start drawing a full screen before the sky scrolls into view, so it's
    // already showing the current frame when it appears (no stale-frame jump,
    // e.g. at the infinite-scroll loop point)
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          draw();
          play();
        } else pause();
      },
      { rootMargin: "100% 0px" },
    );

    io.observe(canvas);
    const onVisibility = () => (document.hidden ? pause() : play());

    document.addEventListener("visibilitychange", onVisibility);
    const ro = new ResizeObserver(() => {
      if (!frame) draw();
    });

    ro.observe(canvas);
    draw();
    play();

    return () => {
      pause();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, [still]);

  return (
    <div
      aria-hidden
      className={`bg-[linear-gradient(180deg,#8A2B41_0%,#B9566F_55%,#E2A0B1_80%,#fff_100%)] ${className}`}
    >
      <canvas
        ref={canvasRef}
        className={`size-full transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

export default CloudSky;
