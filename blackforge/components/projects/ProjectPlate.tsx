import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const tones = [
  "border-inverse bg-inverse text-inverse-foreground",
  "border-accent bg-accent text-accent-contrast",
  "border-line bg-surface-strong text-ink",
];

export function ProjectPlate({
  project,
  className,
  large = false,
}: {
  project: Project;
  className?: string;
  large?: boolean;
}) {
  const hasImage = Boolean(project.image);
  const tone = hasImage
    ? "border-white/15 bg-[#0b1220] text-[#f5f6f8]"
    : (tones[(Number(project.index) - 1) % tones.length] ?? tones[0]);

  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] flex-col justify-between overflow-hidden border p-5 transition-colors duration-300 md:p-6",
        large && "aspect-[16/10]",
        tone,
        className,
      )}
    >
      {hasImage ? (
        <>
          <img
            src={project.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/35"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-black/65 via-black/20 to-black/85"
          />
        </>
      ) : null}

      <div
        aria-hidden="true"
        className="grid-field pointer-events-none absolute inset-0 opacity-25"
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <span className="label opacity-70">{project.categoryLabel}</span>
        <span className="label opacity-70">{project.year}</span>
      </div>

      <div className="relative z-10 flex items-end justify-between gap-4">
        <div>
          <p className="label opacity-60">{project.sector}</p>
          <p className="mt-3 max-w-[12ch] font-display text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
            {project.client}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="font-display text-[clamp(4rem,12vw,9rem)] font-semibold leading-[0.75] tracking-[-0.06em] opacity-20 transition-all duration-500 group-hover:scale-105 group-hover:opacity-30"
        >
          {project.index}
        </span>
      </div>

      <div className="relative z-10 flex items-end justify-between gap-4 border-t border-current/20 pt-4">
        <span className="label opacity-70">{project.location}</span>
        <span className="label flex items-center gap-2 opacity-80">
          Case study
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </div>
  );
}
