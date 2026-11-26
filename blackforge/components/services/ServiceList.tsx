"use client";

import { useEffect } from "react";
import type { Service } from "@/lib/types";

export function ServiceList({ services }: { services: Service[] }) {
  useEffect(() => {
    const openTarget = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;

      const target = document.getElementById(id);
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        target.scrollIntoView({ block: "start" });
      }
    };

    openTarget();
    window.addEventListener("hashchange", openTarget);
    return () => window.removeEventListener("hashchange", openTarget);
  }, []);

  return (
    <div>
      {services.map((service) => (
        <details
          key={service.slug}
          id={service.slug}
          className="faq-item group scroll-mt-28 border-t border-line first:border-t-0"
        >
          <summary className="flex items-start gap-5 py-7 md:gap-8 md:py-9">
            <span className="font-display text-2xl font-semibold leading-none tracking-[-0.04em] text-accent md:text-4xl">
              {service.index}
            </span>
            <span className="min-w-0 flex-1">
              <span className="title-lg block max-w-[26ch]">
                {service.title}
              </span>
              <span className="body-sm mt-3 block max-w-2xl text-muted">
                {service.summary}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="faq-icon mt-1 font-display text-2xl leading-none text-accent transition-transform duration-300 md:text-3xl"
            >
              +
            </span>
          </summary>

          <div className="pb-10 pl-[3.5rem] md:pl-[5.5rem]">
            <p className="body-lg max-w-3xl text-muted">
              {service.description}
            </p>

            {service.note ? (
              <p className="body-sm mt-6 max-w-3xl border-l-2 border-accent pl-4 text-muted">
                {service.note}
              </p>
            ) : null}

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="label text-ink">What is included</h3>
                <ul className="mt-4 space-y-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="body-sm flex gap-3 text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.65em] h-px w-3 shrink-0 bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="label text-ink">Typical outcomes</h3>
                <ul className="mt-4 space-y-2">
                  {service.outcomes.map((item) => (
                    <li
                      key={item}
                      className="body-sm flex gap-3 text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.65em] h-px w-3 shrink-0 bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
