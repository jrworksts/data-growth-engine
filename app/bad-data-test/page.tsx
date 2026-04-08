import type { Metadata } from "next";

import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { qualification, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Bad Data Test",
  description:
    "Take the Bad Data Test to diagnose hidden revenue loss across attribution, identity resolution, targeting, and pipeline visibility."
};

export default function BadDataTestPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Bad Data Test"
          title="How much revenue are you losing to bad data?"
          description="The Bad Data Test is a direct diagnostic for B2B SaaS teams that need clearer answers on attribution gaps, anonymous traffic loss, targeting inefficiency, and hidden pipeline leakage."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal delay={0.08}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="font-display text-2xl font-bold text-white">What the test diagnoses</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-white/72">
              <li>• Attribution blind spots that distort budget decisions</li>
              <li>• Anonymous traffic that never becomes known pipeline</li>
              <li>• Weak conversion feedback loops hurting paid efficiency</li>
              <li>• Measurement gaps between ad platforms, CRM, and reporting</li>
            </ul>
            <h3 className="mt-10 font-display text-xl font-bold text-white">What happens after completion</h3>
            <p className="mt-4 text-base leading-7 text-white/72">
              Qualified teams get a clearer view of where the Bad Data Tax is likely showing up. From there, DGE can scope a Revenue Recovery Audit to quantify the opportunity.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="rounded-[2rem] border border-aqua/20 bg-aqua/10 p-8 shadow-glow">
            <h2 className="font-display text-2xl font-bold text-white">Best fit</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-white">
              {qualification.for.map((item) => <li key={item}>• {item}</li>)}
            </ul>
            <div className="mt-10 grid gap-4">
              <CtaLink href={siteConfig.primaryCta.href} label={siteConfig.primaryCta.label} size="lg" external />
              <CtaLink href={siteConfig.secondaryCta.href} label={siteConfig.secondaryCta.label} size="lg" variant="secondary" external />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
