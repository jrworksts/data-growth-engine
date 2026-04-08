import Link from "next/link";

import { CtaLink } from "@/components/cta-link";
import { Logo } from "@/components/logo";
import { navItems, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#07132d]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.9fr_1fr] lg:px-8">
        <div>
          <Logo className="mb-5" />
          <p className="max-w-md text-sm leading-7 text-white/68">
            It&apos;s hard to grow a company on bad data. DGE helps B2B SaaS teams recover revenue they are already losing.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/48">Navigation</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
              </li>
            ))}
            <li><Link href="/contact" className="transition hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/48">Next step</h3>
          <div className="mt-5 grid gap-3">
            <CtaLink href={siteConfig.primaryCta.href} label={siteConfig.primaryCta.label} external />
            <CtaLink href={siteConfig.secondaryCta.href} label={siteConfig.secondaryCta.label} external variant="secondary" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-4 py-6 text-sm text-white/50 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Data Growth Engine. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="transition hover:text-white">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
