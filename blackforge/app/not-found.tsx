import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="shell relative flex min-h-[70vh] flex-col justify-center overflow-hidden py-20">
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none font-display text-[18rem] font-semibold leading-none tracking-[-0.08em] lg:block"
      >
        404
      </span>
      <p className="label text-accent">404 / Not found</p>
      <h1 className="display display-xl mt-6 max-w-[12ch]">
        This page has been decommissioned.
      </h1>
      <p className="body-lg mt-6 max-w-md text-muted">
        The address may have changed, or the page was never here. Start from
        the homepage or look through the work.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/projects" variant="outline">
          See the work
        </ButtonLink>
      </div>
    </div>
  );
}
