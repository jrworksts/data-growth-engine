import {
  ArrowRight,
  BadgeCheck,
  Binoculars,
  DatabaseZap,
  LineChart,
  ShieldCheck
} from "lucide-react";

import { BookingEmbed } from "@/components/booking-embed";
import { CtaLink } from "@/components/cta-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  faqs,
  outcomes,
  problemPoints,
  qualification,
  siteConfig,
  steps,
  trustSignals
} from "@/data/site";

const outcomeIcons = [LineChart, BadgeCheck, Binoculars, ShieldCheck, DatabaseZap];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid bg-[size:44px_44px] opacity-[0.08]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <Reveal className="relative z-10">
            <div className="inline-flex rounded-full border border-aqua/30 bg-aqua/10 px-4 py-2 text-sm font-semibold text-aqua">
              The category: Bad Data Tax
            </div>
            <h1 className="mt-8 max-w-3xl font-display text-5xl font-bold tracking-tight text-white text-balance md:text-7xl">
              It&apos;s Hard to Grow a Company on Bad Data
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              DGE helps B2B SaaS companies recover wasted ad spend and hidden pipeline by fixing bad data across acquisition, attribution, and revenue systems.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CtaLink href={siteConfig.primaryCta.href} label={siteConfig.primaryCta.label} size="lg" external />
              <CtaLink href={siteConfig.secondaryCta.href} label={siteConfig.secondaryCta.label} size="lg" variant="secondary" external />
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/70">
              {trustSignals.map((signal) => (
                <div key={signal} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                  {signal}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-panel">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(28,196,175,0.25),transparent_30%)]" />
              <div className="relative">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1a3d] p-5">
                    <p className="text-sm text-white/60">Recoverable revenue</p>
                    <p className="mt-3 font-display text-4xl font-bold text-white">20-40%</p>
                    <p className="mt-2 text-sm text-white/60">Common waste hidden in spend, measurement, and pipeline capture.</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-aqua/20 bg-aqua/10 p-5">
                    <p className="text-sm text-aqua">Primary lever</p>
                    <p className="mt-3 font-display text-3xl font-bold text-white">Revenue Recovery</p>
                    <p className="mt-2 text-sm text-white/68">Not more channel activity. Better data quality across the system.</p>
                  </div>
                </div>
                <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-[#091734] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/60">Pipeline visibility</p>
                      <p className="mt-2 font-display text-2xl font-bold text-white">Anonymous traffic mapped to revenue</p>
                    </div>
                    <div className="rounded-full bg-aqua/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
                      DGE Stack
                    </div>
                  </div>
                  <div className="mt-8 grid gap-4">
                    <div className="grid grid-cols-[120px_1fr] items-center gap-3 text-sm">
                      <span className="text-white/55">Identity resolution</span>
                      <div className="h-3 rounded-full bg-white/10"><div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-aqua to-[#6be6d7]" /></div>
                    </div>
                    <div className="grid grid-cols-[120px_1fr] items-center gap-3 text-sm">
                      <span className="text-white/55">Targeting quality</span>
                      <div className="h-3 rounded-full bg-white/10"><div className="h-3 w-[74%] rounded-full bg-gradient-to-r from-[#5c7cff] to-aqua" /></div>
                    </div>
                    <div className="grid grid-cols-[120px_1fr] items-center gap-3 text-sm">
                      <span className="text-white/55">Attribution signal</span>
                      <div className="h-3 rounded-full bg-white/10"><div className="h-3 w-[88%] rounded-full bg-gradient-to-r from-white to-aqua" /></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Wasted ad spend", "Recovered"],
                    ["Hidden pipeline", "Exposed"],
                    ["Blind spots", "Closed"]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm text-white/55">{label}</p>
                      <p className="mt-3 text-xl font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="problem" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="The Problem" title="Bad data does not just break attribution. It kills growth." description="The Bad Data Tax shows up in wasted spend, lost pipeline visibility, and growth decisions made from partial information." />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {problemPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.06}>
              <article className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-panel">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-aqua">0{index + 1}</p>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">{point.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/68">{point.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="How It Works" title="Find the revenue you are already paying for" description="A simple three-step path from diagnosis to quantified recovery to implementation." />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.07}>
              <article className="h-full rounded-[2rem] border border-white/10 bg-[#08142f] p-8">
                <div className="flex items-center justify-between">
                  <p className="font-display text-4xl font-bold text-white/20">{step.number}</p>
                  <ArrowRight className="h-5 w-5 text-aqua" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/68">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-12">
          <Reveal>
            <SectionHeading eyebrow="Revenue Recovery Outcomes" title="Recover lost pipeline before you buy more traffic" description="DGE is built to improve revenue signal quality across your demand system so paid media can perform against cleaner data." />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {outcomes.map((outcome, index) => {
              const Icon = outcomeIcons[index];
              return (
                <Reveal key={outcome} delay={index * 0.05}>
                  <div className="h-full rounded-[1.75rem] border border-white/10 bg-[#091632] p-6">
                    <Icon className="h-8 w-8 text-aqua" />
                    <p className="mt-5 text-lg font-semibold text-white">{outcome}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Qualification" title="Built for a very specific buyer" description="DGE is not a generalist marketing shop. The offer is designed for B2B SaaS teams with enough complexity and spend for bad data to become a revenue problem." />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-aqua/20 bg-aqua/10 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-aqua">Best fit</p>
                <ul className="mt-6 space-y-4 text-base leading-7 text-white">{qualification.for.map((item) => <li key={item}>• {item}</li>)}</ul>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/56">Not a fit</p>
                <ul className="mt-6 space-y-4 text-base leading-7 text-white/72">{qualification.notFor.map((item) => <li key={item}>• {item}</li>)}</ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2.5rem] border border-aqua/20 bg-[linear-gradient(135deg,rgba(28,196,175,0.18),rgba(9,22,50,0.94))] p-8 shadow-glow md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">Main CTA</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">How much revenue are you losing to bad data?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              Start with the free diagnostic. The Bad Data Test helps qualified teams see where wasted spend, missing identity, and broken measurement are suppressing growth.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink href={siteConfig.primaryCta.href} label={siteConfig.primaryCta.label} size="lg" external />
              <CtaLink href={siteConfig.secondaryCta.href} label={siteConfig.secondaryCta.label} size="lg" external variant="secondary" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Book a Call" title="Get a direct view into your Revenue Recovery opportunity" description="Use the embedded booking flow below or open the calendar directly if your browser blocks embeds." />
        </Reveal>
        <div className="mt-12">
          <Reveal delay={0.08}>
            <BookingEmbed compact />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Questions before you take the test?" description="Direct answers for revenue teams evaluating whether DGE is the right fit." />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-3 sm:px-8">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-8 py-12 text-center md:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">Final CTA</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">It&apos;s hard to grow a company on bad data.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Take the Bad Data Test and find the revenue your team is already paying to lose.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <CtaLink href={siteConfig.primaryCta.href} label={siteConfig.primaryCta.label} size="lg" external />
              <CtaLink href={siteConfig.secondaryCta.href} label={siteConfig.secondaryCta.label} size="lg" variant="secondary" external />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
