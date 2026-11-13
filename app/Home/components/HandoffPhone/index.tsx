"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { SCENES } from "@/app/Home/components/Story/scenes";
import {
  phoneDims,
  ScreenPhone,
  STAGE_CENTER,
  STAGE_PHONE_MAX,
  stagePhoneWidth,
} from "@/app/Home/components/Story/ui";

/** Phone artwork size (px) at scale 1. */
const PHONE_W = STAGE_PHONE_MAX;
const PHONE_H = phoneDims(PHONE_W).height;
/** In the hero, the phone's top sits this far down the viewport (peeking). */
const PEEK_TOP = 0.76;

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * The real Ziks app (home screen) handing off from the hero to the story:
 * it peeks up below "Get the app", rises to the centre of the first scene
 * as the story pins, holds there through that scene, then fades out as the
 * next scene arrives.
 *
 * One fixed element positioned from the scroll position. Like the hero, it
 * measures from the hero copy at the end of the page when you're near it,
 * so it lines up exactly at the infinite-scroll loop point.
 */
const HandoffPhone = () => {
  const { scrollY } = useScroll();
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(0);
  const [enabled, setEnabled] = useState(false);
  // Home screen in the hero; Add money once it settles into "Top up from any bank"
  const [screen, setScreen] = useState<"home" | "addMoney">("home");

  useEffect(() => {
    setEnabled(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const update = (scroll: number) => {
    const vh = window.innerHeight;
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const story = document.querySelector<HTMLElement>("#features");
    const clone = document.querySelector<HTMLElement>("[data-loop-hero]");

    if (!hero || !story) return;

    const H = hero.offsetHeight;
    const cloneTop = clone ? clone.offsetTop : Infinity;
    // Scroll measured from whichever hero is nearest (real one, or the copy)
    const local = scroll >= cloneTop - vh ? scroll - cloneTop : scroll;

    // Fit the phone inside the scene's top area on short screens
    const stageScale = stagePhoneWidth(vh) / PHONE_W;
    const peekTop = vh * PEEK_TOP;
    const stageTop = vh * STAGE_CENTER - (PHONE_H * stageScale) / 2;

    // Scene 1's exit, in page scroll (story progress → px)
    const storyScroll = story.offsetHeight - vh;
    const sceneLen = storyScroll / SCENES.length;
    const fadeStart = H + sceneLen * 0.86;
    const fadeEnd = H + sceneLen * 0.98;

    let top: number;
    let s: number;

    if (local <= 0) {
      // Approaching the loop copy: ride along with the page
      top = peekTop - local;
      s = 1;
    } else if (local < H) {
      const t = ease(clamp(local / H));

      top = peekTop + (stageTop - peekTop) * t;
      s = 1 + (stageScale - 1) * t;
    } else {
      top = stageTop;
      s = stageScale;
    }

    setScreen(local >= H * 0.95 ? "addMoney" : "home");
    y.set(top);
    scale.set(s);
    opacity.set(
      local < fadeStart
        ? 1
        : 1 - clamp((local - fadeStart) / (fadeEnd - fadeStart)),
    );
  };

  useMotionValueEvent(scrollY, "change", update);
  useEffect(() => {
    if (!enabled) return;
    update(window.scrollY);
    const onResize = () => update(window.scrollY);

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-1/2 top-0 z-[60] origin-top"
      style={{ y, scale, opacity, x: "-50%", width: PHONE_W }}
    >
      <ScreenPhone
        preload
        active={screen}
        screens={["home", "addMoney"]}
        width={PHONE_W}
      />
    </motion.div>
  );
};

export default HandoffPhone;
