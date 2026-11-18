/**
 * Terms of Use copy. Plain strings render as paragraphs, string arrays as
 * bullet lists. Keep this customer-facing: no partner names, internal
 * processes or system details, and no exact limits or fees (those change and
 * are always shown in the app before the user confirms).
 */

import type { LegalSection } from "@/app/Legal/components/LegalPage";

import { COMPANY_NAME as COMPANY } from "@/config/seo";

export const TERMS_EFFECTIVE_DATE = "18 November 2026";

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    blocks: [
      `These Terms of Use ("Terms") govern your use of the Ziks mobile app, website and related services (together, "Ziks"). Ziks is operated by ${COMPANY}, a company incorporated in Nigeria ("we", "us", "our").`,
      "By creating a Ziks account or using Ziks, you agree to these Terms. If you do not agree, do not use Ziks.",
      "Certain services, such as account numbers, bank transfers, bill payments and digital asset services, are provided with the support of licensed third-party partners. Where a partner's own terms apply to a service, we will make that clear in the app.",
    ],
  },
  {
    id: "eligibility",
    title: "Who can use Ziks",
    blocks: [
      "To open a Ziks account you must:",
      [
        "be at least 18 years old;",
        "have a valid Nigerian phone number and a Bank Verification Number (BVN) in your own name;",
        "be able to enter into a binding contract under Nigerian law; and",
        "use Ziks only for yourself, not on behalf of another person or business.",
      ],
      "You may hold only one Ziks account, and each BVN can be linked to only one account.",
    ],
  },
  {
    id: "verification",
    title: "Your account and identity verification",
    blocks: [
      "We are required to know who our customers are. When you sign up, and at any time afterwards, we may ask you to provide or confirm information about yourself, such as your legal name, date of birth, BVN, address, a selfie or other documents. You agree that the information you give us is true, complete and kept up to date.",
      "Some features, such as receiving a personal account number, are only available once verification is complete. We may decline to open an account, or limit what you can do, if we cannot verify you.",
      "Your Ziktag is your public username for receiving money. It must not impersonate anyone or be offensive. You can change it from time to time within the limits shown in the app, and we may reclaim or change a Ziktag that breaks these Terms.",
    ],
  },
  {
    id: "security",
    title: "Keeping your account secure",
    blocks: [
      "Your PIN, one-time codes and the devices you sign in on are the keys to your money. You agree to:",
      [
        "keep your PIN and one-time codes secret and never share them with anyone, including anyone claiming to work for Ziks; we will never ask for them;",
        "only enable Face ID or fingerprint unlock on a device where the biometrics stored belong to you alone;",
        "keep your phone and app up to date and protected by a screen lock; and",
        "tell us immediately at the address below if you think someone else knows your PIN or has used your account, or if your phone is lost or stolen.",
      ],
      "Ziks locks itself after a period of inactivity and requires your PIN or biometrics to approve payments. You can review and sign out of your devices from the app.",
      "You are responsible for transactions approved with your PIN or biometrics, unless you told us your account was compromised before the transaction was made, or the law says otherwise.",
    ],
  },
  {
    id: "wallet",
    title: "Your naira balance",
    blocks: [
      "Your Ziks balance shows the naira we hold for you. It is not a bank deposit account, and it does not earn interest.",
      "You can add money by bank transfer to your personal Ziks account number or to a one-time account generated for a single top-up. Money is credited once it is received. One-time accounts expire after the time shown in the app; if you pay one after it expires, we will still credit your balance once the payment reaches us.",
      "If money is credited to your account by mistake, you must not spend it, and you authorise us to reverse it.",
    ],
  },
  {
    id: "transfers",
    title: "Sending money",
    blocks: [
      "You can send money to another Ziks user by their Ziktag or QR code, and to Nigerian bank accounts.",
      [
        "Transfers to other Ziks users are free and arrive instantly.",
        "Transfers to bank accounts may carry a fee. Any fee is shown before you confirm with your PIN. Where the final fee is not known in advance, we may set aside an estimated amount and return any difference once the transfer completes.",
        "Check the recipient's details before you confirm. Once a transfer is completed it generally cannot be reversed, and we are not responsible for money sent to the wrong person because of details you entered.",
        "If a bank transfer fails, the amount (and any fee) is returned to your balance. Occasionally a transfer's outcome is unclear for a while; in that case we will look into it and either complete or refund it.",
      ],
      "Minimum and maximum amounts and daily limits apply to transfers. Current limits are shown in the app and may change.",
    ],
  },
  {
    id: "crypto",
    title: "Digital assets",
    blocks: [
      "Ziks lets you receive supported digital assets (such as USDT and USDC) and convert them to naira, and buy supported digital assets with naira to send to a wallet you choose. Supported assets and networks are listed in the app and may change.",
      "Receiving crypto:",
      [
        "Each deposit address works only for the asset and network shown with it. Assets sent on the wrong network, or assets that are not supported, may be permanently lost and we may be unable to recover them.",
        "Deposits are credited after the required number of network confirmations and converted to naira at our rate at the time of conversion. Deposits below the minimum shown in the app may not be credited automatically.",
      ],
      "Buying and sending crypto:",
      [
        "Before you confirm, the app shows a quote with the rate, the amount you will receive and any network fee. Quotes are valid for a short time; if the price moves before you confirm, we will show you an updated quote.",
        "You are responsible for entering the correct wallet address and network. Blockchain transactions cannot be reversed once sent, and we cannot recover assets sent to a wrong or mistyped address.",
        "If a purchase fails before the asset is sent, we will refund your naira.",
      ],
      "Our rates include a margin, so the rate you receive may differ from rates quoted elsewhere. Digital asset prices are volatile, and Ziks does not give investment, financial or tax advice. You are responsible for any taxes that apply to you.",
    ],
  },
  {
    id: "bills",
    title: "Bills and airtime",
    blocks: [
      "You can buy airtime and data and pay for electricity, cable TV and other services listed in the app.",
      [
        "The total, including any service fee, is shown before you confirm.",
        "Make sure your phone number, meter number or smartcard number is correct. We are not responsible for value delivered to a wrong number you entered.",
        "Electricity tokens are shown in the app once issued.",
        "If a payment fails, we will refund your balance. If a payment's outcome is unclear, we will look into it and either confirm delivery or refund you.",
      ],
      "The services themselves are provided by the relevant network, distribution company or TV provider, and their own terms apply.",
    ],
  },
  {
    id: "fees",
    title: "Fees, rates and limits",
    blocks: [
      "We will always show you any fee, rate or total before you confirm a transaction. By confirming, you agree to pay it.",
      "We set minimum and maximum amounts and limits on transactions to keep accounts safe and to meet our obligations. These may differ between customers and may change; the limits that apply to you are shown in the app.",
    ],
  },
  {
    id: "prohibited",
    title: "What you must not do",
    blocks: [
      "You must not use Ziks to:",
      [
        "break any law, including laws on money laundering, terrorist financing, fraud or sanctions;",
        "receive or send the proceeds of crime, or money you are not entitled to;",
        "impersonate anyone, open an account with someone else's details, or let anyone else use your account;",
        "operate as a business, money transmitter or exchange without our written agreement;",
        "attempt to access other accounts, interfere with Ziks, reverse-engineer the app or get around our security or limits; or",
        "harass, scam or deceive other users.",
      ],
    ],
  },
  {
    id: "restrictions",
    title: "Restricting or closing your account",
    blocks: [
      "We may delay or decline a transaction, restrict features, freeze your balance, or suspend or close your account if we reasonably believe that you have broken these Terms, that your account is being used for fraud or other unlawful activity, that we need to protect you or other users, or that we are required to by law, a court or a regulator. Where we are allowed to, we will tell you why.",
      "You can ask us to close your account at any time by contacting us. Before closing, we will help you withdraw any remaining balance, subject to any legal hold. Closing your account does not affect transactions already made.",
      "We may keep records about you and your transactions after your account is closed for as long as the law requires.",
    ],
  },
  {
    id: "privacy",
    title: "Your data",
    blocks: [
      "We collect and use your personal information to run Ziks, verify your identity, keep your account secure, prevent fraud and meet our legal obligations, in line with the Nigeria Data Protection Act 2023. Our Privacy Policy (ziks.app/privacy) explains what we collect, why, who we share it with and your rights.",
      "By using Ziks you agree that we may send you service messages, such as one-time codes and transaction updates, by SMS, email or in the app.",
    ],
  },
  {
    id: "liability",
    title: "Our responsibility to you",
    blocks: [
      "We will provide Ziks with reasonable care and skill. However, Ziks depends on banks, networks, blockchains and other partners outside our control, and we do not promise that it will always be available, uninterrupted or error-free.",
      "To the extent permitted by law, we are not liable for:",
      [
        "losses caused by incorrect details you entered, or by you not keeping your PIN, codes or device secure;",
        "delays or failures caused by banks, payment networks, blockchains, service providers or events beyond our reasonable control;",
        "changes in the value of digital assets; or",
        "indirect or consequential losses, or loss of profits, business or opportunity.",
      ],
      "Nothing in these Terms limits any liability that cannot be limited under Nigerian law.",
    ],
  },
  {
    id: "complaints",
    title: "Help and complaints",
    blocks: [
      "If something goes wrong, contact us at the email address below with your Ziktag and the transaction details. We will acknowledge your complaint and aim to resolve it as quickly as possible.",
      "If you are not satisfied with our response, you may be able to refer your complaint to the relevant consumer protection or financial regulator in Nigeria.",
    ],
  },
  {
    id: "changes",
    title: "Changes to Ziks and these Terms",
    blocks: [
      "We may update these Terms from time to time, for example when we add features or when the law changes. We will publish the updated Terms here with a new effective date, and tell you in advance in the app or by email about any change that materially affects you. If you keep using Ziks after a change takes effect, you accept the updated Terms.",
      "We may also add, change or withdraw features of Ziks.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    blocks: [
      "These Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute that we cannot resolve together will be subject to the jurisdiction of the Nigerian courts.",
      "If any part of these Terms is found to be unenforceable, the rest will continue to apply. If we do not enforce a right straight away, we have not given it up.",
    ],
  },
];
