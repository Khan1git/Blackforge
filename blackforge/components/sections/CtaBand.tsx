import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { visuals } from "@/data/visuals";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-accent text-accent-contrast">
      <img
        src={visuals.cta}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-accent/65"
      />
      <Container className="relative">
        <div className="grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label opacity-70">Next</p>
            <Reveal>
              <h2 className="display display-lg mt-5 max-w-[15ch]">
                Have something that needs to work?
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={100}>
              <p className="body-lg max-w-sm text-accent-contrast/75">
                Tell us what you are trying to build. We will tell you how we
                would approach it, what it would take, and whether we are the
                right team.
              </p>
              <ButtonLink
                href="/contact"
                variant="inverse"
                className="mt-8"
              >
                Start a conversation
              </ButtonLink>
              <p className="label mt-5 text-accent-contrast/65">
                Replies within {site.responseTime}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
