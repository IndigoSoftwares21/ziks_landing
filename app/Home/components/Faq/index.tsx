import { FAQS } from "@/config/seo";

/**
 * Plain-language answers to what people search for before downloading.
 * Server-rendered native <details> so every answer is in the HTML (crawlers
 * read it, and it works without JavaScript). Same FAQS as the FAQPage
 * structured data in StructuredData.
 */
const Faq = () => (
  <section
    aria-labelledby="faq-title"
    className="bg-white px-5 py-28 md:py-36"
    id="faq"
  >
    <div className="mx-auto max-w-[860px]">
      <h2
        className="font-display text-center text-[clamp(2.6rem,7.4vw,6.75rem)] uppercase leading-[0.92] text-[#241C1E]"
        id="faq-title"
      >
        Questions, answered
      </h2>

      <div className="mt-14 divide-y divide-[#E8DFE2] border-y border-[#E8DFE2]">
        {FAQS.map((faq) => (
          // Shared name = exclusive accordion: opening one closes the others
          <details key={faq.question} className="group py-6" name="faq">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-[#241C1E] marker:hidden md:text-xl [&::-webkit-details-marker]:hidden">
              <h3>{faq.question}</h3>
              <span
                aria-hidden
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FBF0F2] text-xl text-[#701D30] transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-[680px] text-[15px] leading-[1.6] text-[#756F71] md:text-base">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
