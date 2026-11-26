import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectPlate } from "@/components/projects/ProjectPlate";
import { CtaBand } from "@/components/sections/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

// Known projects are prerendered; unknown slugs wait for the render and return
// a real 404 instead of a streamed App Shell with a 200 status.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    type: "article",
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length] ?? project;

  return (
    <>
      <article>
        <header className="border-b border-line">
          <div className="shell">
            <div className="flex items-center justify-between gap-6 border-b border-line py-5">
              <Link
                href="/projects"
                className="label link-underline text-muted"
              >
                ← All projects
              </Link>
              <span className="label text-muted">
                {project.categoryLabel} / {project.year}
              </span>
            </div>

            <div className="grid gap-10 py-12 md:py-16 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="label text-accent">
                  {project.index} / {project.client}
                </p>
                <h1 className="display display-lg mt-5 max-w-[15ch]">
                  {project.title}
                </h1>
                <p className="body-lg mt-6 max-w-prose text-muted">
                  {project.summary}
                </p>
                {project.url ? (
                  <ButtonLink
                    href={project.url}
                    external
                    variant="outline"
                    size="sm"
                    className="mt-6"
                  >
                    Visit live site
                  </ButtonLink>
                ) : null}
              </div>
              <div className="lg:col-span-4 lg:pt-2">
                <ProjectPlate project={project} large />
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-px border-t border-line py-6 md:grid-cols-4">
              <div>
                <dt className="label text-muted">Client</dt>
                <dd className="mt-2 text-sm">{project.client}</dd>
              </div>
              <div>
                <dt className="label text-muted">Sector</dt>
                <dd className="mt-2 text-sm">{project.sector}</dd>
              </div>
              <div>
                <dt className="label text-muted">Location</dt>
                <dd className="mt-2 text-sm">{project.location}</dd>
              </div>
              <div>
                <dt className="label text-muted">Year</dt>
                <dd className="mt-2 text-sm">{project.year}</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <p className="label text-muted">Case study</p>
                <p className="label mt-2 text-accent">{project.index}</p>
              </div>
            </div>

            <div className="space-y-14 lg:col-span-9">
              <section>
                <h2 className="label text-accent">01 / Challenge</h2>
                <p className="body-lg mt-4 max-w-3xl">{project.challenge}</p>
              </section>

              <section>
                <h2 className="label text-accent">02 / Approach</h2>
                <p className="body-lg mt-4 max-w-3xl">{project.approach}</p>
              </section>

              <section>
                <h2 className="label text-accent">03 / Result</h2>
                <p className="body-lg mt-4 max-w-3xl">{project.result}</p>
              </section>

              <section
                aria-label="Project results"
                className="grid border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-line"
              >
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="py-6 sm:px-6 sm:first:pl-0">
                    <p className="font-display text-4xl font-semibold leading-none tracking-[-0.04em] md:text-5xl">
                      {metric.value}
                    </p>
                    <p className="label mt-2 text-muted">{metric.label}</p>
                  </div>
                ))}
              </section>

              <section className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="label text-ink">Tools</h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <li key={tool}>
                        <Tag>{tool}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="label text-ink">Services</h2>
                  <ul className="mt-3 space-y-2">
                    {project.services.map((service) => (
                      <li key={service} className="body-sm text-muted">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="shell flex flex-wrap items-center justify-between gap-6 py-10">
            <div>
              <p className="label text-muted">Next project</p>
              <Link
                href={`/projects/${next.slug}`}
                className="title-lg link-underline mt-2 inline-block"
              >
                {next.title}
              </Link>
            </div>
            <ButtonLink href="/projects" variant="outline" size="sm">
              All projects
            </ButtonLink>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
