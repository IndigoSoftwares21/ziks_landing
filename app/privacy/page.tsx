import type { Metadata } from "next";

import LegalPage from "@/app/Legal/components/LegalPage";
import {
  PRIVACY_EFFECTIVE_DATE,
  PRIVACY_SECTIONS,
} from "@/app/privacy/content";
import { COMPANY_NAME, SITE_NAME } from "@/config/seo";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `How ${COMPANY_NAME} collects, uses, shares and protects your personal data when you use ${SITE_NAME}, and your rights under the Nigeria Data Protection Act.`,
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", title: `Privacy Policy | ${SITE_NAME}` },
};

const PrivacyPage = () => (
  <LegalPage
    effectiveDate={PRIVACY_EFFECTIVE_DATE}
    sections={PRIVACY_SECTIONS}
    title="Privacy Policy"
  />
);

export default PrivacyPage;
