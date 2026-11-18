/**
 * Everything search engines read about Ziks, in one place: the site URL,
 * title/description, and the FAQ (rendered on the page AND as FAQPage
 * structured data, so the two can never disagree — Google requires that).
 *
 * Keep every answer true to the product. No claims (licences, insurance,
 * rates, timings) that aren't already stated elsewhere on the site.
 */

/** Production origin, no trailing slash. Set NEXT_PUBLIC_SITE_URL per environment. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ziks.app"
).replace(/\/$/, "");

export const SITE_NAME = "Ziks";

/** ~60 characters: brand first, then what people actually search for. */
export const SITE_TITLE =
  "Ziks: Crypto to Naira, Send Money & Pay Bills in Nigeria";

/** ~155 characters, written for the search result snippet. */
export const SITE_DESCRIPTION =
  "Convert USDT, USDC and more to naira, send money free to any Ziktag, top up from any Nigerian bank and pay airtime, data, electricity and TV bills in one app.";

/** Short tagline for social cards and the app manifest. */
export const SITE_TAGLINE = "Naira, crypto and bills. One app.";

export const SUPPORT_EMAIL = "hello@ziks.app"; // TODO: confirm this inbox exists

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "What is Ziks?",
    answer:
      "Ziks is a Nigerian money app with one naira balance for everything: top up from any bank, receive and sell crypto for naira, send money to other Ziks users by their Ziktag, and pay airtime, data, electricity and cable TV bills.",
  },
  {
    question: "How do I convert crypto to naira on Ziks?",
    answer:
      "Send USDT, USDC or another supported coin to your Ziks deposit address from any wallet or exchange. Once the network confirms the deposit, the naira value is credited to your Ziks balance, ready to spend, send or withdraw to your bank.",
  },
  {
    question: "Which cryptocurrencies and networks does Ziks support?",
    answer:
      "You can deposit USDT, USDC, BTC and ETH, with networks such as Tron (TRC20), BNB Smart Chain, Solana and TON. You can also buy crypto with naira and send it to your own wallet.",
  },
  {
    question: "How do I add money to my Ziks account?",
    answer:
      "Verify once and get a personal Ziks account number you can fund from any Nigerian bank, or use a one-time account for a single top-up. Every transfer lands in your naira balance.",
  },
  {
    question: "Is it free to send money on Ziks?",
    answer:
      "Sending money to another Ziks user is free and arrives instantly: type their Ziktag or scan their QR code. Sending to a bank account is also possible for a small fee.",
  },
  {
    question: "Which bills can I pay with Ziks?",
    answer:
      "Buy airtime and data for MTN, Airtel, Glo and 9mobile, pay for DStv, GOtv and StarTimes, and buy prepaid electricity tokens, all straight from your naira balance. Meter tokens show up in the app, ready to copy.",
  },
  {
    question: "How does Ziks keep my account secure?",
    answer:
      "A passcode approves every payment, Face ID or fingerprint opens the app, and it locks itself when you step away. A one-time BVN check keeps your account in your name.",
  },
  {
    question: "When can I download Ziks?",
    answer:
      "Ziks is coming soon to the App Store and Google Play, for customers in Nigeria.",
  },
];
