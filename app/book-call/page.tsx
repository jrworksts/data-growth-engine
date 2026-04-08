import type { Metadata } from "next";

import { BookingEmbed } from "@/components/booking-embed";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book an intro call with Data Growth Engine to review bad data, hidden pipeline, and revenue recovery opportunities."
};

export default function BookCallPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Reveal>
        <SectionHeading eyebrow="Schedule a Call" title="Book an intro call with DGE" description="Best fit: B2B SaaS companies with meaningful paid spend and an in-house growth team." />
      </Reveal>
      <div className="mt-8 flex flex-wrap gap-4">
        <CtaLink href={siteConfig.secondaryCta.href} label={siteConfig.secondaryCta.label} external />
        <CtaLink href={siteConfig.secondaryCta.href} label="Open booking page" external variant="secondary" />
      </div>
      <div className="mt-12">
        <Reveal delay={0.08}>
          <BookingEmbed />
        </Reveal>
      </div>
    </div>
  );
}
