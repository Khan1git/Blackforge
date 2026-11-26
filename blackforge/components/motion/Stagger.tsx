"use client";

import {
  createElement,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { useInView } from "./use-in-view";

export function Stagger({
  as: Tag = "div",
  children,
  className,
  delay = 0,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLElement>();

  return createElement(
    Tag,
    {
      ref,
      "data-stagger": true,
      "data-revealed": inView ? "true" : "false",
      className,
      style: { "--stagger-delay": `${delay}ms` } as CSSProperties,
    },
    children,
  );
}
