import Link from "next/link";
import type { Project } from "@/lib/types";
import { ArrowIcon } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { ProjectPlate } from "./ProjectPlate";

export function ProjectCard({
  project,
  heading = "h2",
}: {
  project: Project;
  heading?: "h2" | "h3";
}) {
  const Heading = heading;

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <ProjectPlate project={project} />

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <Heading className="title-lg max-w-[22ch] transition-colors group-hover:text-accent">
            {project.title}
          </Heading>
          <p className="body-sm mt-3 max-w-prose text-muted">
            {project.summary}
          </p>
        </div>
        <ArrowIcon className="mt-1 shrink-0" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.services.map((service) => (
          <Tag key={service}>{service}</Tag>
        ))}
      </div>
    </Link>
  );
}
