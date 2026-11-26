"use client";

import { useState } from "react";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("all");

  const categories = Array.from(
    new Map(
      projects.map((project) => [project.category, project.categoryLabel]),
    ).entries(),
  ).map(([slug, label]) => ({ slug, label }));

  const visible =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 border-y border-line py-4">
        <span className="label mr-2 text-muted">Filter</span>
        <button
          type="button"
          onClick={() => setActive("all")}
          aria-pressed={active === "all"}
          className={cn(
            "label border px-3 py-2 transition-colors",
            active === "all"
              ? "border-ink bg-ink text-bg"
              : "border-line text-muted hover:border-ink hover:text-ink",
          )}
        >
          All <span className="opacity-60">{projects.length}</span>
        </button>
        {categories.map((category) => {
          const count = projects.filter(
            (project) => project.category === category.slug,
          ).length;

          return (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActive(category.slug)}
              aria-pressed={active === category.slug}
              className={cn(
                "label border px-3 py-2 transition-colors",
                active === category.slug
                  ? "border-ink bg-ink text-bg"
                  : "border-line text-muted hover:border-ink hover:text-ink",
              )}
            >
              {category.label} <span className="opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <p className="label mt-4 text-muted" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <div className="mt-8 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {visible.map((project) => (
          <div key={`${active}-${project.slug}`} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
