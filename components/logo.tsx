import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  href = "/"
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-3 font-display", className)}
      aria-label="Data Growth Engine home"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#10234b] ring-1 ring-white/10">
        <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
          <path d="M10 14h18c10 0 18 8 18 18v4c0 10-8 18-18 18H10V14Z" fill="#1cc4af" />
          <path d="M10 14h18c10 0 18 8 18 18v4c0 10-8 18-18 18" fill="none" stroke="#f8fbff" strokeWidth="8" strokeLinecap="round" />
          <path d="M34 20c8-8 20-8 28 0" fill="none" stroke="#1cc4af" strokeWidth="8" strokeLinecap="round" />
          <path d="M38 36h16v16" fill="none" stroke="#f8fbff" strokeWidth="8" strokeLinecap="square" />
          <path d="M38 52c9 0 16-7 16-16" fill="none" stroke="#f8fbff" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-wide text-white">Data Growth</span>
        <span className="text-base font-bold tracking-wide text-aqua">Engine</span>
      </span>
    </Link>
  );
}
