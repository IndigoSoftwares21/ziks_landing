/* eslint-disable @next/next/no-img-element -- Satori (next/og) only renders plain <img> */
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/**
 * Social share card (1200×630) rendered at build time from the hero copy,
 * so it stays in sync with the landing page. Used by both
 * app/opengraph-image.tsx and app/twitter-image.tsx.
 */

export const SHARE_ALT =
  "Ziks: Naira, crypto and bills. One app. Collect naira, receive crypto, swap instantly and pay every bill.";

export const SHARE_SIZE = { width: 1200, height: 630 };

const ACCENT = "#F2D9DF";

// Literal paths so the bundler only traces these files (not the whole project)
const read = {
  bg: () => readFile(join(process.cwd(), "assets/og/bg-texture.jpg")),
  logo: () =>
    readFile(join(process.cwd(), "public/images/brand/ziks-mark.svg")),
  medium: () => readFile(join(process.cwd(), "assets/og/Inter-Medium.woff")),
  semiBold: () =>
    readFile(join(process.cwd(), "assets/og/Inter-SemiBold.woff")),
};

const toUri = (data: Buffer, mime: string) =>
  `data:${mime};base64,${data.toString("base64")}`;

const FEATURES = [
  "Add money",
  "Send by Ziktag",
  "Crypto to naira",
  "Pay bills",
];

export async function renderShareImage() {
  const [bg, logo, medium, semiBold] = await Promise.all([
    read.bg(),
    read.logo(),
    read.medium(),
    read.semiBold(),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: "#4A1220",
        fontFamily: "Inter",
        color: "white",
      }}
    >
      {/* Maroon grain texture (pre-tinted: Satori ignores blend modes) */}
      <img
        alt=""
        height={630}
        src={toUri(bg, "image/jpeg")}
        style={{
          position: "absolute",
          inset: 0,
          width: 1200,
          height: 630,
          objectFit: "cover",
        }}
        width={1200}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1200,
          height: 630,
          padding: "56px 72px 48px",
          justifyContent: "flex-start",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            alt=""
            height={40}
            src={toUri(logo, "image/svg+xml")}
            width={40}
          />
          <div
            style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            Ziks
          </div>
        </div>

        <div
          style={{
            marginTop: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 92,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: -3,
          }}
        >
          <span>Naira, crypto &amp; bills.</span>
          <span style={{ color: ACCENT }}>One app.</span>
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 12 }}>
          {FEATURES.map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.22)",
                backgroundColor: "rgba(255,255,255,0.1)",
                fontSize: 22,
                fontWeight: 500,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            fontSize: 22,
            fontWeight: 500,
            color: ACCENT,
          }}
        >
          ziks.com
        </div>
      </div>
    </div>,
    {
      ...SHARE_SIZE,
      fonts: [
        { name: "Inter", data: medium, weight: 500, style: "normal" },
        { name: "Inter", data: semiBold, weight: 600, style: "normal" },
      ],
    },
  );
}
