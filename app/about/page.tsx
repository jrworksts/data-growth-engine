import type { Metadata } from "next";

import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Data Growth Engine helps B2B SaaS revenue teams grow by fixing bad data."
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Reveal>
        <SectionHeading eyebrow="About DGE" title="Revenue recovery, not vanity metrics" description="Data Growth Engine exists to help B2B SaaS revenue teams grow by fixing bad data across acquisition, attribution, and revenue systems." />
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "The mission",
            body:
              "Bad data quietly taxes growth. DGE is built to expose that tax and recover the revenue hidden underneath it."
          },
          {
            title: "The belief",
            body:
              "Growth teams need cleaner signals, stronger identity coverage, and better attribution if they want to scale efficiently."
          },
          {
            title: "The model",
            body:
              "DGE does not sell generic marketing services. It sells Revenue Recovery through diagnostics, audit work, and implementation."
          }
        ].map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h2 className="font-display text-2xl font-bold text-white">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-white/72">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.12}>
        <div className="mt-12 rounded-[2rem] border border-aqua/20 bg-aqua/10 p-8">
          <h2 className="font-display text-3xl font-bold text-white">Cleaner revenue data changes how companies grow</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/78">
            When paid media, analytics, CRM, and attribution systems finally agree, teams stop making expensive decisions from partial information. That is the core of DGE: clearer signals, more accountable spend, and better visibility into the pipeline you already paid to create.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CtaLink href={siteConfig.primaryCta.href} label={siteConfig.primaryCta.label} external />
            <CtaLink href="/book-call" label="Book a Call" variant="secondary" />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
