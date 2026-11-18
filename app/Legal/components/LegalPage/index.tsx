import Link from "next/link";

import ZiksLogo from "@/app/Home/components/shared/ZiksLogo";
import { COMPANY_NAME, SUPPORT_EMAIL } from "@/config/seo";

/** A string renders as a paragraph, a string array as a bullet list. */
export type LegalBlock = string | string[];

export type LegalSection = { id: string; title: string; blocks: LegalBlock[] };

type LegalPageProps = {
  title: string;
  effectiveDate: string;
  sections: LegalSection[];
};

const LEGAL_LINKS = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

/**
 * Shared layout for the Terms and Privacy pages: plain and static (no
 * loading screen, smooth scroll or animation), with a numbered contents list
 * that jumps to each section.
 */
const LegalPage = ({ title, effectiveDate, sections }: LegalPageProps) => (
  <div className="min-h-screen bg-ziks-background text-ziks-text">
    <header className="bg-[#4A1220]">
      <div className="mx-auto flex h-22 max-w-215 items-center justify-between px-5">
        <Link aria-label="Ziks home" href="/">
          <ZiksLogo preload size={32} />
        </Link>
        <Link
          className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ziks-primary transition hover:bg-ziks-pink-light"
          href="/"
        >
          Back to home
        </Link>
      </div>
    </header>

    <main className="mx-auto max-w-215 px-5 pb-24 pt-16 md:pt-20">
      <h1 className="font-display text-[clamp(3rem,9vw,6rem)] uppercase leading-[0.92] text-[#241C1E]">
        {title}
      </h1>
      <p className="mt-5 text-sm text-ziks-text-secondary">
        Effective {effectiveDate} · {COMPANY_NAME}
      </p>

      <nav
        aria-label="Contents"
        className="mt-12 rounded-3xl border border-ziks-border bg-white p-6 md:p-8"
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-ziks-primary">
          Contents
        </h2>
        <ol className="mt-4 grid gap-x-8 gap-y-2 text-[15px] md:grid-cols-2">
          {sections.map((section, i) => (
            <li key={section.id}>
              <a
                className="text-ziks-text transition hover:text-ziks-primary"
                href={`#${section.id}`}
              >
                {i + 1}. {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-14 flex flex-col gap-12">
        {sections.map((section, i) => (
          <section
            key={section.id}
            aria-labelledby={`${section.id}-title`}
            id={section.id}
          >
            <h2
              className="text-xl font-semibold text-[#241C1E] md:text-2xl"
              id={`${section.id}-title`}
            >
              {i + 1}. {section.title}
            </h2>
            <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.7] text-[#4A4446] md:text-base">
              {section.blocks.map((block, j) =>
                typeof block === "string" ? (
                  <p key={j}>{block}</p>
                ) : (
                  <ul key={j} className="flex list-disc flex-col gap-2 pl-5">
                    {block.map((item) => (
                      <li key={item} className="marker:text-ziks-pink-dark">
                        {item}
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          </section>
        ))}

        <section aria-labelledby="contact-title" id="contact">
          <h2
            className="text-xl font-semibold text-[#241C1E] md:text-2xl"
            id="contact-title"
          >
            Contact us
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-[#4A4446] md:text-base">
            {COMPANY_NAME}
            <br />
            Email:{" "}
            <a
              className="font-medium text-ziks-primary underline underline-offset-4"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </section>
      </div>
    </main>

    <footer className="bg-[#4A1220] text-xs text-white/80">
      <div className="mx-auto flex max-w-215 flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <span>
          © {new Date().getFullYear()} {COMPANY_NAME}
        </span>
        <nav aria-label="Legal" className="flex gap-6">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              className="transition hover:text-white"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link className="transition hover:text-white" href="/">
            ziks.app
          </Link>
        </nav>
      </div>
    </footer>
  </div>
);

export default LegalPage;
