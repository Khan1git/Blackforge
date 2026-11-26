import type { Metadata } from "next";
import { EmailButton } from "@/components/contact/EmailButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a project with BlackForge. No form, no gatekeeping: one email, read by the people who would do the work.",
  path: "/contact",
});

const inclusions = [
  "What you are trying to build or fix",
  "What is at stake, or what happens if it is not solved",
  "Any deadline, launch date, or external commitment",
  "The best way to reach you",
  "Links to an existing site, product, or repository",
];

const faqs = [
  {
    question: "What happens after I email you?",
    answer:
      "You get a reply from one of the people who would work on the project, usually within one business day. If there is a fit, we suggest a short call and send a written summary of what we heard.",
  },
  {
    question: "How quickly will you reply?",
    answer: `Within ${site.responseTime} for most enquiries. If you have a deadline, put it in the subject line and we will prioritise it.`,
  },
  {
    question: "Do you work across time zones?",
    answer:
      "Yes. We work with clients worldwide and agree on overlapping hours for calls and decisions. Most collaboration happens in writing, which makes time zones less of a problem.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes, if you need one before sharing details. Send yours with the first message or ask us to use ours. We keep client material confidential by default.",
  },
  {
    question: "Can you take over an existing codebase?",
    answer:
      "Often. We start with a short technical review so we can tell you what is worth keeping, what will slow you down, and what a realistic handover would take.",
  },
  {
    question: "Do you work with small teams?",
    answer:
      "Yes. Some of our best work has been with teams of two or three people who needed a specific problem solved well. We will tell you if the scope is too small to justify the engagement.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="07"
        label="Contact"
        title={
          <>
            Start a <span className="text-accent">conversation</span>.
          </>
        }
        description="No form. One email, read by the people who would do the work."
      />

      <div className="shell py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="border border-line bg-surface p-6 md:p-8">
              <p className="label text-accent">Start here</p>
              <h2 className="display display-md mt-4 max-w-[14ch]">
                Tell us what you are trying to build.
              </h2>
              <p className="body-sm mt-4 max-w-prose text-muted">
                A short message is enough. A clear problem, why it matters, and
                the timeline.
              </p>
              <EmailButton className="mt-6" />
              <p className="label mt-4 text-muted">
                Replies within {site.responseTime}
              </p>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div className="border-t border-line pt-5">
                <h3 className="label text-ink">What to include</h3>
                <ul className="mt-4 space-y-2">
                  {inclusions.map((item) => (
                    <li
                      key={item}
                      className="body-sm flex gap-3 text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.65em] h-px w-3 shrink-0 bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-line pt-5">
                <h3 className="label text-ink">What we will not do</h3>
                <p className="body-sm mt-3 text-muted">
                  Send a generic capabilities deck, promise a timeline before
                  understanding the work, or take on a project we cannot staff
                  properly.
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-line bg-surface p-6 md:p-8">
              <h2 className="label text-accent">Questions</h2>
              <div className="mt-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="faq-item border-b border-line py-4 last:border-b-0"
                  >
                    <summary className="flex items-center justify-between gap-4 text-sm font-medium">
                      <span>{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className="faq-icon text-xl leading-none text-accent transition-transform duration-300"
                      >
                        +
                      </span>
                    </summary>
                    <p className="body-sm mt-3 text-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
