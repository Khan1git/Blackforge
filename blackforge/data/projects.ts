import type { Project } from "@/lib/types";
import { projectImages } from "@/data/visuals";

export const projects: Project[] = [
  {
    slug: "menumate",
    index: "01",
    title: "MenuMate: a menu-first app for curious eaters",
    client: "MenuMate",
    year: "2026",
    category: "mobile-apps",
    categoryLabel: "Mobile apps",
    sector: "Food and hospitality",
    location: "United States",
    image: projectImages.menumate,
    summary:
      "A mobile-first menu discovery app for restaurants, dishes, and the places worth coming back to.",
    challenge:
      "Menus are scattered across PDFs, social posts, and delivery apps. Diners cannot see the full picture before they choose a table, and restaurants struggle to keep their menu current. MenuMate needed to make the menu itself the product.",
    approach:
      "We designed and built a mobile-first experience around the menu: dishes, ingredients, prices, restaurant details, saved places, and a feed of people whose taste you trust. The flow stays short: find a place, see the menu, save the dish, make a plan.",
    result:
      "MenuMate launched with 2,400+ menus and 18,000+ saved dishes in its first release. It gives diners a calmer way to decide where to eat and gives restaurants a menu presence that is worth sharing.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    services: [
      "Mobile app development",
      "Full-stack web development",
      "Graphic design",
    ],
    metrics: [
      { value: "2,400+", label: "Menus in the first release" },
      { value: "18k", label: "Dishes saved by the community" },
      { value: "3", label: "Steps from craving to plan" },
    ],
    featured: true,
    url: "https://menu-mate-two.vercel.app/",
  },
  {
    slug: "central-park-news",
    index: "02",
    title: "Central Park News: a daily newsroom for the park",
    client: "Central Park News",
    year: "2026",
    category: "web-development",
    categoryLabel: "Web development",
    sector: "Local news and publishing",
    location: "Manhattan, New York",
    image: projectImages.centralParkNews,
    summary:
      "A daily newsroom for Central Park: events, wildlife, safety, park operations, and community stories.",
    challenge:
      "Central Park produces a constant stream of events, alerts, and local reporting. Readers need to find what is happening today without fighting a generic news layout. The site had to make the park, not the template, the story.",
    approach:
      "We built the site around the park's rhythm: a lead story, a clear category system, event and weather modules, an archive, search, and a Friday briefing. The editorial hierarchy stays obvious on a phone, which is where most readers arrive.",
    result:
      "Central Park News now publishes daily park reporting, event updates, and a Friday briefing from one consistent, easy-to-scan site.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    services: [
      "Full-stack web development",
      "SEO and AEO",
      "Content creation",
    ],
    metrics: [
      { value: "10", label: "Topic sections" },
      { value: "Daily", label: "Publishing cadence" },
      { value: "1", label: "Friday briefing" },
    ],
    featured: true,
    url: "https://www.centralpark.news/",
  },
  {
    slug: "cross-bay-current",
    index: "03",
    title: "Cross Bay Current: real-time local reporting",
    client: "Cross Bay Current",
    year: "2026",
    category: "web-development",
    categoryLabel: "Web development",
    sector: "Local news and publishing",
    location: "Queens, New York",
    image: projectImages.crossBayCurrent,
    summary:
      "Real-time local reporting for the Cross Bay corridor, built for alerts, transit, and community updates.",
    challenge:
      "Local news moves in bursts: weather alerts, transit closures, public-safety updates, and community meetings. The site needed to surface the latest item without burying the archive.",
    approach:
      "We built a category-led platform with a prominent lead story, alert and weather slots, a clean archive, search, and a Friday newsletter. The layout prioritises recency and scannability, so a reader can catch up in a minute.",
    result:
      "Cross Bay Current now covers Howard Beach, Ozone Park, and the Cross Bay corridor with a fast, consistent publishing workflow.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    services: [
      "Full-stack web development",
      "SEO and AEO",
      "Content creation",
    ],
    metrics: [
      { value: "09", label: "News categories" },
      { value: "Daily", label: "Local updates" },
      { value: "1", label: "Friday briefing" },
    ],
    featured: true,
    url: "https://www.crossbaycurrent.com/",
  },
  {
    slug: "cross-bay-news",
    index: "04",
    title: "Cross Bay News: a local paper for the bay",
    client: "Cross Bay News",
    year: "2026",
    category: "web-development",
    categoryLabel: "Web development",
    sector: "Local news and publishing",
    location: "Queens, New York",
    image: projectImages.crossBayNews,
    summary:
      "A local paper for Broad Channel, Rockaway, and Howard Beach, with daily reporting and a Friday briefing.",
    challenge:
      "The Cross Bay area has distinct neighborhoods and a shared set of concerns: transit, flooding, local business, and community board decisions. The site needed to serve both without becoming a generic city news page.",
    approach:
      "We built a second local title on a shared publishing system: category pages, a lead story, weather and tide alerts, a newsletter, and a searchable archive. Each neighborhood keeps its own voice while the newsroom runs one workflow.",
    result:
      "Cross Bay News publishes daily local reporting and a Friday briefing for Broad Channel, Rockaway, and Howard Beach.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    services: ["Full-stack web development", "SEO and AEO"],
    metrics: [
      { value: "10", label: "Topic sections" },
      { value: "Daily", label: "Publishing cadence" },
      { value: "1", label: "Shared newsroom system" },
    ],
    featured: false,
    url: "https://www.crossbay.news/",
  },
  {
    slug: "bar-exam-news",
    index: "05",
    title: "Bar Exam News: a specialist legal newsroom",
    client: "Bar Exam News",
    year: "2026",
    category: "web-development",
    categoryLabel: "Web development",
    sector: "Legal education and publishing",
    location: "United States",
    image: projectImages.barExamNews,
    summary:
      "A specialist newsroom for bar exam policy, results, deadlines, and the NextGen Bar Exam.",
    challenge:
      "Bar exam news is time-sensitive and detail-heavy. Candidates need deadlines, state-by-state changes, and results without wading through generic legal coverage.",
    approach:
      "We built a specialist platform with exam-date and score modules, state categories, a NextGen Bar Exam section, search, and a weekly briefing. The information architecture keeps deadlines and policy changes easy to find.",
    result:
      "Bar Exam News now publishes daily exam policy and result updates for candidates and legal educators.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    services: [
      "Full-stack web development",
      "SEO and AEO",
      "Content creation",
    ],
    metrics: [
      { value: "06", label: "Core exam sections" },
      { value: "2027", label: "Exam cycle covered" },
      { value: "1", label: "Weekly briefing" },
    ],
    featured: false,
    url: "https://www.barexam.news/",
  },
  {
    slug: "howard-beach-news",
    index: "06",
    title: "Howard Beach News: hyperlocal reporting at the shoreline",
    client: "Howard Beach News",
    year: "2026",
    category: "web-development",
    categoryLabel: "Web development",
    sector: "Local news and publishing",
    location: "Queens, New York",
    image: projectImages.howardBeachNews,
    summary:
      "Hyperlocal reporting for Howard Beach, Lindenwood, and Hamilton Beach.",
    challenge:
      "A coastal neighborhood needs weather, flood, transit, school, and public-safety information in one place, without the noise of a citywide news site.",
    approach:
      "We built a neighborhood-first platform with a lead story, weather and flood alerts, category sections, a community calendar, search, and a Friday newsletter. The design is fast, readable, and built for a daily habit.",
    result:
      "Howard Beach News now publishes daily local reporting and a Friday briefing for the neighborhood.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    services: ["Full-stack web development", "SEO and AEO"],
    metrics: [
      { value: "10", label: "Local sections" },
      { value: "Daily", label: "Publishing cadence" },
      { value: "1", label: "Neighborhood briefing" },
    ],
    featured: false,
    url: "https://www.howardbeach.news/",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectCategories = Array.from(
  new Map(projects.map((project) => [project.category, project.categoryLabel])),
).map(([slug, label]) => ({ slug, label }));
