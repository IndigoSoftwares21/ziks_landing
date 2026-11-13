import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontDisplay, fontSans } from "@/config/fonts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziks.com";
const TITLE = "Ziks: Naira, crypto and bills. One app.";
const DESCRIPTION =
  "Top up from any bank, send to any Ziktag free and instantly, swap crypto for naira and pay airtime, data, electricity and cable TV, all from one naira balance.";

export const metadata: Metadata = {
  // Needed so the generated share image (app/opengraph-image.tsx) gets an absolute URL
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Ziks",
    url: "/",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ziks",
    creator: "@ziks",
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#4A1220",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html suppressHydrationWarning lang="en">
    <head />
    <body
      className={clsx("antialiased", fontSans.variable, fontDisplay.variable)}
    >
      <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
        {children}
      </Providers>
    </body>
  </html>
);

export default RootLayout;
