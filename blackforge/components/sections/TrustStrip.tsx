import { Stagger } from "@/components/motion/Stagger";
import { stats } from "@/data/site";
import { cn } from "@/lib/utils";

export function TrustStrip() {
  return (
    <section aria-label="BlackForge in numbers" className="border-b border-line">
      <div className="shell">
        <div className="flex items-center justify-between gap-6 py-4">
          <span className="label text-muted">BlackForge in numbers</span>
          <span className="label text-accent">Since 2019</span>
        </div>
        <Stagger className="grid grid-cols-2 border-t border-line md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "px-5 py-7 md:px-6 md:py-9",
                index % 2 === 1 && "border-l border-line",
                index >= 2 && "border-t border-line",
                index > 0 && "md:border-l md:border-line",
                "md:border-t-0",
              )}
            >
              <p
                className={cn(
                  "font-display text-5xl font-semibold leading-none tracking-[-0.055em] md:text-7xl",
                  index === 0 && "text-accent",
                )}
              >
                {stat.value}
              </p>
              <p className="label mt-4 text-muted">{stat.label}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
