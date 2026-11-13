import type { ReactNode } from "react";

import {
  Chip,
  Coin,
  Field,
  IconDot,
  PATHS,
  Pill,
  QrCard,
  type ScreenKey,
  TagPill,
  Toast,
} from "./ui";

/**
 * One UI fragment that flies in around a scene's centrepiece.
 * `pos` places it on the stage (Tailwind classes, % of the stage);
 * `from` is the offset (px) it travels in from; `mobile: false` hides it
 * on small screens where space is tight.
 */
export type Fragment = {
  node: ReactNode;
  pos: string;
  from: [number, number];
  mobile?: boolean;
};

export type Scene = {
  id: string;
  /** Menu label */
  label: string;
  /** Stage background while this scene is on */
  bg: string;
  /** Real app screenshot shown on the phone at the centre of this scene */
  screen: ScreenKey;
  title: ReactNode;
  body: string;
  fragments: Fragment[];
};

/* Copy is written for Ziks and only describes features the app ships today. */
export const SCENES: Scene[] = [
  {
    id: "add-money",
    label: "Add money",
    bg: "#FFFFFF",
    screen: "addMoney",
    title: <>Top up from any bank</>,
    body: "Verify once and get a personal Ziks account number, or use a one-time account for a single top-up. Every transfer lands in your naira balance.",
    fragments: [
      {
        node: (
          <Chip
            lead={<IconDot path={PATHS.bank} tone="soft" />}
            sub="Your own account number"
            title="Your Ziks account"
          />
        ),
        pos: "left-[6%] top-[22%] md:left-[14%] md:top-[30%]",
        from: [-120, 0],
      },
      {
        node: (
          <Chip
            lead={<IconDot path={PATHS.copy} tone="soft" />}
            sub="Use once, for this top-up only"
            title="One-time account"
          />
        ),
        pos: "right-[14%] top-[20%]",
        from: [120, -20],
        mobile: false,
      },
      {
        node: <Toast sub="Just now" title="Your balance has been topped up" />,
        pos: "right-[10%] top-[44%]",
        from: [100, 40],
        mobile: false,
      },
    ],
  },
  {
    id: "send",
    label: "Send",
    bg: "#F6DDE4",
    screen: "home",
    title: <>Pay anyone by @tag</>,
    body: "Sending to another Ziks user is free and arrives instantly: type their Ziktag or scan their QR code. Need it at a bank? Send to any account for a small fee.",
    fragments: [
      {
        node: <TagPill strong tag="ada.o" />,
        pos: "right-[22%] top-[16%]",
        from: [60, -60],
      },
      {
        node: <TagPill tag="tolu" />,
        pos: "right-[10%] top-[27%]",
        from: [120, -10],
        mobile: false,
      },
      {
        node: <TagPill tag="kingsley.e" />,
        pos: "right-[17%] top-[38%]",
        from: [90, 30],
        mobile: false,
      },
      {
        node: <QrCard />,
        pos: "left-[12%] top-[16%]",
        from: [-80, -40],
        mobile: false,
      },
      {
        node: (
          <Chip
            lead={<IconDot path={PATHS.bank} tone="soft" />}
            sub="Small bank fee"
            title="To a bank account"
          />
        ),
        pos: "left-[5%] top-[18%] md:left-[8%] md:top-[46%]",
        from: [-120, 30],
      },
      {
        node: (
          <Toast
            sub="Free · Arrived instantly"
            title="₦15,000 sent to @ada.o"
          />
        ),
        pos: "left-[24%] top-[56%]",
        from: [-60, 80],
        mobile: false,
      },
    ],
  },
  {
    id: "crypto",
    label: "Crypto",
    bg: "#F7EBDD",
    screen: "swap",
    title: <>Crypto in. Naira out.</>,
    body: "Sell USDT, USDC and more from any wallet or exchange, and your naira is credited once the network confirms. Going the other way? Buy crypto with naira and send it to your own wallet.",
    fragments: [
      {
        node: <Coin color="#26A17B" ticker="USDT" />,
        pos: "left-[22%] top-[18%]",
        from: [-60, -60],
      },
      {
        node: <Coin color="#2775CA" ticker="USDC" />,
        pos: "left-[12%] top-[34%]",
        from: [-100, 0],
        mobile: false,
      },
      {
        node: <Coin color="#F7931A" ticker="BTC" />,
        pos: "right-[20%] top-[16%]",
        from: [60, -60],
      },
      {
        node: <Coin color="#627EEA" ticker="ETH" />,
        pos: "right-[12%] top-[33%]",
        from: [100, 0],
        mobile: false,
      },
      {
        node: <Field label="You send" value="250 USDT" />,
        pos: "left-[8%] top-[52%]",
        from: [-100, 40],
        mobile: false,
      },
      {
        node: <Field label="You get ≈" value="₦382,400" />,
        pos: "right-[8%] top-[52%]",
        from: [100, 40],
        mobile: false,
      },
      {
        node: (
          <div className="flex flex-wrap justify-center gap-2">
            <Pill>Tron (TRC20)</Pill>
            <Pill>BNB Smart Chain</Pill>
            <Pill>Solana</Pill>
            <Pill>TON</Pill>
          </div>
        ),
        pos: "left-[6%] top-[12%] w-[300px] [&>div]:!justify-start",
        from: [0, -60],
        mobile: false,
      },
    ],
  },
  {
    id: "bills",
    label: "Bills",
    bg: "#EFE3EC",
    screen: "more",
    title: <>Every bill, one balance</>,
    body: "Airtime, data, electricity and cable TV, paid straight from your naira balance. Prepaid meter tokens show up in the app, ready to copy.",
    fragments: [
      {
        node: (
          <Chip
            lead={<IconDot path={PATHS.phone} tone="soft" />}
            sub="MTN, Airtel, Glo, 9mobile"
            title="Airtime & data"
          />
        ),
        pos: "left-[6%] top-[20%] md:left-[12%] md:top-[22%]",
        from: [-120, -20],
      },
      {
        node: (
          <Chip
            lead={<IconDot path={PATHS.tv} tone="soft" />}
            sub="DStv, GOtv, StarTimes"
            title="Cable TV"
          />
        ),
        pos: "right-[12%] top-[20%]",
        from: [120, -20],
        mobile: false,
      },
      {
        node: (
          <div className="w-[250px] rounded-2xl bg-[#2E2A2C] p-4 text-left text-white shadow-[0_18px_40px_-12px_rgba(36,28,30,0.45)]">
            <div className="flex items-center justify-between text-[11px] text-white/60">
              <span>Electricity token</span>
              <span>Prepaid</span>
            </div>
            <div className="mt-1.5 font-mono text-[17px] tracking-[0.08em]">
              4821 0937 5512 0068
            </div>
          </div>
        ),
        pos: "left-[10%] top-[46%]",
        from: [-120, 40],
        mobile: false,
      },
      {
        node: (
          <Toast
            sub="Paid from your naira balance"
            title="Payment successful"
          />
        ),
        pos: "right-[10%] top-[44%]",
        from: [120, 40],
        mobile: false,
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    bg: "#FFFFFF",
    screen: "menu",
    title: <>Yours, and only yours</>,
    body: "A passcode approves every payment. Face ID or fingerprint opens the app, it locks itself when you step away, and a one-time BVN check keeps your account in your name.",
    fragments: [
      {
        node: (
          <Chip
            lead={<IconDot path={PATHS.scan} tone="maroon" />}
            sub="Stays on this phone"
            title="Unlock with Face ID"
          />
        ),
        pos: "left-[6%] top-[20%] md:left-[13%] md:top-[24%]",
        from: [-120, -20],
      },
      {
        node: (
          <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_40px_-12px_rgba(74,18,32,0.28)]">
            <span className="text-[12px] text-[#756F71]">
              Confirm with your PIN
            </span>
            <span className="flex gap-1.5">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="size-2.5 rounded-full bg-[#701D30]" />
              ))}
            </span>
          </div>
        ),
        pos: "right-[12%] top-[22%]",
        from: [120, -20],
        mobile: false,
      },
      {
        node: (
          <Chip
            lead={<IconDot path={PATHS.lock} tone="soft" />}
            sub="When you step away"
            title="Auto-lock"
          />
        ),
        pos: "left-[10%] top-[48%]",
        from: [-120, 40],
        mobile: false,
      },
      {
        node: (
          <Chip
            lead={<IconDot path={PATHS.check} tone="success" />}
            sub="Account in your name"
            title="BVN verified"
          />
        ),
        pos: "right-[10%] top-[46%]",
        from: [120, 40],
        mobile: false,
      },
      {
        node: (
          <Chip
            lead={<IconDot path={PATHS.eyeOff} tone="soft" />}
            title="Hide balances"
          />
        ),
        pos: "right-[30%] top-[10%]",
        from: [0, -80],
        mobile: false,
      },
    ],
  },
];
