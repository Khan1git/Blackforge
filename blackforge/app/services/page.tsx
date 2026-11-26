import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceList } from "@/components/services/ServiceList";
import { PageHeader } from "@/components/ui/PageHeader";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Cybersecurity, web and mobile development, AI automation with n8n, agentic chatbots and AI calling agents, search, content, design, video, and hands-on IT support from one accountable team.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="Services"
        title={
          <>
            What we <span className="text-accent">do</span>.
          </>
        }
        description="Nine disciplines, one accountable team. Open a discipline for scope, outcomes, and the practical details."
      />

      <div className="shell py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="label text-muted">Index</p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 lg:block lg:space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <a
                      href={`#${service.slug}`}
                      className="group flex gap-3 text-sm text-muted transition-colors hover:text-ink"
                    >
                      <span className="label text-accent">
                        {service.index}
                      </span>
                      <span>{service.title}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 hidden border-t border-line pt-5 lg:block">
                <p className="font-display text-5xl font-semibold leading-none text-accent">
                  09
                </p>
                <p className="label mt-2 text-muted">Disciplines in house</p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <ServiceList services={services} />
          </div>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
