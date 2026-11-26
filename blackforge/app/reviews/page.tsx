import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Client reviews",
  description:
    "BlackForge publishes named client reviews when they are available. Ask for references from recent work in local news, mobile products, and publishing.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        index="03"
        label="Client reviews"
        title={
          <>
            Proof, not <span className="text-accent">promises</span>.
          </>
        }
        description="We publish named reviews when we have them. Until then, ask us for references."
      />

      <div className="shell py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="display display-md max-w-[15ch]">
              Ask us for references.
            </p>
            <p className="body-lg mt-6 max-w-prose text-muted">
              We are collecting written reviews from recent clients. In the
              meantime, we are happy to put you in touch with people who have
              used the work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/projects">See the work</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Ask for references
              </ButtonLink>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-line bg-surface p-6 md:p-8">
              <p className="label text-accent">Direct contact</p>
              <ButtonLink href="/contact" size="md" className="mt-4">
                Contact us
              </ButtonLink>
              <p className="body-sm mt-4 text-muted">
                Replies within {site.responseTime}.
              </p>
            </div>

            <div className="mt-6 border-t border-line pt-5">
              <p className="label text-muted">What we will publish</p>
              <p className="body-sm mt-3 text-muted">
                Named clients, real projects, and the scope behind the quote.
                No anonymous praise, no invented logos.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
