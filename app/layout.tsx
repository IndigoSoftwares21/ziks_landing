import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontDisplay, fontSans } from "@/config/fonts";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_TITLE,
  SITE_URL,
} from "@/config/seo";

export const metadata: Metadata = {
  // Needed so the share image (app/opengraph-image.jpg) gets an absolute URL
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "finance",
  // One URL for the page, whatever query strings or trailing slashes link to it
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Stop iOS turning naira amounts and account numbers into phone links
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",
    title: `${SITE_NAME}: ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ziks",
    creator: "@ziks",
    title: `${SITE_NAME}: ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
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
  <html suppressHydrationWarning lang="en-NG">
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
