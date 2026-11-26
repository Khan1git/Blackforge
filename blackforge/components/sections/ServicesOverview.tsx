import Link from "next/link";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Stagger } from "@/components/motion/Stagger";
import { services } from "@/data/services";
import { homeServicesIntro } from "@/data/site";
import { visuals } from "@/data/visuals";
import { cn } from "@/lib/utils";

const featuredSlugs = [
  "cybersecurity",
  "web-development",
  "mobile-apps",
  "ai-automation",
  "seo-aeo",
  "hardware-it",
];

const featuredServices = featuredSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export function ServicesOverview() {
  return (
    <Section
      id="capabilities"
      index="01"
      label="Capabilities"
      aside={<p className="body-sm max-w-[20ch] text-muted">{homeServicesIntro}</p>}
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="display display-md max-w-[14ch]">
          What we do, end to end.
        </h2>
        <ButtonLink href="/services" variant="outline" size="sm">
          All services
        </ButtonLink>
      </div>

      <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredServices.map((service, index) => {
          const inverse = index === 0;
          const accent = index === 3;
          const wide = index === 0 || index === 3;
          const image = inverse
            ? visuals.services.cybersecurity
            : accent
              ? visuals.services.ai
              : null;

          return (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className={cn(
                "group relative flex min-h-[15rem] flex-col justify-between overflow-hidden border p-6 transition-colors md:p-7",
                wide && "md:col-span-2 xl:col-span-2",
                inverse &&
                  "border-inverse bg-inverse text-inverse-foreground hover:border-accent",
                accent &&
                  "border-accent bg-accent text-accent-contrast hover:border-ink",
                !inverse &&
                  !accent &&
                  "border-line bg-surface hover:border-ink hover:bg-surface-strong",
              )}
            >
              {image ? (
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
                />
              ) : null}

              <div className="relative z-10 flex items-start justify-between gap-4">
                <span
                  className={cn(
                    "font-display text-3xl font-semibold leading-none tracking-[-0.04em]",
                    inverse || accent ? "opacity-60" : "text-accent",
                  )}
                >
                  {service.index}
                </span>
                <ArrowIcon
                  className={cn(
                    "h-4 w-4 transition-transform group-hover:translate-x-1",
                    inverse || accent ? "opacity-70" : "text-muted",
                  )}
                />
              </div>

              <div className="relative z-10 mt-10">
                <h3 className="title-lg max-w-[15ch]">{service.title}</h3>
                <p
                  className={cn(
                    "body-sm mt-3 max-w-[34ch]",
                    inverse
                      ? "text-inverse-foreground/65"
                      : accent
                        ? "text-accent-contrast/75"
                        : "text-muted",
                  )}
                >
                  {service.summary}
                </p>
              </div>
            </Link>
          );
        })}

        <Link
          href="/services"
          className="group flex min-h-[15rem] flex-col justify-between border border-dashed border-line bg-bg p-6 transition-colors hover:border-accent hover:bg-surface md:p-7"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-accent">
              09
            </span>
            <ArrowIcon className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
          </div>

          <div className="mt-10">
            <h3 className="title-lg max-w-[12ch]">The full service list.</h3>
            <p className="body-sm mt-3 max-w-[30ch] text-muted">
              Content, design, video, and the practical work in between.
            </p>
          </div>
        </Link>
      </Stagger>
    </Section>
  );
}
