import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = `${title} — ${site.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
