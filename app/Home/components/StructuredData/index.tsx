import {
  FAQS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/config/seo";

/**
 * schema.org JSON-LD for search engines: who Ziks is (Organization), the site
 * (WebSite), the app itself (MobileApplication) and the on-page FAQ
 * (FAQPage, built from the same FAQS the FAQ section renders).
 * Server-rendered so it's in the HTML crawlers fetch.
 */
const StructuredData = () => {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/apple-touch-icon.png`,
        email: SUPPORT_EMAIL,
        areaServed: { "@type": "Country", name: "Nigeria" },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: "en-NG",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "MobileApplication",
        "@id": `${SITE_URL}/#app`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        applicationCategory: "FinanceApplication",
        operatingSystem: "iOS, Android",
        countriesSupported: "NG",
        offers: { "@type": "Offer", price: "0", priceCurrency: "NGN" },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <script
      // Escape "<" so no string in the payload can close the script tag
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
      type="application/ld+json"
    />
  );
};

export default StructuredData;
