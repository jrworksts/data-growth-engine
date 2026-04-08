import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaLink({
  href,
  label,
  variant = "primary",
  size = "default",
  external = false,
  className
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg" | "sm";
  external?: boolean;
  className?: string;
}) {
  return (
    <Button asChild className={className} size={size} variant={variant}>
      <Link href={href} rel={external ? "noreferrer" : undefined} target={external ? "_blank" : undefined}>
        {label}
        {external ? <ArrowUpRight className="h-4 w-4" /> : null}
      </Link>
    </Button>
  );
}
