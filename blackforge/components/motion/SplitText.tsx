"use client";

import {
  Fragment,
  createElement,
  type CSSProperties,
  type ElementType,
} from "react";
import { cn } from "@/lib/utils";
import { useInView } from "./use-in-view";

export function SplitText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 45,
  accent = false,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  accent?: boolean;
}) {
  const { ref, inView } = useInView<HTMLElement>();
  const words = text.split(/\s+/).filter(Boolean);

  return createElement(
    Tag,
    {
      ref,
      "data-revealed": inView ? "true" : "false",
      className: cn(accent && "text-accent", className),
    },
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            <span className="split-word">
              <span
                className="split-word-inner"
                style={
                  {
                    "--word-delay": `${delay + index * stagger}ms`,
                  } as CSSProperties
                }
              >
                {word}
              </span>
            </span>
            {index < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </>,
  );
}
