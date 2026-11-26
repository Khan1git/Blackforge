import type { Skill } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SkillMeter({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-3 border-b border-line py-2.5 last:border-b-0">
      <span className="text-sm">{skill.name}</span>
      <span className="ml-auto flex items-center gap-1" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((level) => (
          <span
            key={level}
            className={cn(
              "h-1 w-4 md:w-5",
              level <= skill.level ? "bg-accent" : "bg-line",
            )}
          />
        ))}
      </span>
      <span className="sr-only">Proficiency {skill.level} out of 5</span>
    </div>
  );
}
