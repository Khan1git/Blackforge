import Link from "next/link";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { site } from "@/data/site";
import { visuals } from "@/data/visuals";
import { cn } from "@/lib/utils";

const capabilities = [
  "Cybersecurity",
  "Web engineering",
  "Mobile apps",
  "AI automation",
  "n8n workflows",
  "Agentic chatbots",
  "AI calling agents",
  "Search and AEO",
  "Content",
  "Design",
  "Video",
  "IT support",
];

const pillars = [
  {
    index: "01",
    title: "Build",
    summary: "Web products, mobile apps, and the systems behind them.",
    href: "/services#web-development",
  },
  {
    index: "02",
    title: "Secure",
    summary: "Penetration testing, hardening, and practical IT support.",
    href: "/services#cybersecurity",
  },
  {
    index: "03",
    title: "Automate",
    summary: "n8n workflows, agentic chatbots, and AI calling agents.",
    href: "/services#ai-automation",
  },
];

export function Hero() {
  return (
    <section className="border-b border-line">
      <Container>
        <div className="flex items-center justify-between gap-4 border-b border-line py-5">
          <span className="label text-muted">
            Independent IT and digital agency
          </span>
          <span className="label hidden text-muted sm:block">
            Working worldwide
          </span>
          <span className="label whitespace-nowrap text-muted">
            Est. {site.founded}
          </span>
        </div>

        <div className="py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="label flex items-center gap-2 text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
                  Taking on selected projects
                </p>
              </Reveal>

              <h1 className="mt-5 text-balance">
                <SplitText
                  text="Websites. Apps. AI."
                  as="span"
                  className="display display-hero split-line"
                />
                <SplitText
                  text="Built to work."
                  as="span"
                  className="display display-md mt-4 block"
                  delay={180}
                  accent
                />
              </h1>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={120}>
                <p className="body-lg max-w-md text-muted">
                  From local newsrooms to menu discovery apps, we design, build,
                  secure, and automate the web. One senior team, from first
                  sketch to launch.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href="/contact">Start a project</ButtonLink>
                  <ButtonLink href="/projects" variant="outline">
                    See the work
                  </ButtonLink>
                </div>
                <p className="label mt-5 text-muted">
                  One senior team. No handoffs.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="relative mt-12 overflow-hidden border-y border-white/15 bg-[#0b1a17]">
            <img
              src={visuals.hero}
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#0b1a17]/75"
            />
            <div
              aria-hidden="true"
              className="grid-field pointer-events-none absolute inset-0 text-[#f3efe6] opacity-20"
            />

            <div className="relative grid md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <Link
                  key={pillar.title}
                  href={pillar.href}
                  className={cn(
                    "group flex flex-col justify-between gap-8 py-6 text-[#f3efe6] transition-colors hover:bg-white/5 md:px-6",
                    index > 0 && "border-t border-white/15 md:border-t-0 md:border-l",
                    index === 0 && "md:pl-0",
                    index === pillars.length - 1 && "md:pr-0",
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="label text-[#e4a93f]">
                      {pillar.index}
                    </span>
                    <ArrowIcon className="text-[#f3efe6]/55 transition-transform group-hover:translate-x-1 group-hover:text-[#6fd6c3]" />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-semibold leading-none tracking-[-0.05em] transition-colors group-hover:text-[#6fd6c3]">
                      {pillar.title}
                    </h2>
                    <p className="body-sm mt-3 max-w-[30ch] text-[#f3efe6]/65">
                      {pillar.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="marquee bg-inverse py-3 text-inverse-foreground"
      >
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="marquee-group">
              {capabilities.map((capability) => (
                <span
                  key={`${copy}-${capability}`}
                  className="flex items-center"
                >
                  <span className="label px-6">{capability}</span>
                  <span className="h-1.5 w-1.5 shrink-0 bg-highlight" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
