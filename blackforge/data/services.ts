import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "cybersecurity",
    index: "01",
    title: "Cybersecurity and penetration testing",
    summary:
      "Adversarial testing and practical hardening for systems that cannot afford surprises.",
    description:
      "We test the way an attacker would, then help you fix what matters. Engagements are scoped around real business risk, not a generic checklist, and every finding comes with a reproducible path to remediation.",
    includes: [
      "Scoped web, API, mobile, and network penetration tests",
      "Cloud and infrastructure configuration review",
      "Threat modelling and secure architecture review",
      "Secure code review for critical paths",
      "Remediation support with your engineering team",
      "Retesting and a closing report suitable for procurement",
    ],
    outcomes: [
      "A prioritised list of exploitable weaknesses, not a raw scanner dump",
      "Fixes your team can implement with confidence",
      "Evidence for security questionnaires and enterprise reviews",
      "A smaller attack surface before the next release",
    ],
    note: "Testing is performed under a written scope and rules of engagement. Client data is handled under NDA.",
  },
  {
    slug: "web-development",
    index: "02",
    title: "Full-stack web development",
    summary:
      "Fast, accessible products built on a codebase your team can own.",
    description:
      "We design and build web products end to end: the interface, the API, the data model, and the deployment. The result is a system that loads quickly, behaves predictably, and can be maintained by someone other than us.",
    includes: [
      "Product scoping and technical architecture",
      "Next.js and React front ends",
      "APIs, data models, and third-party integrations",
      "Content management and commerce",
      "Performance, accessibility, and SEO fundamentals",
      "Deployment, monitoring, documentation, and handover",
    ],
    outcomes: [
      "A production launch with no unresolved critical issues",
      "Measurable improvements in speed and accessibility",
      "A codebase with tests and written decisions",
      "A team that can make changes without calling us first",
    ],
  },
  {
    slug: "mobile-apps",
    index: "03",
    title: "Mobile app development",
    summary:
      "Native-feeling iOS and Android apps without unnecessary platform debt.",
    description:
      "We build mobile products for teams that need one codebase without settling for a web page in a wrapper. Offline behaviour, notifications, permissions, and store releases are treated as part of the product, not an afterthought.",
    includes: [
      "React Native and Expo development",
      "Offline-first data and sync",
      "Authentication, push notifications, and deep links",
      "Camera, location, and device integrations",
      "App Store and Google Play submission",
      "Crash reporting, analytics, and release pipelines",
    ],
    outcomes: [
      "A store-ready app for both platforms",
      "One maintainable codebase with a clear release process",
      "Reliable behaviour on poor connections",
      "A support plan for updates and OS changes",
    ],
  },
  {
    slug: "ai-automation",
    index: "04",
    title: "AI automation and agents",
    summary:
      "n8n workflows, agentic chatbots, and AI calling agents that remove repetitive work without removing judgement.",
    description:
      "We map the process, then automate only the part that can be trusted to run unattended. That can be an n8n workflow, an agentic chatbot with tools and memory, or an AI calling agent that answers, qualifies, and books. Humans keep the decisions that need context, and every automated step leaves an audit trail.",
    includes: [
      "n8n workflow design, self-hosting, and maintenance",
      "Agentic AI chatbots with tools, memory, and human handoff",
      "AI calling agents for enquiries, qualification, booking, and follow-up",
      "Process mapping and automation assessment",
      "Document and data extraction pipelines",
      "Retrieval over your own documents and data",
      "Evaluation sets, guardrails, and fallback paths",
      "Integration with CRMs, calendars, email, and databases",
    ],
    outcomes: [
      "Fewer manual handoffs and faster response times",
      "Coverage outside working hours without a scripted phone tree",
      "Automation that can be audited and corrected",
      "A clear boundary between automated and human work",
    ],
    note: "We will tell you when automation is the wrong answer. Some processes need a simpler form and a clearer owner.",
  },
  {
    slug: "seo-aeo",
    index: "05",
    title: "SEO and AEO",
    summary:
      "Be found by people and by the answer engines they now ask.",
    description:
      "Search is no longer only ten blue links. We make your site easy to crawl, easy to understand, and easy to quote, then give you a content plan that can be maintained without chasing every algorithm rumour.",
    includes: [
      "Technical SEO audit and fixes",
      "Information architecture and internal linking",
      "Structured data and entity clarity",
      "Answer-first content strategy",
      "Citation and authority work",
      "Measurement across search and AI answer surfaces",
    ],
    outcomes: [
      "A crawlable, indexable site with clean technical foundations",
      "Content structured for both search results and AI answers",
      "A prioritised editorial plan tied to real questions",
      "Reporting you can read without a translator",
    ],
    note: "AEO is not a trick. It rewards clear entities, verifiable facts, and pages that are worth quoting.",
  },
  {
    slug: "content",
    index: "06",
    title: "Content creation",
    summary:
      "Writing that sounds like a person with something to say.",
    description:
      "We write the words that carry the work: positioning, website copy, case studies, technical articles, and the editorial system that keeps them consistent. No filler, no keyword stuffing, no brand voice document that nobody uses.",
    includes: [
      "Messaging and positioning",
      "Website and product copy",
      "Case studies and client stories",
      "Technical articles and explainers",
      "Editorial calendars and governance",
      "Editing and proofreading",
    ],
    outcomes: [
      "A clear explanation of what you do and who it is for",
      "Copy that survives contact with sales and support",
      "A publishing rhythm the team can sustain",
      "A voice guide with examples, not adjectives",
    ],
  },
  {
    slug: "design",
    index: "07",
    title: "Graphic design",
    summary:
      "Identity and visual systems with enough discipline to survive reality.",
    description:
      "We build identities that work beyond the launch deck: on a website, in a catalogue, on a trade stand, and in the hands of a team that is not made of designers. Systems first, decoration second.",
    includes: [
      "Brand identity and wordmarks",
      "Art direction and photography direction",
      "Editorial layout and print production",
      "Design systems and component libraries",
      "Campaign and social assets",
      "Production-ready files and usage guidance",
    ],
    outcomes: [
      "A coherent identity across print and digital",
      "Templates your team can use without breaking",
      "Production files with clear specifications",
      "A visual language that still looks right in two years",
    ],
  },
  {
    slug: "ai-video",
    index: "08",
    title: "AI video generation",
    summary:
      "Short-form video produced with AI where it helps, directed by humans where it matters.",
    description:
      "AI makes it possible to produce more video without a studio shoot. It does not replace direction. We handle the concept, script, generation, edit, sound, and delivery so the output looks deliberate rather than assembled.",
    includes: [
      "Concept and script development",
      "AI-assisted scene generation",
      "Editing, colour, and sound",
      "Brand consistency and visual rules",
      "Captions and accessibility",
      "Delivery in platform-specific formats",
    ],
    outcomes: [
      "A consistent volume of short-form video",
      "A repeatable production process",
      "Platform-ready cuts with captions",
      "Less spend on reshoots and studio time",
    ],
    note: "We use licensed tools and disclose synthetic media where the platform or client requires it.",
  },
  {
    slug: "hardware-it",
    index: "09",
    title: "Hardware and IT support",
    summary:
      "Practical support for the machines and networks your work depends on.",
    description:
      "From a single workstation to a small office, we specify, build, repair, install, and administer the hardware and software that keep a team working. This includes PC builds and component recommendations, hardware repair and diagnostics, Windows and Linux installation, software installation and setup, system administration, and networking for small offices.",
    includes: [
      "Custom PC builds and component recommendations",
      "Hardware repair, diagnostics, and data-safe upgrades",
      "Windows and Linux installation, migration, and dual-boot setups",
      "Software installation, licensing, and configuration",
      "System administration, updates, backups, and recovery",
      "Network design, Wi-Fi, VPN, and small-office setup",
      "Remote support and on-site visits by arrangement",
    ],
    outcomes: [
      "Reliable machines with documented configurations",
      "Faster recovery when something fails",
      "A network that supports the way the office actually works",
      "Less downtime and fewer improvised fixes",
    ],
    note: "Remote support is available worldwide. On-site work is quoted separately and depends on location.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
