import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center,
  invert
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl space-y-4", center && "mx-auto text-center")}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2
        className={cn(
          "text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
          invert ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>
      <p className={cn("text-base leading-7 sm:text-lg", invert ? "text-white/75" : "text-slate-600")}>
        {description}
      </p>
    </div>
  );
}
