import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { featuredReviews } from "@/data/reviews";

export function ReviewsSection() {
  const [lead, ...rest] = featuredReviews;

  return (
    <Section
      index="04"
      label="Client reviews"
      aside={
        <p className="body-sm max-w-[18ch] text-muted">
          Three clients. Three countries. No anonymous praise.
        </p>
      }
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="display display-md max-w-[15ch]">
          The work is the pitch. The reviews are the proof.
        </h2>
        <ButtonLink href="/reviews" variant="outline" size="sm">
          All reviews
        </ButtonLink>
      </div>

      {lead ? (
        <Reveal className="mt-12">
          <div className="bg-inverse p-7 text-inverse-foreground md:p-10">
            <span
              aria-hidden="true"
              className="block font-display text-6xl leading-[0.6] text-inverse-foreground/25 md:text-8xl"
            >
              “
            </span>
            <blockquote>
              <p className="display display-md mt-4 max-w-[24ch]">
                “{lead.quote}”
              </p>
              <footer className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="label text-inverse-foreground">
                  {lead.name}
                </span>
                <span className="label text-inverse-foreground/60">
                  {lead.role}, {lead.company}
                </span>
                <span className="label text-inverse-foreground/60">
                  {lead.country}
                </span>
              </footer>
            </blockquote>
          </div>
        </Reveal>
      ) : null}

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {rest.map((review, index) => (
          <Reveal
            key={review.id}
            delay={index * 100}
            className="border border-line bg-surface p-6"
          >
            <blockquote>
              <span
                aria-hidden="true"
                className="block font-display text-4xl leading-[0.6] text-accent"
              >
                “
              </span>
              <p className="title-md mt-3 text-ink">“{review.quote}”</p>
              <footer className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="label text-ink">{review.name}</span>
                <span className="label text-muted">
                  {review.role}, {review.company}
                </span>
                <span className="label text-muted">{review.country}</span>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
