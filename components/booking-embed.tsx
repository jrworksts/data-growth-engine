"use client";

import { useState } from "react";
import { CalendarClock, ExternalLink } from "lucide-react";

import { CtaLink } from "@/components/cta-link";
import { siteConfig } from "@/data/site";

export function BookingEmbed({ compact = false }: { compact?: boolean }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-panel">
      <div className="border-b border-white/10 px-6 py-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-aqua">Book a Call</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">Review your revenue recovery opportunity</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/68">
              Best fit: B2B SaaS companies with meaningful paid spend and an in-house growth team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaLink href={siteConfig.secondaryCta.href} label="Open booking page" external variant="secondary" />
          </div>
        </div>
      </div>
      <div className="relative min-h-[680px] bg-[#09152f]">
        {!loaded ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="rounded-full border border-white/10 bg-white/5 p-4">
              <CalendarClock className="h-7 w-7 text-aqua" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Loading the booking calendar</p>
              <p className="mt-2 max-w-md text-sm leading-7 text-white/65">
                If the embedded calendar does not appear, use the fallback button to open the booking page directly.
              </p>
            </div>
            <CtaLink href={siteConfig.secondaryCta.href} label="Open booking page" external />
          </div>
        ) : null}
        <iframe
          src={siteConfig.secondaryCta.href}
          title="Book an intro call with Data Growth Engine"
          className="h-[680px] w-full"
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      </div>
      {!compact ? (
        <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-5 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>Prefer a direct handoff? Open the calendar in a fresh window if your browser blocks embeds.</p>
          <a href={siteConfig.secondaryCta.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-aqua transition hover:text-white">
            Open booking page <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      ) : null}
    </div>
  );
}
