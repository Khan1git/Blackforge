import type { SiteConfig, Stat } from "@/lib/types";

export const site: SiteConfig = {
  name: "BlackForge",
  tagline: "Innovate. Build. Secure.",
  description:
    "BlackForge is an independent IT and digital agency working worldwide. We build, secure, automate, and support the systems that businesses depend on.",
  url: "https://blackforge.agency",
  email: "arifrahman1k7@gmail.com",
  // TODO: Replace this placeholder with the real WhatsApp business number.
  // Use digits only, including the country code, with no plus sign or spaces.
  whatsapp: "15551234567",
  responseTime: "one business day",
  founded: 2019,
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/projects" },
    { label: "Reviews", href: "/reviews" },
    { label: "Process", href: "/process" },
    { label: "Team", href: "/team" },
    { label: "Journal", href: "/blog" },
  ],
  // Leave href empty for links that are not live yet; they are filtered out.
  socials: [
    { label: "LinkedIn", href: "" },
    { label: "GitHub", href: "" },
    { label: "X", href: "" },
  ],
};

export const stats: Stat[] = [
  { value: "06", label: "Selected projects" },
  { value: "02", label: "Senior team" },
  { value: "09", label: "Disciplines in house" },
  { value: "05", label: "News platforms live" },
];

export const homeServicesIntro =
  "Six core disciplines, one senior team. The full list runs to nine.";
