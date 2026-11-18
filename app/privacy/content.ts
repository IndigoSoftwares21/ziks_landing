/**
 * Privacy Policy copy. Same rules as the Terms: customer-facing only. Name
 * categories of partners, never vendors, and describe what we collect without
 * revealing how our systems, checks or monitoring work.
 */

import type { LegalSection } from "@/app/Legal/components/LegalPage";

import { COMPANY_NAME as COMPANY } from "@/config/seo";

export const PRIVACY_EFFECTIVE_DATE = "18 November 2026";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "about",
    title: "About this policy",
    blocks: [
      `This Privacy Policy explains how ${COMPANY} ("we", "us", "our") collects, uses, shares and protects your personal data when you use the Ziks mobile app and website (together, "Ziks"), and the rights you have over it.`,
      "We are the data controller for the personal data described here. We process it in line with the Nigeria Data Protection Act 2023 (NDPA) and other applicable Nigerian law.",
      "This policy should be read with our Terms of Use (ziks.app/terms).",
    ],
  },
  {
    id: "collect",
    title: "What we collect",
    blocks: [
      "Information you give us:",
      [
        "Account details: your phone number, email address and Ziktag.",
        "Identity information: your Bank Verification Number (BVN), legal name, date of birth and, where requested, your gender, home address and a selfie used to confirm that you are the owner of the BVN.",
        "Payment details: bank account numbers you send money to, wallet addresses you send crypto to, and phone, meter or smartcard numbers you pay bills for.",
        "Messages you send us when you contact support.",
      ],
      "Information created when you use Ziks:",
      [
        "Transaction records: top-ups, transfers, crypto deposits and purchases, bill payments, amounts, dates, recipients and references.",
        "Device and sign-in information: your device name and type, operating system, app version, IP address and the times you sign in, so we can show you your active devices and protect your account.",
      ],
      "Information from others:",
      [
        "Identity verification results that confirm the details linked to your BVN.",
        "Payment information from banks and partners when money is sent to or from your account, such as the sender's name on a transfer into your Ziks account number.",
      ],
    ],
  },
  {
    id: "device",
    title: "Your device and app permissions",
    blocks: [
      "Ziks asks for permissions only when a feature needs them, and you can turn them off at any time in your phone's settings.",
      [
        "Camera: to scan QR codes and to take a selfie when you verify your identity. Photos are not taken in the background, and the selfie is not saved to your photo library.",
        "Face ID or fingerprint: to unlock the app and approve payments. Your biometric data stays on your device; we never receive or store it.",
        "Contacts: only if you choose to pick a contact, for example to buy airtime for a friend. We receive only the number you select, not your contact list.",
      ],
      "Ziks does not use your location, and does not include advertising or third-party analytics trackers.",
    ],
  },
  {
    id: "use",
    title: "How we use your data, and why",
    blocks: [
      "Under the NDPA we must have a lawful basis for each use of your data. We use it:",
      [
        "To provide Ziks to you (performance of our contract with you): opening and running your account, processing payments, showing your history and sending one-time codes and transaction updates.",
        "To meet our legal obligations: verifying your identity, keeping records, preventing money laundering, fraud and other financial crime, and responding to lawful requests from regulators, courts and law enforcement.",
        "For our legitimate interests, balanced against your rights: keeping Ziks and your account secure, detecting and preventing fraud and abuse, handling complaints, and improving our services.",
        "With your consent, where we ask for it: for example, optional marketing messages. You can withdraw consent at any time.",
      ],
      "We do not sell your personal data.",
    ],
  },
  {
    id: "share",
    title: "Who we share it with",
    blocks: [
      "We share your personal data only where needed for the purposes above, and only with:",
      [
        "Licensed banks and payment partners that provide account numbers and process transfers to and from your account.",
        "Identity verification partners that confirm your BVN details and selfie.",
        "Digital asset partners that process crypto deposits, conversions and purchases.",
        "Bill payment partners that deliver airtime, data, electricity tokens and other services you pay for.",
        "Service providers that host our systems and send SMS and email messages on our behalf.",
        "Regulators, law enforcement, courts and other public authorities, where the law requires or allows it.",
        "A buyer or successor, if our business is sold or reorganised, who will be bound by this policy.",
      ],
      "When you send money to another Ziks user, they see your name and Ziktag on the transaction.",
      "Our partners may only use your data to provide their service to us or as the law requires, and must protect it to the standard the NDPA sets.",
    ],
  },
  {
    id: "transfers",
    title: "International transfers",
    blocks: [
      "Some of our partners and service providers may store or process data outside Nigeria. Where that happens, we transfer data only as the NDPA allows, for example where the destination has adequate data protection or where appropriate safeguards are in place.",
    ],
  },
  {
    id: "security",
    title: "How we protect your data",
    blocks: [
      "We use technical and organisational measures to keep your data safe, including encryption of sensitive identity information, encrypted connections, access controls that limit who can see your data, and records of access to it. Your PIN is never stored in readable form, and the app keeps your sign-in session in your phone's secure storage.",
      "No system is perfectly secure. If a personal data breach puts your rights at high risk, we will tell you and the Nigeria Data Protection Commission as the law requires.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    blocks: [
      "We keep your personal data for as long as your account is open. After you close your account, we keep identity and transaction records for as long as Nigerian law requires, generally at least five years, to meet our anti-money laundering and record-keeping obligations. We then delete or anonymise it.",
      "Temporary data, such as the photo taken during a selfie check, is deleted from your device as soon as it has been used.",
    ],
  },
  {
    id: "rights",
    title: "Your rights",
    blocks: [
      "Under the NDPA you have the right to:",
      [
        "be informed about how we use your data (this policy);",
        "access a copy of the personal data we hold about you;",
        "have inaccurate or incomplete data corrected;",
        "have your data deleted, where we no longer have a lawful reason to keep it;",
        "restrict or object to certain uses of your data, including direct marketing;",
        "receive your data in a commonly used format, or have it sent to another provider (data portability);",
        "withdraw your consent at any time, where we rely on consent; and",
        "not be subject to decisions based solely on automated processing that significantly affect you, without a way to ask a person to review them.",
      ],
      "To exercise any of these rights, email us from the email address linked to your account. We may need to confirm your identity first. We will respond within the time the law allows. Some data must be kept for legal reasons even if you ask us to delete it; if so, we will tell you.",
      "If you are unhappy with how we handle your data, you can complain to the Nigeria Data Protection Commission (NDPC).",
    ],
  },
  {
    id: "children",
    title: "Children",
    blocks: [
      "Ziks is only for people aged 18 and over. We do not knowingly collect data from children. If you believe a child has opened an account, contact us and we will close it.",
    ],
  },
  {
    id: "website",
    title: "Our website",
    blocks: [
      "Our website (ziks.app) does not ask you to sign in and does not use advertising or tracking cookies. Our hosting provider may keep standard server logs, such as IP addresses and the pages requested, to keep the site running and secure.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    blocks: [
      "We may update this policy from time to time. We will publish the updated version here with a new effective date, and tell you in the app or by email before any change that materially affects how we use your data.",
    ],
  },
];
