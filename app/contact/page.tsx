import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Data Growth Engine about bad data, revenue recovery, and pipeline visibility."
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Start the conversation" description="If your team is dealing with wasted ad spend, hidden pipeline, or poor revenue visibility, use the form below or go straight to the Bad Data Test or booking flow." />
          <div className="mt-8 grid gap-4">
            <CtaLink href={siteConfig.primaryCta.href} label={siteConfig.primaryCta.label} external />
            <CtaLink href={siteConfig.secondaryCta.href} label={siteConfig.secondaryCta.label} external variant="secondary" />
          </div>
          <p className="mt-6 text-sm text-white/55">
            Prefer email? Reach us at <a className="font-semibold text-aqua transition hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
