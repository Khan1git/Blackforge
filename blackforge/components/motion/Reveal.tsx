"use client";

import {
  createElement,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { useInView } from "./use-in-view";

export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  y = 18,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const { ref, inView } = useInView<HTMLElement>();

  return createElement(
    Tag,
    {
      ref,
      "data-reveal": true,
      "data-revealed": inView ? "true" : "false",
      className,
      style: {
        "--reveal-delay": `${delay}ms`,
        "--reveal-y": `${y}px`,
      } as CSSProperties,
    },
    children,
  );
}
