"use client";

import type { MotionValue } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { type Fragment, type Scene, SCENES } from "./scenes";
import { ScreenPhone, STAGE_CENTER, stagePhoneWidth } from "./ui";

/** Scroll distance each scene gets, in viewport heights. */
const SCENE_VH = 190;
const N = SCENES.length;

/** Scroll window [start, end] (0..1 of the whole story) for scene i. */
const windowOf = (i: number) => [i / N, (i + 1) / N] as const;

/* ------------------------------------------------------------------ */

const FragmentView = ({
  fragment,
  index,
  sceneIndex,
  progress,
}: {
  fragment: Fragment;
  index: number;
  sceneIndex: number;
  progress: MotionValue<number>;
}) => {
  const [a, b] = windowOf(sceneIndex);
  const len = b - a;
  const inStart = a + len * (0.06 + index * 0.035);
  const inEnd = inStart + len * 0.2;
  const outStart = b - len * 0.24;
  const outEnd = b - len * 0.08;
  const [fx, fy] = fragment.from;

  const opacity = useTransform(
    progress,
    [inStart, inEnd, outStart, outEnd],
    [0, 1, 1, 0],
  );
  const x = useTransform(
    progress,
    [inStart, inEnd, outStart, outEnd],
    [fx, 0, 0, -fx * 0.35],
  );
  const y = useTransform(
    progress,
    [inStart, inEnd, outStart, outEnd],
    [fy, 0, 0, -fy * 0.35],
  );
  const scale = useTransform(
    progress,
    [inStart, inEnd, outStart, outEnd],
    [0.9, 1, 1, 0.94],
  );

  return (
    <div
      className={`absolute ${fragment.pos} ${fragment.mobile === false ? "hidden md:block" : ""}`}
    >
      <motion.div style={{ opacity, x, y, scale }}>{fragment.node}</motion.div>
    </div>
  );
};

const SceneView = ({
  scene,
  index,
  progress,
  phoneWidth,
}: {
  scene: Scene;
  index: number;
  progress: MotionValue<number>;
  phoneWidth: number;
}) => {
  const [a, b] = windowOf(index);
  const len = b - a;
  const first = index === 0;
  const last = index === N - 1;

  // Text rises in, holds, then lifts away; first/last scenes stay put at the edges
  const textOpacity = useTransform(
    progress,
    [a, a + len * 0.16, b - len * 0.2, b - len * 0.04],
    [first ? 1 : 0, 1, 1, last ? 1 : 0],
  );
  const textY = useTransform(
    progress,
    [a, a + len * 0.2, b - len * 0.2, b],
    [first ? 0 : 70, 0, 0, last ? 0 : -50],
  );
  // The centrepiece lingers a beat longer than the fragments, like a handover
  const coreOpacity = useTransform(
    progress,
    [a, a + len * 0.1, b - len * 0.08, b],
    [first ? 1 : 0, 1, 1, last ? 1 : 0],
  );
  const coreScale = useTransform(
    progress,
    [a, a + len * 0.22, b - len * 0.12, b],
    [first ? 1 : 0.7, 1, 1, last ? 1 : 0.8],
  );

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Centrepiece: the real app on this feature's screen. Scene 1 uses the
          HandoffPhone instead (it rises from the hero into this same spot). */}
      {scene.id !== "add-money" && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            top: `${STAGE_CENTER * 100}%`,
            opacity: coreOpacity,
            scale: coreScale,
          }}
        >
          <ScreenPhone screens={[scene.screen]} width={phoneWidth} />
        </motion.div>
      )}

      {scene.fragments.map((fragment, i) => (
        <FragmentView
          key={i}
          fragment={fragment}
          index={i}
          progress={progress}
          sceneIndex={index}
        />
      ))}

      {/* Headline + body */}
      <motion.div
        className="absolute inset-x-0 bottom-[9%] px-5 text-center md:bottom-[8%]"
        style={{ opacity: textOpacity, y: textY }}
      >
        <h2 className="font-display mx-auto max-w-[1100px] text-[clamp(2.6rem,7.4vw,6.75rem)] uppercase leading-[0.92] text-[#241C1E]">
          {scene.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.5] text-[#756F71] md:text-base">
          {scene.body}
        </p>
      </motion.div>
    </div>
  );
};

/* ------------------------------------------------------------------ */

/** Static, stacked version for reduced-motion users: same content, no pinning. */
const StaticStory = () => (
  <div>
    {SCENES.map((scene) => (
      <section
        key={scene.id}
        className="flex min-h-[80svh] flex-col items-center justify-center gap-8 px-5 py-24 text-center"
        id={scene.id}
        style={{ background: scene.bg }}
      >
        <ScreenPhone screens={[scene.screen]} width={240} />
        <h2 className="font-display text-[clamp(2.6rem,7.4vw,6.75rem)] uppercase leading-[0.92] text-[#241C1E]">
          {scene.title}
        </h2>
        <p className="max-w-[520px] text-base leading-[1.5] text-[#756F71]">
          {scene.body}
        </p>
      </section>
    ))}
  </div>
);

/**
 * The pinned feature story: one sticky stage, scenes play in turn as you
 * scroll. Background colour blends between scenes; each scene's UI fragments
 * fly in around its centrepiece, then clear for the next one.
 */
const Story = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);
  const [phoneWidth, setPhoneWidth] = useState(240);

  useEffect(() => {
    const onResize = () => setPhoneWidth(stagePhoneWidth(window.innerHeight));

    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const bg = useTransform(
    scrollYProgress,
    SCENES.map((_, i) => (i + 0.5) / N),
    SCENES.map((s) => s.bg),
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(N - 1, Math.max(0, Math.floor(v * N))));
  });

  if (reduceMotion) return <StaticStory />;

  return (
    <div
      ref={ref}
      className="relative"
      data-nav="light"
      id="features"
      style={{ height: `${N * SCENE_VH}vh` }}
    >
      {/* Invisible anchors so menu links can jump to each scene */}
      {SCENES.map((scene, i) => (
        <span
          key={scene.id}
          aria-hidden
          className="absolute left-0 h-px w-px"
          id={scene.id}
          style={{ top: `${((i + 0.3) / N) * 100}%` }}
        />
      ))}

      <motion.div
        className="sticky top-0 h-svh w-full overflow-hidden"
        style={{ backgroundColor: bg }}
      >
        {SCENES.map((scene, i) => (
          <SceneView
            key={scene.id}
            index={i}
            phoneWidth={phoneWidth}
            progress={scrollYProgress}
            scene={scene}
          />
        ))}

        {/* Progress ticks */}
        <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-2 md:flex">
          {SCENES.map((scene, i) => (
            <span
              key={scene.id}
              className={`h-6 w-[3px] rounded-full transition-colors duration-500 ${
                i === active ? "bg-[#701D30]" : "bg-[#701D30]/15"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Story;
