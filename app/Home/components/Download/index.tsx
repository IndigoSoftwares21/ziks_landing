"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import CloudSky from "@/app/Home/components/Hero/CloudSky";
import { SCENES } from "@/app/Home/components/Story/scenes";
import { ScreenPhone } from "@/app/Home/components/Story/ui";
import { SUPPORT_EMAIL as EMAIL } from "@/config/seo";

const STORES = [
  {
    name: "App Store",
    icon: (
      <path d="M16.37 12.6c-.02-2.27 1.86-3.36 1.94-3.41-1.06-1.55-2.7-1.76-3.28-1.78-1.4-.14-2.73.82-3.44.82-.71 0-1.8-.8-2.96-.78-1.52.02-2.93.89-3.71 2.25-1.59 2.75-.41 6.82 1.13 9.05.76 1.09 1.66 2.31 2.83 2.27 1.14-.05 1.57-.73 2.94-.73s1.76.73 2.96.71c1.22-.02 2-1.11 2.74-2.21.87-1.26 1.22-2.49 1.24-2.55-.03-.01-2.37-.91-2.39-3.64ZM14.12 5.93c.62-.76 1.05-1.81.93-2.86-.9.04-2 .6-2.64 1.36-.58.67-1.09 1.75-.95 2.78 1 .08 2.03-.51 2.66-1.28Z" />
    ),
  },
  {
    name: "Google Play",
    icon: (
      <path d="M4.2 2.6c-.25.26-.4.67-.4 1.2v16.4c0 .53.15.94.4 1.2l.06.06L13.4 12.3v-.2L4.26 2.54l-.06.06Zm12.25 12.76-3.05-3.06v-.2l3.05-3.06.07.04 3.62 2.06c1.03.58 1.03 1.54 0 2.13l-3.62 2.05-.07.04Zm.07-.04-3.12-3.12-9.2 9.2c.34.36.9.4 1.53.05l10.79-6.13Zm0-6.24L5.73 2.95c-.63-.36-1.19-.31-1.53.05l9.2 9.2 3.12-3.12Z" />
    ),
  },
] as const;

const StoreButton = ({ store }: { store: (typeof STORES)[number] }) => (
  <a
    data-coming-soon
    className="flex h-14 items-center gap-3 rounded-full bg-white/90 pl-4 pr-6 text-left text-[#241C1E] shadow-[0_12px_32px_-10px_rgba(74,18,32,0.35)] backdrop-blur transition hover:bg-white"
    href="#download"
  >
    <svg aria-hidden className="size-6" fill="currentColor" viewBox="0 0 24 24">
      {store.icon}
    </svg>
    <span className="leading-tight">
      <span className="block text-[10px] text-[#756F71]">Coming soon on</span>
      <span className="block text-[15px] font-semibold">{store.name}</span>
    </span>
  </a>
);

/**
 * Closing scene on the cloud sky: a giant call to action with the phone
 * rising up through the middle of it, store buttons either side.
 * The small legal/footer row lives at its foot (the page then loops back
 * to the hero, so there is no separate footer below).
 */
const Download = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [260, 0]);
  const titleScale = useTransform(scrollYProgress, [0.2, 1], [0.8, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-svh flex-col overflow-hidden"
      data-nav="dark"
      id="download"
    >
      {/* Sky runs upside-down here: white at the top (meets the last scene), rose below */}
      <CloudSky className="absolute inset-0 -z-10 -scale-y-100" />
      {/* Soft white fade over the top edge so the last (white) scene melts in */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-[5] h-[22vh] bg-gradient-to-b from-white to-transparent"
      />

      <div className="relative flex flex-1 flex-col items-center justify-center pt-24">
        <motion.h2
          className="font-display whitespace-nowrap text-center text-[clamp(4rem,17vw,16rem)] uppercase leading-[0.85] text-white [text-shadow:0_8px_40px_rgba(74,18,32,0.25)]"
          style={{ scale: titleScale, opacity: titleOpacity }}
        >
          Get&nbsp;&nbsp;&nbsp;&nbsp;Ziks
        </motion.h2>

        {/* Phone rises through the middle of the headline */}
        <motion.div
          className="absolute left-1/2 top-[18%] -translate-x-1/2 md:top-[14%]"
          style={{ y: phoneY }}
        >
          <ScreenPhone
            className="origin-top scale-[0.72] md:scale-[0.82]"
            screens={["home"]}
          />
        </motion.div>

        <div className="relative z-10 mt-[46vh] flex w-full max-w-[1000px] flex-col items-center justify-between gap-3 px-5 sm:flex-row md:mt-[40vh]">
          <StoreButton store={STORES[0]} />
          <StoreButton store={STORES[1]} />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-5 pb-8 pt-16 text-xs text-white/80 md:flex-row md:items-center md:justify-between xl:px-0">
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {SCENES.map((scene) => (
            <Link
              key={scene.id}
              className="transition hover:text-white"
              href={`#${scene.id}`}
            >
              {scene.label}
            </Link>
          ))}
          <Link className="transition hover:text-white" href="#faq">
            FAQ
          </Link>
          <Link
            className="transition hover:text-white"
            href={`mailto:${EMAIL}`}
          >
            Contact
          </Link>
          <Link className="transition hover:text-white" href="/terms">
            Terms
          </Link>
          <Link className="transition hover:text-white" href="/privacy">
            Privacy
          </Link>
        </nav>
        <span>© {new Date().getFullYear()} Ziks · Available in Nigeria</span>
      </div>
    </section>
  );
};

export default Download;
