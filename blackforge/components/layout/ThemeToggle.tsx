"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 15.2A8.4 8.4 0 1 1 8.8 4 6.7 6.7 0 0 0 20 15.2Z" />
    </svg>
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = (event: MediaQueryListEvent) => {
      try {
        if (window.localStorage.getItem("theme")) return;
      } catch {
        // Storage can be unavailable in private or restricted contexts.
      }
      const theme = event.matches ? "dark" : "light";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    root.style.colorScheme = next;

    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // The theme still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center border border-transparent text-ink transition-colors hover:border-line hover:bg-surface",
        className,
      )}
    >
      <SunIcon className="theme-icon-sun h-4 w-4" />
      <MoonIcon className="theme-icon-moon h-4 w-4" />
    </button>
  );
}
