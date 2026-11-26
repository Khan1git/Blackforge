import type { TeamMember } from "@/lib/types";

export const team: TeamMember[] = [
  {
    slug: "arif-rahman",
    name: "Arif Rahman",
    role: "Co-founder / Full-stack developer",
    bio: "Arif co-founded BlackForge and works across the stack: web and mobile products, security testing, performance, search, and AI automation. He stays on the project from the first call to the handover, and he would rather ship a smaller system that works than a larger one that needs a translator.",
    focus:
      "Full-stack web and mobile, pentesting, performance, SEO, AI automation",
    since: "2019",
    skills: [
      { name: "Full-stack web and mobile apps", level: 5 },
      { name: "Website and network pentesting", level: 4 },
      { name: "Website performance optimization", level: 5 },
      { name: "SEO", level: 4 },
      { name: "AI integration and automation", level: 5 },
      { name: "n8n", level: 5 },
    ],
  },
  {
    slug: "shakir",
    name: "Shakir",
    role: "Co-founder / Full-stack developer",
    bio: "Shakir co-founded BlackForge and builds web and mobile products end to end, from interface work to APIs and deployment. He also handles performance tuning, technical SEO, and the automation layer that keeps a product running after launch. He is the person who reads the error log before suggesting a rewrite.",
    focus:
      "Full-stack web and mobile, pentesting, performance, SEO, AI automation",
    since: "2021",
    skills: [
      { name: "Full-stack web and mobile apps", level: 5 },
      { name: "Website and network pentesting", level: 4 },
      { name: "Website performance optimization", level: 4 },
      { name: "SEO", level: 4 },
      { name: "AI integration and automation", level: 4 },
      { name: "n8n", level: 4 },
    ],
  },
];
