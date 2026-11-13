"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

import { EASE_OUT } from "@/app/Home/components/shared/Reveal";
import { useRevealed } from "@/app/Home/components/shared/Revealed";

/** Seconds between each item in the hero's on-load sequence. */
const STAGGER = 0.09;
const BASE_DELAY = 0.1;

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  /** Position in the on-load sequence (0 = first). */
  index?: number;
};

/** On-load fade + rise used to stagger in the hero copy. */
const FadeUp = ({ children, className, index = 0 }: FadeUpProps) => {
  const revealed = useRevealed();

  return (
    <motion.div
      animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.7,
        ease: EASE_OUT,
        delay: BASE_DELAY + index * STAGGER,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
