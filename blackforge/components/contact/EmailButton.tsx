"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { ArrowIcon, buttonStyles } from "@/components/ui/Button";

const subject = "Project enquiry — BlackForge";

const messageTemplate = `Hello BlackForge,

What we are working on:

What we need help with:

Timeline:

How you heard about us:

Thanks,
`;

export function EmailButton({
  size = "lg",
  className,
}: {
  size?: "md" | "lg";
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(messageTemplate);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (!site.email) {
    return (
      <div className={className}>
        <button
          type="button"
          disabled
          className={buttonStyles("primary", size)}
          aria-describedby="email-pending"
        >
          Email us
        </button>
        <p
          id="email-pending"
          className="body-sm mt-3 max-w-sm text-muted"
        >
          The contact address is being set up. Please check back shortly.
        </p>
        <button
          type="button"
          onClick={copyTemplate}
          className={buttonStyles("outline", "md", "mt-3")}
        >
          {copied ? "Template copied" : "Copy the message template"}
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? "Message template copied to the clipboard." : ""}
        </span>
      </div>
    );
  }

  const href = `mailto:${site.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(messageTemplate)}`;

  return (
    <a href={href} className={buttonStyles("primary", size, className)}>
      Email us <ArrowIcon />
    </a>
  );
}
