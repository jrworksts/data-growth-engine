import Image from "next/image";
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
      className={cn("inline-flex items-center", className)}
      aria-label="Data Growth Engine home"
    >
      <Image
        src="/logo-full.svg"
        alt="Data Growth Engine"
        width={260}
        height={66}
        priority
        className="h-auto w-[180px] sm:w-[220px]"
      />
    </Link>
  );
}
