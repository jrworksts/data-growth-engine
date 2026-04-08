import { CtaLink } from "@/components/cta-link";
import { siteConfig } from "@/data/site";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 p-3 backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        <CtaLink href={siteConfig.primaryCta.href} label="Bad Data Test" external className="w-full justify-center" />
        <CtaLink href={siteConfig.secondaryCta.href} label="Book Call" external variant="secondary" className="w-full justify-center" />
      </div>
    </div>
  );
}
