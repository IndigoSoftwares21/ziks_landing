import {
  Anton,
  Fira_Code as FontMono,
  Inter as FontSans,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

/** Tall condensed display face for the hero headline. */
export const fontDisplay = Anton({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: "400",
  variable: "--font-display",
});
