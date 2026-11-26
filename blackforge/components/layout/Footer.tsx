import Link from "next/link";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";

// Resolved once at build/startup rather than on every render, so the page can
// stay fully static. A new deployment refreshes it.
const copyrightYear = new Date().getFullYear();

const footerServiceSlugs = [
  "cybersecurity",
  "web-development",
  "mobile-apps",
  "ai-automation",
  "seo-aeo",
];

const footerServices = footerServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export function Footer() {
  const socials = site.socials.filter((social) => social.href);
  const year = copyrightYear;

  return (
    <footer
      id="site-footer"
      className="site-footer border-t border-inverse-foreground/20 bg-inverse text-inverse-foreground"
    >
      <div className="shell">
        <div className="grid gap-10 py-14 md:py-16 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <Logo className="text-inverse-foreground" />
            <p className="display display-md mt-8 max-w-[13ch]">
              Built to hold up.
            </p>
            <p className="body-sm mt-4 max-w-sm text-inverse-foreground/60">
              {site.description}
            </p>
          </div>

          <div className="lg:col-span-5 lg:text-right">
            <p className="label text-inverse-foreground/50">New business</p>
            <ButtonLink href="/contact" size="lg" className="mt-4">
              Contact us
            </ButtonLink>
            <p className="label mt-3 text-inverse-foreground/50">
              Replies within {site.responseTime}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink href="/projects" variant="inverse" size="sm">
                See the work
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-t border-inverse-foreground/15 py-10 sm:grid-cols-3">
          <div>
            <h2 className="label text-inverse-foreground/50">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-inverse-foreground/75 transition-colors hover:text-inverse-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label text-inverse-foreground/50">Services</h2>
            <ul className="mt-5 space-y-3">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-inverse-foreground/75 transition-colors hover:text-inverse-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="label inline-flex text-inverse-foreground/75 transition-colors hover:text-inverse-foreground"
                >
                  All nine services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="label text-inverse-foreground/50">Contact</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-inverse-foreground/75 transition-colors hover:text-inverse-foreground"
                >
                  Contact page
                </Link>
              </li>
              <li className="text-sm text-inverse-foreground/55">
                Working worldwide
              </li>
            </ul>

            {socials.length > 0 ? (
              <>
                <h2 className="label mt-8 text-inverse-foreground/50">
                  Elsewhere
                </h2>
                <ul className="mt-5 space-y-3">
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-inverse-foreground/75 transition-colors hover:text-inverse-foreground"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-inverse-foreground/15 pt-6 pb-32 sm:flex-row sm:items-center sm:justify-between sm:pb-40">
          <p className="label text-inverse-foreground/50">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="label text-inverse-foreground/50">
            Independent / working worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
