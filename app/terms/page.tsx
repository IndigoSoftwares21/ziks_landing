import type { Metadata } from "next";

import LegalPage from "@/app/Legal/components/LegalPage";
import { TERMS_EFFECTIVE_DATE, TERMS_SECTIONS } from "@/app/terms/content";
import { COMPANY_NAME, SITE_NAME } from "@/config/seo";

export const metadata: Metadata = {
  title: `Terms of Use | ${SITE_NAME}`,
  description: `The terms that apply when you use the ${SITE_NAME} app and website, operated by ${COMPANY_NAME}.`,
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms", title: `Terms of Use | ${SITE_NAME}` },
};

const TermsPage = () => (
  <LegalPage
    effectiveDate={TERMS_EFFECTIVE_DATE}
    sections={TERMS_SECTIONS}
    title="Terms of Use"
  />
);

export default TermsPage;
