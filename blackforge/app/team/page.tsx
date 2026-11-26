import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { SkillMeter } from "@/components/team/SkillMeter";
import { PageHeader } from "@/components/ui/PageHeader";
import { team } from "@/data/team";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Team",
  description:
    "The two co-founders behind BlackForge: full-stack developers working directly on web and mobile products, security, performance, SEO, AI automation, and n8n.",
  path: "/team",
});

const staffing = [
  {
    title: "Senior-led",
    description:
      "The person you meet is the person doing the work. We do not hand projects to a junior delivery team after the contract is signed.",
  },
  {
    title: "Small by design",
    description:
      "Most projects run with the two people below. When a scope needs a specialist, we bring one in and keep the accountability in the same room.",
  },
  {
    title: "Built to hand over",
    description:
      "Documentation, access, and training are part of the scope. A system that only we can maintain is a system we have not finished.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        index="04"
        label="Team"
        title={
          <>
            Small, senior,{" "}
            <span className="text-accent">directly involved</span>.
          </>
        }
        description="Two co-founders, no account managers, no anonymous delivery pod. The people below are the people you will work with."
      />

      <div className="shell py-14 md:py-20">
        <div className="space-y-16">
          {team.map((member, index) => (
            <Reveal
              key={member.slug}
              className="border-t border-line pt-8"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-accent md:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="label text-muted">
                      Since {member.since}
                    </span>
                  </div>
                  <h2 className="display display-md mt-4 max-w-[12ch]">
                    {member.name}
                  </h2>
                  <p className="label mt-4 text-accent">{member.role}</p>
                  <p className="body-sm mt-4 max-w-[26ch] text-muted">
                    {member.focus}
                  </p>
                  {member.email ? (
                    <a
                      href={`mailto:${member.email}`}
                      className="body-sm mt-4 inline-block text-ink transition-colors hover:text-accent"
                    >
                      {member.email}
                    </a>
                  ) : null}
                </div>

                <div className="lg:col-span-5">
                  <p className="body-lg">{member.bio}</p>
                </div>

                <div className="lg:col-span-3">
                  <div className="border border-line bg-surface p-5">
                    <h3 className="label text-muted">Skills</h3>
                    <div className="mt-4">
                      {member.skills.map((skill) => (
                        <SkillMeter key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <section className="mt-20 border-t border-line pt-10">
          <h2 className="display display-md max-w-[16ch]">
            How we staff projects.
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {staffing.map((point) => (
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
