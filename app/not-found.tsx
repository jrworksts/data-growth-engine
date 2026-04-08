import Link from "next/link";

import { CtaLink } from "@/components/cta-link";
import { siteConfig } from "@/data/site";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua">404</p>
      <h1 className="mt-5 font-display text-5xl font-bold text-white md:text-6xl">This page lost attribution.</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
        The page you were looking for does not exist. Start with the Bad Data Test or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <CtaLink href={siteConfig.primaryCta.href} label={siteConfig.primaryCta.label} external />
        <CtaLink href="/" label="Return home" variant="secondary" />
      </div>
      <Link href="/contact" className="mt-6 text-sm font-semibold text-aqua">Need help? Contact DGE</Link>
    </div>
  );
}
