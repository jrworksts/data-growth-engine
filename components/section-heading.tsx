import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-aqua">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-white/72 md:text-lg">{description}</p> : null}
    </div>
  );
}
