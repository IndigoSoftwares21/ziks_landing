"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { SCENES } from "@/app/Home/components/Story/scenes";
import { EASE_OUT } from "@/app/Home/components/shared/Reveal";
import ZiksLogo from "@/app/Home/components/shared/ZiksLogo";
import { getLenis } from "@/app/Home/components/SmoothScroll";

/**
 * Fixed bar: logo left, round menu button right. It reads the `data-nav`
 * ("dark" | "light") of whatever section is under it and flips its colours,
 * so it stays legible over the maroon silk and the light story scenes.
 * The menu opens as a full-screen maroon overlay with big display links.
 */
const Navbar = () => {
  const [tone, setTone] = useState<"dark" | "light">("dark");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const under = document
        .elementsFromPoint(window.innerWidth / 2, 44)
        .map((el) => el.closest<HTMLElement>("[data-nav]"))
        .find(Boolean);

      setTone(under?.dataset.nav === "light" ? "light" : "dark");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    getLenis()?.stop();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      getLenis()?.start();
    };
  }, [open]);

  const light = tone === "light" && !open;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[200]">
        <nav className="mx-auto flex h-[88px] w-full max-w-[1320px] items-center justify-between px-5 md:px-8">
          <Link
            aria-label="Ziks home"
            className={`transition-colors duration-300 ${light ? "[&>span]:!text-[#241C1E]" : ""}`}
            href="/"
            onClick={() => setOpen(false)}
          >
            <ZiksLogo preload size={32} />
          </Link>

          <button
            aria-controls="site-menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex size-14 items-center justify-center rounded-[22.5%] shadow-[0_10px_30px_-10px_rgba(36,28,30,0.35)] transition-colors duration-300 ${
              light ? "bg-[#701D30] text-white" : "bg-white text-[#701D30]"
            }`}
            type="button"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              aria-hidden
              fill="none"
              height="22"
              viewBox="0 0 22 22"
              width="22"
            >
              <motion.path
                animate={open ? { d: "M5 5l12 12" } : { d: "M3 7h16" }}
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
              <motion.path
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                d="M3 11h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
              <motion.path
                animate={open ? { d: "M5 17L17 5" } : { d: "M3 15h16" }}
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            animate={{ clipPath: "circle(150% at calc(100% - 52px) 44px)" }}
            className="fixed inset-0 z-[150] flex flex-col justify-center bg-[#4A1220] px-5 text-white md:px-16"
            exit={{ clipPath: "circle(0% at calc(100% - 52px) 44px)" }}
            id="site-menu"
            initial={{ clipPath: "circle(0% at calc(100% - 52px) 44px)" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <ul className="flex flex-col gap-1">
              {[
                ...SCENES.map((s) => ({ label: s.label, href: `#${s.id}` })),
                { label: "Get the app", href: "#download" },
              ].map((item, i) => (
                <motion.li
                  key={item.href}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{
                    delay: 0.15 + i * 0.05,
                    duration: 0.5,
                    ease: EASE_OUT,
                  }}
                >
                  <Link
                    className="font-display inline-block text-[clamp(2.75rem,8vw,6rem)] uppercase leading-[1] text-white transition-colors hover:text-[#F2D9DF]"
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-white/60">
              Launching soon on iOS &amp; Android
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
