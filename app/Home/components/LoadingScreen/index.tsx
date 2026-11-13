"use client";

import type { ReactNode } from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { EASE_OUT } from "@/app/Home/components/shared/Reveal";
import CloudSky, { startCloudClock } from "@/app/Home/components/Hero/CloudSky";
import { RevealedContext } from "@/app/Home/components/shared/Revealed";

/**
 * "Hello" in English and Nigerian languages, shown one after another while
 * the page loads.
 * TODO: have native speakers confirm spelling and tone marks (especially
 * Ibibio, Efik and Fulfulde) before launch.
 */
const GREETINGS = [
  { word: "Hello", language: "English" },
  { word: "How far?", language: "Nigerian Pidgin" },
  { word: "Ẹ n lẹ", language: "Yoruba" },
  { word: "Sannu", language: "Hausa" },
  { word: "Ndeewo", language: "Igbo" },
  { word: "Amesiere", language: "Ibibio" },
  { word: "Abadie", language: "Efik" },
  { word: "Jam na?", language: "Fulfulde (Fulani)" },
];

/** ms each greeting stays up; the first lingers a little longer. */
const FIRST_MS = 650;
const STEP_MS = 340;
/** Hold on the last greeting before lifting. */
const HOLD_MS = 450;

/**
 * Full-screen maroon loader that cycles through greetings, then lifts
 * like a curtain to reveal the page. Provides the "revealed" state so the
 * hero's entrance animations start as it lifts.
 * Reduced-motion users get a short, still version.
 */
const LoadingScreen = ({ children }: { children: ReactNode }) => {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Keep the page from scrolling under the loader
    document.documentElement.style.overflow = "hidden";

    if (reduce) {
      const t = setTimeout(() => setDone(true), 900);

      return () => clearTimeout(t);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let at = FIRST_MS;

    for (let i = 1; i < GREETINGS.length; i++) {
      timers.push(setTimeout(() => setIndex(i), at));
      at += STEP_MS;
    }
    timers.push(setTimeout(() => setDone(true), at + HOLD_MS));

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!done) return;
    document.documentElement.style.overflow = "";
    // Clouds start drifting only now, from the same frame the loader showed
    startCloudClock();
  }, [done]);

  const greeting = GREETINGS[index];

  return (
    <RevealedContext.Provider value={done}>
      {children}

      <AnimatePresence>
        {!done && (
          <motion.div
            key="loader"
            className="fixed inset-0 isolate z-[500] flex flex-col items-center justify-center overflow-hidden bg-[#8A2B41] text-white"
            // Lifts away like a curtain, with a soft curved bottom edge
            exit={{ clipPath: "inset(0 0 100% 0 round 0 0 50% 50%)" }}
            initial={{ clipPath: "inset(0 0 0% 0 round 0 0 0% 0%)" }}
            role="status"
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="sr-only">Loading Ziks</span>

            <CloudSky still className="absolute inset-0 -z-10" />

            <Image
              alt=""
              className="absolute left-5 top-6 md:left-8"
              height={36}
              src="/images/brand/ziks-mark.svg"
              width={36}
            />

            <div
              aria-hidden
              className="relative flex h-[1.1em] items-center justify-center text-[clamp(3.5rem,13vw,10rem)]"
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  key={greeting.word}
                  animate={{ y: "0%", opacity: 1 }}
                  className="font-display block whitespace-nowrap uppercase leading-none"
                  exit={{ y: "-60%", opacity: 0 }}
                  initial={{ y: "60%", opacity: 0 }}
                  transition={{ duration: 0.28, ease: EASE_OUT }}
                >
                  {greeting.word}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress: one segment per language */}
            <div aria-hidden className="absolute bottom-10 flex gap-1.5">
              {GREETINGS.map((g, i) => (
                <span
                  key={g.language}
                  className={`h-1 w-6 rounded-full transition-colors duration-300 ${
                    i <= index ? "bg-[#701D30]" : "bg-[#701D30]/15"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </RevealedContext.Provider>
  );
};

export default LoadingScreen;
