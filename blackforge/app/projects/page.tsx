import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/ui/PageHeader";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Live BlackForge work: MenuMate, five local news platforms, and the web, mobile, search, and publishing systems behind them.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        index="02"
        label="Selected work"
        title={
          <>
            Work that <span className="text-accent">held up</span>.
          </>
        }
        description="MenuMate, five live news platforms, and the work behind them. Filter by discipline or read the full case studies."
      />

      <div className="shell py-14 md:py-20">
        <ProjectFilter projects={projects} />
      </div>

      <CtaBand />
    </>
  );
}
