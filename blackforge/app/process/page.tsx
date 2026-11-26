import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  communicationPoints,
  processPrinciples,
  processSteps,
} from "@/data/process";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "How we work",
  description:
    "BlackForge's six-phase process: discover, plan, build, test and secure, launch, and support. Clear decisions, short cycles, and a real handover.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        index="05"
        label="How we work"
        title={
          <>
            A process you can <span className="text-accent">see</span>.
          </>
        }
        description="Six phases, clear decisions, and a handover that leaves you independent. Open a phase for what to expect and what you receive."
      />

      <div className="shell py-14 md:py-20">
        <div className="grid gap-8 border-b border-line pb-12 md:grid-cols-4">
          {processPrinciples.map((principle) => (
            <div key={principle.title}>
              <h2 className="label text-accent">{principle.title}</h2>
              <p className="body-sm mt-3 text-muted">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="label text-muted">The six phases</p>
              <p className="body-sm mt-4 max-w-[24ch] text-muted">
                Most engagements use all six. Support is optional and scoped
                separately.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-9">
            {processSteps.map((step) => (
              <details
                key={step.slug}
                id={step.slug}
                className="faq-item scroll-mt-28 border-t border-line"
              >
                <summary className="grid grid-cols-[2.5rem_1fr_auto] items-start gap-4 py-7 md:grid-cols-[4rem_1fr_10rem_2rem] md:items-center md:gap-6 md:py-9">
                  <span className="font-display text-2xl font-semibold leading-none tracking-[-0.04em] text-accent md:text-4xl">
                    {step.number}
                  </span>
                  <span className="min-w-0">
                    <span className="title-lg block">{step.title}</span>
                    <span className="body-sm mt-2 block max-w-xl text-muted">
                      {step.summary}
                    </span>
                    <span className="label mt-2 block text-muted md:hidden">
                      {step.duration}
                    </span>
                  </span>
                  <span className="label hidden text-muted md:block">
                    {step.duration}
                  </span>
                  <span
                    aria-hidden="true"
                    className="faq-icon font-display text-2xl leading-none text-accent transition-transform duration-300 md:text-3xl"
                  >
                    +
                  </span>
                </summary>

                <div className="pb-10 md:pl-[5.5rem]">
                  <p className="body-lg max-w-3xl text-muted">
                    {step.description}
                  </p>

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="label text-ink">What you can expect</h3>
                      <ul className="mt-3 space-y-2">
                        {step.clientExpects.map((item) => (
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
                      <h3 className="label text-ink">What you receive</h3>
                      <ul className="mt-3 space-y-2">
                        {step.deliverables.map((item) => (
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
        </div>

        <section className="mt-20 border-t border-line pt-10">
          <h2 className="display display-md max-w-[16ch]">
            How we communicate.
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {communicationPoints.map((point) => (
              <div key={point.title} className="border-t border-line pt-5">
                <h3 className="label text-accent">{point.title}</h3>
                <p className="body-sm mt-3 text-muted">{point.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
