import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  label,
  className,
}: {
  index?: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {index ? <span className="label text-accent">{index}</span> : null}
      <span className="label text-muted">{label}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </div>
  );
}

export function Section({
  id,
  index,
  label,
  children,
  className,
  aside,
  bordered = true,
}: {
  id?: string;
  index: string;
  label: string;
  children: ReactNode;
  className?: string;
  aside?: ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 md:py-28 lg:py-32",
        bordered && "border-t border-line",
        className,
      )}
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <SectionLabel index={index} label={label} />
              {aside ? <div className="mt-6">{aside}</div> : null}
            </div>
          </div>
          <div className="lg:col-span-9">{children}</div>
        </div>
      </div>
    </section>
  );
}
