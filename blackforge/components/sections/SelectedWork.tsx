import Link from "next/link";
import { ProjectPlate } from "@/components/projects/ProjectPlate";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { featuredProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      aside={
        <p className="body-sm max-w-[18ch] text-muted">
          MenuMate and two live news platforms. All shipped, all live.
        </p>
      }
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="display display-md max-w-[14ch]">
          Live work, not mockups.
        </h2>
        <ButtonLink href="/projects" variant="outline" size="sm">
          All projects
        </ButtonLink>
      </div>

      <div className="mt-12 space-y-16">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 80}>
            <Link
              href={`/projects/${project.slug}`}
              className="group grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8"
            >
              <div
                className={cn(
                  "lg:col-span-7",
                  index % 2 === 1 && "lg:order-2",
                )}
              >
                <ProjectPlate project={project} large />
              </div>
              <div
                className={cn(
                  "lg:col-span-5",
                  index % 2 === 1 && "lg:order-1",
                )}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="label text-accent">{project.index}</span>
                  <span className="label text-muted">
                    {project.categoryLabel}
                  </span>
                  {project.url ? (
                    <span className="label flex items-center gap-2 text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
                      Live
                    </span>
                  ) : null}
                </div>
                <h3 className="title-lg mt-4 max-w-[18ch] transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <div className="mt-5 flex items-baseline gap-3 border-t border-line pt-4">
                  <span className="font-display text-3xl font-semibold leading-none text-accent">
                    {project.metrics[0]?.value}
                  </span>
                  <span className="label max-w-[20ch] text-muted">
                    {project.metrics[0]?.label}
                  </span>
                </div>
                <p className="body-sm mt-4 max-w-prose text-muted">
                  {project.summary}
                </p>
                <span className="label mt-6 inline-flex items-center gap-2 text-ink">
                  Read the case study <ArrowIcon />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
