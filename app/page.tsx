import {
  ArrowRight,
  BadgeDollarSign,
  BadgeCheck,
  BookOpen,
  Bot,
  Building2,
  Binoculars,
  DatabaseZap,
  Fingerprint,
  LineChart,
  SearchCheck,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

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
        <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <Reveal className="relative z-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aqua text-sm font-bold text-ink">
                DGE
              </span>
              <span className="text-sm font-medium text-white/72">
                Founder-led revenue recovery for paid-growth teams
              </span>
            </div>
            <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold tracking-tight text-white text-balance md:text-7xl">
              We Help B2B SaaS Recover 7-Figure Revenue Leaks Caused by Bad Data
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              For teams spending $50k-$500k/month on paid ads. We fix identity, audiences, and attribution so your existing traffic produces more qualified pipeline without increasing spend.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CtaLink href={siteConfig.secondaryCta.href} label="Book a 20-Minute Revenue Recovery Call" size="lg" external />
            </div>
            <Link
              href={siteConfig.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-sm font-semibold text-aqua transition hover:text-white"
            >
              Or start with the 2-Minute Bad Data Test
            </Link>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/70">
              {trustSignals.map((signal) => (
                <div key={signal} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                  {signal}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-panel">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1a3d] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">Before</p>
                  <p className="mt-4 text-sm text-white/60">What the team sees</p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/40">Reported CAC</p>
                      <p className="mt-2 text-3xl font-bold text-white">$412</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="mb-1 flex justify-between text-xs text-white/45">
                          <span>Platform conversions</span>
                          <span>Healthy</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[78%] rounded-full bg-white/40" />
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex justify-between text-xs text-white/45">
                          <span>CRM match rate</span>
                          <span>Unknown</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[31%] rounded-full bg-[#ff8b78]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-aqua/20 bg-aqua/10 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aqua">After</p>
                  <p className="mt-4 text-sm text-white/75">What DGE uncovers</p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-aqua/20 bg-[#081734] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-aqua">Recoverable pipeline</p>
                      <p className="mt-2 text-3xl font-bold text-white">$35k/mo</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="mb-1 flex justify-between text-xs text-white/60">
                          <span>Identified visitors</span>
                          <span>+42%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[73%] rounded-full bg-aqua" />
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex justify-between text-xs text-white/60">
                          <span>Trusted attribution</span>
                          <span>Restored</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[86%] rounded-full bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-[#091734] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aqua">What changes</p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Identity improves. Audiences get cleaner. Attribution becomes trustworthy enough to scale from.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-5 lg:grid-cols-[180px_1fr] lg:items-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">Built for:</p>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    icon: Building2,
                    label: "B2B SaaS / info products",
                    detail: "$5M-$100M ARR"
                  },
                  {
                    icon: BadgeDollarSign,
                    label: "Paid acquisition",
                    detail: "$50k-$500k per month"
                  },
                  {
                    icon: SearchCheck,
                    label: "Internal owner",
                    detail: "Director+ on growth or demand gen"
                  }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                      <span className="mt-0.5 rounded-xl bg-aqua/12 p-2 text-aqua">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.label}</p>
                        <p className="mt-1 text-sm text-white/60">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Revenue recovery, simplified"
            description="One front-end diagnostic, one core implementation layer, and one traffic identification layer that makes more of your existing spend visible."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Bad Data Test & Revenue Recovery Audit",
              body:
                "Start with the 2-minute test, then use the $5k Revenue Recovery Audit to quantify where pipeline and spend are being lost.",
              href: "/bad-data-test",
              cta: "Learn about the Audit"
            },
            {
              icon: Bot,
              title: "Data Growth Stack Implementation",
              body:
                "Implementation layer for pixel, audiences, and strategic consulting. Built for teams ready to fix the system, not guess at it.",
              href: "/book-call",
              cta: "See what’s included"
            },
            {
              icon: Fingerprint,
              title: "Traffic Identification Pixel",
              body:
                "Identify 30-60% more visitors from traffic you already pay for and turn more anonymous sessions into usable demand data.",
              href: "/contact",
              cta: "How the pixel works"
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-panel">
                  <span className="inline-flex rounded-2xl bg-aqua/12 p-3 text-aqua">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/68">{item.body}</p>
                  <Link href={item.href} className="mt-6 inline-flex font-semibold text-aqua transition hover:text-white">
                    {item.cta} →
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="problem" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Why This Matters" title="It&apos;s hard to grow on bad data." description="This is what bad data looks like inside a paid-growth system." />
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
        <Reveal delay={0.18}>
          <p className="mt-8 text-lg font-semibold text-white">
            We exist to turn this noise into a clean, scalable growth system.
          </p>
        </Reveal>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <SectionHeading eyebrow="Results" title="Recover lost revenue before you buy more traffic." description="Most teams scale paid media before fixing the data layer underneath it." />
            <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-3xl font-semibold text-aqua md:text-4xl">
                  Recover $20k-$200k/month in lost pipeline before increasing budget.
                </p>
                <p className="mt-5 text-base leading-7 text-white/70">
                  The fastest way to improve paid efficiency is usually not buying more traffic. It is fixing the hidden data loss already distorting your spend.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {outcomes.map((outcome, index) => {
                  const Icon = outcomeIcons[index];
                  return (
                    <Reveal key={outcome} delay={index * 0.04}>
                      <div className="h-full rounded-[1.5rem] border border-white/10 bg-[#091632] p-5">
                        <Icon className="h-7 w-7 text-aqua" />
                        <p className="mt-4 text-base font-semibold text-white">{outcome}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="How It Works" title="We Find the Revenue You&apos;re Already Paying For" description="We don&apos;t guess. We quantify exactly what you&apos;re losing." />
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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Qualification" title="Built for a Specific Type of Company" description="If you don&apos;t meet this criteria, this likely won&apos;t work for you." />
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
            <h2 className="mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              How Much Revenue Are You Losing Every Month Without Realizing It?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              Most companies discover 20-30% of their spend or pipeline is misattributed.
            </p>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-white/78">You won&apos;t see this in your dashboards.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink href={siteConfig.primaryCta.href} label={siteConfig.primaryCta.label} size="lg" external />
            </div>
          </div>
        </Reveal>
      </section>

      <section id="resources" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why We Built DGE"
            title="Most paid-growth teams are scaling with less signal, not more."
            description="Data Growth Engine was built after seeing the same pattern over and over: budgets rising, dashboards disagreeing, and leadership making spend decisions without a clean view of what actually drives revenue."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal delay={0.05}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aqua text-lg font-bold text-ink">
                  DGE
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Founder-led</p>
                  <p className="text-sm text-white/60">Built for revenue teams that need cleaner signal</p>
                </div>
              </div>
              <p className="mt-6 text-base leading-7 text-white/72">
                We are obsessed with one problem: paid demand systems breaking because identity, audiences, and attribution are all just good enough to hide the leak.
              </p>
              <p className="mt-4 text-base leading-7 text-white/72">
                DGE exists to make the leak visible, quantify it, and fix it before more budget gets thrown into the same broken loop.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Take the Bad Data Test",
                body: "Start with the fastest diagnostic.",
                href: siteConfig.primaryCta.href
              },
              {
                title: "Book the revenue call",
                body: "Review your setup and estimate recoverable pipeline.",
                href: siteConfig.secondaryCta.href
              },
              {
                title: "Talk through your stack",
                body: "Use the contact page if you need implementation context first.",
                href: "/contact"
              }
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-aqua/50 hover:bg-white/[0.06]"
                >
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/65">{item.body}</p>
                  <span className="mt-5 inline-flex font-semibold text-aqua">Open →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Book a Call" title="See Your Revenue Recovery Opportunity" description="This is not a sales call." />
        </Reveal>
        <Reveal delay={0.04}>
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-base leading-7 text-white/76">On this call, we:</p>
            <ul className="mt-5 space-y-3 text-base leading-7 text-white">
              <li>• Review your data and attribution setup</li>
              <li>• Identify where revenue is being lost</li>
              <li>• Estimate recoverable pipeline and wasted spend</li>
            </ul>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-aqua">
              Best for: B2B SaaS companies spending $50k+/month on paid media
            </p>
            <div className="mt-6">
              <CtaLink href={siteConfig.secondaryCta.href} label="Book Intro Call" external />
            </div>
          </div>
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
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">You&apos;re Already Paying for This Lost Revenue</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
              You just can&apos;t see it yet.
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
