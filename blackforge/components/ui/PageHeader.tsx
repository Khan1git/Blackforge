import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionLabel } from "./Section";

export function PageHeader({
  index,
  label,
  title,
  description,
  children,
  className,
}: {
  index: string;
  label: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "relative overflow-hidden border-b border-line",
        className,
      )}
    >
      <div className="shell">
        <div className="pt-10 md:pt-14">
          <div className="flex items-center justify-between gap-6 border-b border-line pb-5">
            <SectionLabel index={index} label={label} className="flex-1" />
            <span className="label hidden text-muted sm:block">
              BlackForge / {label}
            </span>
          </div>
        </div>
        <div className="relative grid gap-8 py-12 md:py-16 lg:grid-cols-12 lg:gap-8">
          <span
            aria-hidden="true"
            className="text-outline pointer-events-none absolute -right-2 top-4 hidden select-none font-display text-[13rem] font-semibold leading-none tracking-[-0.08em] lg:block"
          >
            {index}
          </span>
          <div className="relative z-10 lg:col-span-8">
            <h1 className="display display-lg max-w-[13ch]">{title}</h1>
          </div>
          <div className="relative z-10 lg:col-span-4 lg:pt-2">
            <div className="body-lg max-w-prose text-muted">{description}</div>
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
        </div>
      </div>
    </header>
  );
}
