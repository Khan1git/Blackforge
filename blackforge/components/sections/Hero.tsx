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

          <Reveal delay={200}>
            <div className="relative mt-12 overflow-hidden border border-line bg-[#0b1220] md:mt-14">
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
                className="absolute inset-0 bg-[#0b1220]/78"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-[#0b1220] via-[#0b1220]/55 to-[#0b1220]/35"
              />
              <div
                aria-hidden="true"
                className="grid-field pointer-events-none absolute inset-0 text-white opacity-[0.12]"
              />

              <div className="relative grid gap-4 p-5 sm:gap-5 sm:p-6 md:grid-cols-3 md:gap-5 md:p-8 lg:p-10">
                {pillars.map((pillar) => (
                  <Link
                    key={pillar.title}
                    href={pillar.href}
                    className={cn(
                      "group flex min-h-[15rem] flex-col justify-between gap-10 border border-white/15 bg-white/[0.04] p-6 text-white backdrop-blur-[2px] transition-all duration-300",
                      "hover:border-white/30 hover:bg-white/[0.08] md:min-h-[16.5rem] md:p-7",
                    )}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="label text-highlight">{pillar.index}</span>
                      <ArrowIcon className="text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                    </div>
                    <div>
                      <h2 className="font-display text-3xl font-semibold leading-none tracking-[-0.05em] transition-colors group-hover:text-accent">
                        {pillar.title}
                      </h2>
                      <p className="body-sm mt-3 max-w-[30ch] text-white/65">
                        {pillar.summary}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
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
