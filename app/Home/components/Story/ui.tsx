import type { ReactNode } from "react";

import Image from "next/image";

/*
 * Small pieces of Ziks app UI, drawn in code (no screenshots) so they stay
 * sharp, match the app's palette and can be animated individually.
 * Copy and labels follow the Ziks app's own wording.
 */

/* Icon paths: Lucide (ISC licence) */
export const Icon = ({
  children,
  className = "size-4",
  strokeWidth = 2,
}: {
  children: ReactNode;
  className?: string;
  strokeWidth?: number;
}) => (
  <svg
    aria-hidden
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
  >
    {children}
  </svg>
);

export const PATHS = {
  check: <path d="M20 6 9 17l-5-5" />,
  eye: (
    <>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  plus: (
    <>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </>
  ),
  send: (
    <>
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </>
  ),
  swap: (
    <>
      <path d="M8 3 4 7l4 4" />
      <path d="M4 7h16" />
      <path d="m16 21 4-4-4-4" />
      <path d="M20 17H4" />
    </>
  ),
  bolt: (
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  ),
  bank: (
    <>
      <path d="M10 18v-7" />
      <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
      <path d="M14 18v-7" />
      <path d="M18 18v-7" />
      <path d="M3 22h18" />
      <path d="M6 18v-7" />
    </>
  ),
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  scan: (
    <>
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
      <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    </>
  ),
  lock: (
    <>
      <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
  eyeOff: (
    <>
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
      <path d="m2 2 20 20" />
    </>
  ),
  phone: (
    <>
      <rect height="20" rx="2" ry="2" width="14" x="5" y="2" />
      <path d="M12 18h.01" />
    </>
  ),
  wifi: (
    <>
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </>
  ),
  tv: (
    <>
      <rect height="15" rx="2" ry="2" width="20" x="2" y="7" />
      <polyline points="17 2 12 7 7 2" />
    </>
  ),
  copy: (
    <>
      <rect height="14" rx="2" ry="2" width="14" x="8" y="8" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </>
  ),
  bell: (
    <>
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
    </>
  ),
  grid: (
    <>
      <rect height="7" rx="1" width="7" x="3" y="3" />
      <rect height="7" rx="1" width="7" x="14" y="3" />
      <rect height="7" rx="1" width="7" x="14" y="14" />
      <rect height="7" rx="1" width="7" x="3" y="14" />
    </>
  ),
};

const CARD_SHADOW = "shadow-[0_18px_40px_-12px_rgba(74,18,32,0.28)]";

/** The Ziks naira balance card (home screen hero card). */
export const BalanceCard = ({
  amount,
  className = "",
}: {
  amount: ReactNode;
  className?: string;
}) => (
  <div
    className={`relative w-[320px] overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#8A2B41_0%,#701D30_45%,#4E1421_100%)] p-5 text-white ${CARD_SHADOW} ${className}`}
  >
    {/* Folded-Z echo of the logo, as a faint watermark */}
    <svg
      aria-hidden
      className="absolute -right-6 -top-6 size-40 opacity-[0.09]"
      viewBox="0 0 1024 1024"
    >
      <polygon
        fill="#fff"
        points="236,650 648,236 788,236 788,374 374,788 236,788"
      />
    </svg>
    <div className="flex items-center justify-between text-xs text-white/75">
      <span>Naira (NGN)</span>
      <Icon className="size-4">{PATHS.eye}</Icon>
    </div>
    <div className="mt-2 text-[30px] font-semibold leading-none tracking-[-0.02em]">
      {amount}
    </div>
    <div className="mt-5 grid grid-cols-2 gap-2.5 text-[13px] font-medium">
      <span className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-white text-[#701D30]">
        <Icon className="size-4">{PATHS.plus}</Icon>
        Add money
      </span>
      <span className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-white/15">
        <Icon className="size-4">{PATHS.send}</Icon>
        Send
      </span>
    </div>
  </div>
);

/** White pill with an icon/avatar slot, a title and an optional subtitle. */
export const Chip = ({
  lead,
  title,
  sub,
  trail,
  className = "",
}: {
  lead?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  trail?: ReactNode;
  className?: string;
}) => (
  <div
    className={`flex items-center gap-3 rounded-2xl bg-white px-3.5 py-3 text-left ${CARD_SHADOW} ${className}`}
  >
    {lead}
    <div className="min-w-0">
      <div className="whitespace-nowrap text-[13px] font-medium leading-tight text-[#2E2A2C]">
        {title}
      </div>
      {sub && (
        <div className="mt-0.5 whitespace-nowrap text-[11px] leading-tight text-[#756F71]">
          {sub}
        </div>
      )}
    </div>
    {trail}
  </div>
);

/** Round icon badge used as a Chip lead. */
export const IconDot = ({
  path,
  tone = "maroon",
}: {
  path: ReactNode;
  tone?: "maroon" | "soft" | "success";
}) => {
  const tones = {
    maroon: "bg-[#701D30] text-white",
    soft: "bg-[#FBF0F2] text-[#701D30]",
    success: "bg-[#E9F6EF] text-[#1E8E5A]",
  };

  return (
    <span
      className={`flex size-9 shrink-0 items-center justify-center rounded-full ${tones[tone]}`}
    >
      <Icon className="size-[18px]">{path}</Icon>
    </span>
  );
};

/** "Input field" look: small label over a value. */
export const Field = ({
  label,
  value,
  className = "",
}: {
  label: string;
  value: ReactNode;
  className?: string;
}) => (
  <div
    className={`w-[220px] rounded-2xl border border-[#E8DFE2] bg-white px-4 py-2.5 text-left ${CARD_SHADOW} ${className}`}
  >
    <div className="text-[10px] uppercase tracking-[0.08em] text-[#A19A9C]">
      {label}
    </div>
    <div className="mt-0.5 text-[15px] font-medium text-[#2E2A2C]">{value}</div>
  </div>
);

/** Green success toast. */
export const Toast = ({
  title,
  sub,
  className = "",
}: {
  title: ReactNode;
  sub?: ReactNode;
  className?: string;
}) => (
  <Chip
    className={className}
    lead={<IconDot path={PATHS.check} tone="success" />}
    sub={sub}
    title={title}
  />
);

/** Coloured @ziktag pill. */
export const TagPill = ({
  tag,
  strong = false,
  className = "",
}: {
  tag: string;
  strong?: boolean;
  className?: string;
}) => (
  <span
    className={`inline-flex h-9 items-center rounded-full px-4 text-[13px] font-medium ${
      strong
        ? "bg-[#701D30] text-white"
        : "bg-white text-[#701D30] ring-1 ring-[#F2D9DF]"
    } ${CARD_SHADOW} ${className}`}
  >
    @{tag}
  </span>
);

/** Generic coin badge: brand-colour disc with the ticker. */
export const Coin = ({
  ticker,
  color,
  className = "",
}: {
  ticker: string;
  color: string;
  className?: string;
}) => (
  <span
    className={`flex size-14 items-center justify-center rounded-full text-[11px] font-semibold tracking-wide text-white ${CARD_SHADOW} ring-4 ring-white ${className}`}
    style={{ background: color }}
  >
    {ticker}
  </span>
);

/** Small neutral label pill (networks, providers, categories). */
export const Pill = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex h-8 items-center rounded-full bg-white px-3.5 text-xs font-medium text-[#2E2A2C] ring-1 ring-[#E8DFE2] ${CARD_SHADOW} ${className}`}
  >
    {children}
  </span>
);

/** Decorative QR-style code (not scannable), deterministic so SSR matches. */
export const QrCard = ({ className = "" }: { className?: string }) => {
  const n = 21;
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;

    return seed / 2147483647;
  };
  const finder = (x: number, y: number) =>
    [
      [0, 0],
      [n - 7, 0],
      [0, n - 7],
    ].some(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7);
  const cells: [number, number][] = [];

  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      if (!finder(x, y) && rand() > 0.52) cells.push([x, y]);
    }

  return (
    <div className={`rounded-3xl bg-white p-3.5 ${CARD_SHADOW} ${className}`}>
      <svg aria-hidden className="size-[112px]" viewBox={`0 0 ${n} ${n}`}>
        {[
          [0, 0],
          [n - 7, 0],
          [0, n - 7],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`} fill="#2E2A2C">
            <path
              d={`M${x} ${y}h7v7h-7z M${x + 1} ${y + 1}v5h5v-5z`}
              fillRule="evenodd"
            />
            <rect height="3" width="3" x={x + 2} y={y + 2} />
          </g>
        ))}
        {cells.map(([x, y]) => (
          <rect
            key={`${x}-${y}`}
            fill="#2E2A2C"
            height="1"
            width="1"
            x={x}
            y={y}
          />
        ))}
      </svg>
      <div className="mt-2 text-center text-[11px] font-medium text-[#701D30]">
        @ada.o
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Phone frame around real Ziks app screenshots                        */
/* ------------------------------------------------------------------ */

/** Screenshots from the Ziks iOS app (iPhone 17 Pro, dark mode), 1206×2622. */
export const SCREENS = {
  home: {
    src: "/images/app/home.webp",
    alt: "Ziks home screen with naira balance and quick actions",
  },
  addMoney: {
    src: "/images/app/add-money.webp",
    alt: "Ziks add money screen: fund your balance by bank transfer",
  },
  swap: {
    src: "/images/app/swap.webp",
    alt: "Ziks swap screen selling Bitcoin for naira",
  },
  more: {
    src: "/images/app/more.webp",
    alt: "Ziks View more menu: add money, Ziktag, airtime, data, electricity, cable TV",
  },
  menu: {
    src: "/images/app/menu.webp",
    alt: "Ziks menu with Face ID, hide balances and change passcode",
  },
} as const;

export type ScreenKey = keyof typeof SCREENS;

/** Screenshot proportions (iPhone 17 Pro, 1206×2622 px). */
const SCREEN_RATIO = 2622 / 1206;

/**
 * Body measurements for a phone `width` px wide, in iPhone 17 Pro
 * proportions: thin aluminium band, black glass border, screen with the
 * Pro's corner radius. Exported so animations can size things exactly.
 */
export const phoneDims = (width: number) => {
  const band = width * 0.014; // aluminium frame seen from the front
  const border = width * 0.03; // black glass border around the display
  const inset = band + border;
  const screenW = width - inset * 2;
  const screenH = screenW * SCREEN_RATIO;
  const screenR = screenW * 0.14;

  return {
    band,
    border,
    inset,
    screenW,
    screenH,
    height: screenH + inset * 2,
    screenR,
    bodyR: screenR + inset,
  };
};

/** Aluminium finish: brushed dark graphite with lit and shaded edges. */
const METAL =
  "linear-gradient(135deg,#8E8A8D 0%,#3C383A 18%,#2A2628 50%,#4A4547 78%,#9B9799 100%)";
const BUTTON = "linear-gradient(90deg,#2A2628 0%,#6E696B 45%,#2A2628 100%)";

/**
 * iPhone 17 Pro-style device drawn in code, showing real Ziks screenshots:
 * aluminium band with edge highlights, black border, Dynamic Island,
 * side buttons (Action button + volume on the left; side button + Camera
 * Control on the right) and a soft glass reflection.
 * With several `screens`, `active` crossfades between them.
 */
export const ScreenPhone = ({
  screens,
  active = screens[0],
  width = 300,
  preload = false,
  className = "",
}: {
  screens: ScreenKey[];
  active?: ScreenKey;
  width?: number;
  preload?: boolean;
  className?: string;
}) => {
  const d = phoneDims(width);
  const btnW = Math.max(2, width * 0.011);
  // Left: Action button, volume up, volume down. Right: side button, Camera Control
  const buttons = [
    { side: "left", top: 0.17, len: 0.05 },
    { side: "left", top: 0.245, len: 0.085 },
    { side: "left", top: 0.345, len: 0.085 },
    { side: "right", top: 0.255, len: 0.13 },
    { side: "right", top: 0.6, len: 0.07 },
  ] as const;

  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width, height: d.height }}
    >
      {/* Side buttons, just proud of the frame */}
      {buttons.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            [b.side]: -btnW + 0.5,
            top: d.height * b.top,
            height: d.height * b.len,
            width: btnW,
            background: BUTTON,
          }}
        />
      ))}

      {/* Aluminium band */}
      <div
        className="absolute inset-0 shadow-[0_50px_90px_-30px_rgba(36,28,30,0.6),0_18px_36px_-18px_rgba(36,28,30,0.45)]"
        style={{ borderRadius: d.bodyR, background: METAL }}
      >
        {/* Fine highlight on the outer edge */}
        <div
          className="absolute inset-0 ring-1 ring-inset ring-white/25"
          style={{ borderRadius: d.bodyR }}
        />
      </div>

      {/* Black glass border */}
      <div
        className="absolute bg-[#050405]"
        style={{
          inset: d.band,
          borderRadius: d.bodyR - d.band,
        }}
      />

      {/* Display */}
      <div
        className="absolute overflow-hidden bg-[#141012]"
        style={{
          left: d.inset,
          top: d.inset,
          width: d.screenW,
          height: d.screenH,
          borderRadius: d.screenR,
        }}
      >
        {screens.map((key) => (
          <Image
            key={key}
            fill
            alt={SCREENS[key].alt}
            className={`object-cover transition-opacity duration-700 ${key === active ? "opacity-100" : "opacity-0"}`}
            preload={preload && key === active}
            sizes={`${Math.ceil(d.screenW)}px`}
            src={SCREENS[key].src}
          />
        ))}

        {/* Dynamic Island (covers the one some screenshots already include) */}
        <span
          className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black"
          style={{
            top: d.screenH * 0.0175,
            width: d.screenW * 0.315,
            height: d.screenH * 0.0355,
          }}
        />

        {/* Glass reflection */}
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.04)_28%,rgba(255,255,255,0)_45%)]" />
      </div>
    </div>
  );
};

/** Width the phone has at full size (in the hero). */
export const STAGE_PHONE_MAX = 280;
/** On stage the phone is centred this far down the viewport. */
export const STAGE_CENTER = 0.385;

/**
 * Width of the phone at the centre of a story scene: up to 86% of full size,
 * smaller on short screens so it fits in the top 55% above the headline.
 */
export const stagePhoneWidth = (vh: number) =>
  Math.min(
    STAGE_PHONE_MAX * 0.86,
    (vh * 0.55) / (phoneDims(STAGE_PHONE_MAX).height / STAGE_PHONE_MAX),
  );
