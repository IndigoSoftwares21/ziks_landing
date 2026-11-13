"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

import { EASE_OUT } from "@/app/Home/components/shared/Reveal";
import { useRevealed } from "@/app/Home/components/shared/Revealed";

type FloatProps = {
  children: ReactNode;
  className?: string;
  /** Seconds before the card pops in. */
  delay?: number;
  /** Seconds for one full bob cycle. */
  duration?: number;
  /** Bob distance in px (moves ±distance). */
  distance?: number;
  /** Set false to skip the pop-in (e.g. when a parent already reveals it). */
  popIn?: boolean;
  /** Pop in when scrolled into view instead of on load (for below-the-fold cards). */
  inView?: boolean;
};

/**
 * Floating card: pops in, then gently bobs forever.
 * The pop-in and the bob live on separate elements so neither fights the other
 * (or any transform on the caller's wrapper, e.g. responsive scale classes).
 * Reduced-motion users get the fade only (MotionConfig in providers).
 */
const Float = ({
  children,
  className,
  delay = 0,
  duration = 4.5,
  distance = 6,
  popIn = true,
  inView = false,
}: FloatProps) => {
  const shown = { opacity: 1, scale: 1, y: 0 };
  const hidden = { opacity: 0, scale: 0.9, y: 12 };
  // On-load pop-ins wait for the loading screen to lift
  const revealed = useRevealed();

  return (
    <motion.div
      animate={inView ? undefined : revealed ? shown : hidden}
      className={className}
      initial={popIn ? hidden : false}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      whileInView={inView ? shown : undefined}
    >
      <motion.div
        animate={{ y: [0, -distance, 0, distance, 0] }}
        transition={{
          duration,
          // Decelerate into each peak, accelerate through the middle: a smooth sine-like bob
          ease: ["easeOut", "easeIn", "easeOut", "easeIn"],
          repeat: Infinity,
          // Start bobbing once the pop-in has settled
          delay: delay + 0.6,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Float;
