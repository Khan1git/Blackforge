export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  /** Public contact address used for mailto links across the site. */
  email: string;
  /** WhatsApp number in international format, digits only. */
  whatsapp: string;
  responseTime: string;
  founded: number;
  nav: NavItem[];
  socials: SocialLink[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  slug: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  includes: string[];
  outcomes: string[];
  note?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  client: string;
  year: string;
  category: string;
  categoryLabel: string;
  sector: string;
  location: string;
  image: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  tools: string[];
  services: string[];
  metrics: ProjectMetric[];
  featured: boolean;
  url?: string;
}

export interface Review {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  country: string;
  service: string;
  featured?: boolean;
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  email?: string;
  bio: string;
  focus: string;
  since: string;
  skills: Skill[];
}

export interface ProcessStep {
  number: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  duration: string;
  clientExpects: string[];
  deliverables: string[];
}

export interface ProcessPrinciple {
  title: string;
  description: string;
}

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readingTime: number;
  blocks: BlogBlock[];
}

export type BlogPostFile = Omit<BlogPost, "readingTime">;
