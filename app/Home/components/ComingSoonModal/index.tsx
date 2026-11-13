"use client";

import { useEffect, useRef } from "react";

/**
 * One shared "coming soon" dialog for every download / app action on the page.
 * Any link or button with a `data-coming-soon` attribute opens it instead of navigating.
 * Uses the native <dialog> element: focus is trapped while open, Esc closes it,
 * and focus returns to the button that opened it.
 */
const ComingSoonModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as Element | null)?.closest(
        "[data-coming-soon]",
      );

      if (!trigger) return;
      event.preventDefault();
      dialogRef.current?.showModal();
    };

    // Clicking the dimmed backdrop (the <dialog> itself, outside the panel) closes it.
    // Keyboard users close with Esc or the buttons.
    const dialog = dialogRef.current;
    const onBackdropClick = (event: MouseEvent) => {
      if (event.target === dialog) dialog?.close();
    };

    // Capture phase so we run before next/link's handler and stop its #download scroll
    document.addEventListener("click", onClick, true);
    dialog?.addEventListener("click", onBackdropClick);

    return () => {
      document.removeEventListener("click", onClick, true);
      dialog?.removeEventListener("click", onBackdropClick);
    };
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-describedby="coming-soon-text"
      aria-labelledby="coming-soon-title"
      className="m-auto w-[calc(100%-40px)] max-w-[400px] scale-95 rounded-3xl bg-white p-0 text-left opacity-0 shadow-[0_24px_64px_rgba(112,29,48,0.25)] transition-[opacity,scale,display,overlay] transition-discrete duration-200 backdrop:bg-[#4E1421]/50 backdrop:opacity-0 backdrop:backdrop-blur-[2px] backdrop:transition-[opacity,display,overlay] backdrop:transition-discrete backdrop:duration-200 open:scale-100 open:opacity-100 open:backdrop:opacity-100 starting:open:scale-95 starting:open:opacity-0 starting:open:backdrop:opacity-0"
    >
      <div className="relative flex flex-col items-start gap-4 p-7">
        <button
          aria-label="Close"
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-[#F5F2F3] text-[#701D30] outline-none transition hover:bg-[#E8DFE2] focus-visible:ring-2 focus-visible:ring-[#E4B4C0]"
          type="button"
          onClick={close}
        >
          <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.6"
            />
          </svg>
        </button>

        <h2
          className="pr-8 text-2xl font-medium leading-[1.15] tracking-[-0.48px] text-[#2E2A2C]"
          id="coming-soon-title"
        >
          Ziks is almost here
        </h2>

        <p
          className="text-[15px] leading-[1.45] tracking-[-0.15px] text-[#756F71]"
          id="coming-soon-text"
        >
          We&apos;re putting the finishing touches on the app. It&apos;ll be on
          the App Store and Google Play very soon.
        </p>

        <button
          className="mt-1 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#701D30] text-sm font-medium tracking-[-0.14px] text-[#E4B4C0] transition hover:brightness-110"
          type="button"
          onClick={close}
        >
          Got it
        </button>
      </div>
    </dialog>
  );
};

export default ComingSoonModal;
