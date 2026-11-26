import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { homeProcess } from "@/data/process";

export function ProcessSection() {
  return (
    <Section
      id="process"
      index="03"
      label="How we work"
      aside={
        <p className="body-sm max-w-[18ch] text-muted">
          Four steps. Visible decisions. No theatre.
        </p>
      }
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="display display-md max-w-[14ch]">
          Four steps. No black box.
        </h2>
        <ButtonLink href="/process" variant="outline" size="sm">
          The full process
        </ButtonLink>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {homeProcess.map((step, index) => (
          <Reveal key={step.number} delay={index * 80}>
            <div className="group border-t border-line pt-5">
              <span className="font-display text-4xl font-semibold leading-none text-accent md:text-5xl">
                {step.number}
              </span>
              <h3 className="title-md mt-4">{step.title}</h3>
              <p className="body-sm mt-3 text-muted">{step.summary}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
