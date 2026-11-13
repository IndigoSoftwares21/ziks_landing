"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import FadeUp from "./FadeUp";
import CloudSky from "./CloudSky";

/**
 * `loop`: the copy rendered at the very end of the page for the infinite
 * scroll. It is hidden from assistive tech and keyboard focus (inert); the
 * page wraps back to the real hero when it reaches the top of the viewport.
 * The real app (HandoffPhone) peeks up below the button and rises into the
 * story as you scroll.
 */
const Hero = ({ loop = false }: { loop?: boolean }) => {
  const ref = useRef<HTMLElement>(null);
  // As the hero scrolls away its content drifts up, shrinks a touch and fades.
  // Both heroes (the real one and the loop copy) share ONE progress value:
  // measured from the copy once you're within a screen of it, otherwise from
  // the top. So when the loop jumps from the copy to the real hero, the real
  // hero is already in exactly the same state, with no one-frame flash.
  const { scrollY } = useScroll();
  const scrollYProgress = useTransform(scrollY, (y) => {
    // Server render: nothing to measure, the hero starts at rest
    if (typeof window === "undefined") return 0;
    const h = ref.current?.offsetHeight || window.innerHeight;
    const clone = document.querySelector<HTMLElement>("[data-loop-hero]");
    const cloneTop = clone ? clone.offsetTop : Infinity;
    const local = y >= cloneTop - h ? y - cloneTop : y;

    return Math.min(1, Math.max(0, local / h));
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const HeadingTag = loop ? "p" : "h1";

  return (
    <section
      ref={ref}
      aria-hidden={loop || undefined}
      className="relative isolate flex h-svh min-h-[640px] w-full flex-col overflow-hidden"
      data-hero={loop ? undefined : ""}
      data-loop-hero={loop ? "" : undefined}
      data-nav="dark"
      inert={loop || undefined}
    >
      {/* Background: procedural cloud sky that melts into white at the bottom */}
      <CloudSky className="absolute inset-0 -z-10" />

      <motion.div
        className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-start px-5 pt-[max(21vh,132px)] text-center xl:px-0"
        style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
      >
        <FadeUp index={0}>
          <HeadingTag className="font-display text-[clamp(3.25rem,8vw,7.25rem)] uppercase leading-[0.92] tracking-[-0.005em] text-white">
            Naira, crypto &amp; bills.
            <br />
            <span className="text-[#F2D9DF]">One app.</span>
          </HeadingTag>
        </FadeUp>

        <FadeUp className="mt-6" index={1}>
          <p className="mx-auto max-w-[460px] text-base leading-[1.4] text-white/85 sm:text-lg">
            Collect naira, receive crypto, swap instantly and pay every bill,
            all from Ziks.
          </p>
        </FadeUp>

        <FadeUp className="mt-8" index={2}>
          <a
            data-coming-soon
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#241C1E] px-7 text-sm font-medium text-white shadow-[0_12px_32px_rgba(36,28,30,0.35)] transition hover:bg-black"
            href="#download"
          >
            Get the app
          </a>
        </FadeUp>
      </motion.div>
    </section>
  );
};

export default Hero;
