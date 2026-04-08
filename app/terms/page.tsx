import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for Data Growth Engine."
};

const sections = [
  {
    title: "Website use",
    body:
      "This website is provided for informational and lead-generation purposes. Use of the site does not create a client relationship unless explicitly agreed in writing."
  },
  {
    title: "No guarantee",
    body:
      "Any statements about revenue recovery or spend efficiency describe potential outcomes, not guaranteed results. Actual outcomes depend on each company's systems, data quality, and implementation."
  },
  {
    title: "Third-party links",
    body:
      "The Bad Data Test and booking flow may direct you to external services. Data Growth Engine is not responsible for the availability or policies of those third-party services."
  },
  {
    title: "Contact",
    body:
      "If you have questions about these terms, contact Data Growth Engine through the contact page on this site."
  }
] as const;

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Reveal>
        <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Terms of Use</h1>
        <p className="mt-5 text-base leading-7 text-white/72">These terms govern your use of the Data Growth Engine website.</p>
      </Reveal>
      <div className="mt-12 space-y-8">
        {sections.map((section, index) => (
          <Reveal key={section.title} delay={index * 0.05}>
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h2 className="font-display text-2xl font-bold text-white">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-white/72">{section.body}</p>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
