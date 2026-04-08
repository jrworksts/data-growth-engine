import Link from "next/link";

import { Logo } from "@/components/logo";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#07132d]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <Logo className="mb-5" />
          <p className="max-w-md text-sm leading-7 text-white/68">
            Data Growth Engine serves B2B SaaS teams spending $50k-$500k/month on paid media and trying to recover revenue hidden by bad data.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/48">Contact</h3>
          <div className="mt-5 space-y-3 text-sm text-white/70">
            <p>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                {siteConfig.email}
              </a>
            </p>
            <p>
              <a href={siteConfig.secondaryCta.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
                Book a 20-Minute Revenue Recovery Call
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-4 py-6 text-sm text-white/50 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Data Growth Engine. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
