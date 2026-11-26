import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "label inline-flex items-center border border-line px-2.5 py-1 text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
