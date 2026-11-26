import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * The wordmark is rendered from site.name so it changes in one place.
 * Drop the final SVG or image inside `.logo-slot`; the slot is inverted
 * automatically when it sits on a dark surface.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn(
        "group inline-flex items-center gap-2.5 text-current",
        className,
      )}
    >
      <span className="logo-slot" aria-hidden="true">
        {/* Logo SVG or image goes here. */}
      </span>
      <span className="font-display text-[1.65rem] font-bold leading-none tracking-[-0.055em]">
        {site.name}
        <span className="text-accent">.</span>
      </span>
    </Link>
  );
}
