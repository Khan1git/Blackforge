"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpenPath(null);
    };

    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstLink = panelRef.current?.querySelector<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-50 h-20 border-b border-t-2 border-line border-t-accent bg-bg">
      <div className="shell flex h-full items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "link-underline label text-muted transition-colors hover:text-ink",
                    isActive(item.href) && "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <ButtonLink
            href="/contact"
            size="sm"
            withArrow={false}
            className="hidden md:inline-flex"
            onClick={() => setOpenPath(null)}
          >
            Contact us
          </ButtonLink>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() =>
              setOpenPath((current) => (current === pathname ? null : pathname))
            }
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-1 inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-transparent transition-colors hover:border-line hover:bg-surface lg:hidden"
          >
            <span
              className={cn(
                "block h-px w-5 bg-ink transition-transform duration-300",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-ink transition-transform duration-300",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto border-t border-line bg-bg lg:hidden"
        >
          <div className="shell flex min-h-full flex-col py-8">
            <nav aria-label="Mobile">
              <ul>
                {site.nav.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpenPath(null)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "group flex items-center gap-4 border-b border-line py-5",
                        isActive(item.href) ? "text-accent" : "text-ink",
                      )}
                    >
                      <span className="label w-8 text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[2.1rem] font-semibold leading-none tracking-[-0.04em]">
                        {item.label}
                      </span>
                      <ArrowIcon className="ml-auto" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-10">
              <ButtonLink
                href="/contact"
                className="w-full"
                size="lg"
                onClick={() => setOpenPath(null)}
              >
                Start a project
              </ButtonLink>
              <p className="label mt-6 text-muted">
                Independent / working worldwide
              </p>
              <p className="label mt-2 text-muted">
                {site.tagline}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
