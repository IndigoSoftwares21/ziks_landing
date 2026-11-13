"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds before the animation starts (use for simple staggers). */
  delay?: number;
  /** Vertical offset in px the content rises from. */
  y?: number;
};

/**
 * Fades + rises its children in once they scroll into view.
 * Reduced-motion users get no transform (handled globally by MotionConfig).
 */
const Reveal = ({ children, className, delay = 0, y = 24 }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    transition={{ duration: 0.7, ease: EASE_OUT, delay }}
    viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {children}
  </motion.div>
);

export default Reveal;
