"use client";

import "lenis/dist/lenis.css";

import { useEffect } from "react";
import Lenis from "lenis";

import { useRevealed } from "@/app/Home/components/shared/Revealed";

/** The page's Lenis instance, for components that need to pause scrolling. */
let instance: Lenis | null = null;

export const getLenis = () => instance;

/**
 * Smooth scrolling + infinite loop (Lenis).
 *
 * `infinite: true` wraps the scroll position at the end of the page back to
 * 0 (and from 0 back to the end when scrolling up). Lenis drives the
 * momentum itself, so the wrap never interrupts a trackpad flick or a phone
 * swipe. The page ends with a copy of the hero exactly one viewport tall
 * (see app/page.tsx), so the last screen and the first screen are identical.
 *
 * Scrolling is paused until the loading screen lifts. Reduced-motion users
 * get native scrolling with no smoothing and no loop.
 */
const SmoothScroll = () => {
  const revealed = useRevealed();

  // The loop copy of the hero is cropped to exactly the window height, so the
  // page's last screen lines up with its first wherever Lenis wraps
  useEffect(() => {
    const setVh = () =>
      document.documentElement.style.setProperty(
        "--loop-vh",
        `${window.innerHeight}px`,
      );

    setVh();
    window.addEventListener("resize", setVh);

    return () => window.removeEventListener("resize", setVh);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      infinite: true,
      syncTouch: true, // required for infinite scrolling on touch screens
      anchors: { offset: 0 }, // in-page #links scroll smoothly through Lenis
      autoRaf: true,
    });

    instance = lenis;

    return () => {
      lenis.destroy();
      instance = null;
    };
  }, []);

  useEffect(() => {
    if (revealed) instance?.start();
    else instance?.stop();
  }, [revealed]);

  return null;
};

export default SmoothScroll;
