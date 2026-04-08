"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { CtaLink } from "@/components/cta-link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 border-b border-transparent transition-all", scrolled && "border-white/10 bg-ink/80 backdrop-blur-xl")}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-white/72 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <CtaLink href={siteConfig.secondaryCta.href} label="Book Call" external />
        </div>
        <Button className="lg:hidden" variant="ghost" size="sm" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close navigation menu" : "Open navigation menu"}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[#091735] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-base font-medium text-white/80 transition hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="mt-4 grid gap-3">
              <CtaLink href={siteConfig.secondaryCta.href} label="Book Call" external />
              <CtaLink href={siteConfig.primaryCta.href} label={siteConfig.primaryCta.label} variant="secondary" external />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
