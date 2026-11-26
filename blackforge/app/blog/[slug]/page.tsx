import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostBody } from "@/components/blog/PostBody";
import { PostCard } from "@/components/blog/PostCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { site } from "@/data/site";
import {
  getAdjacentPosts,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

// Known posts are prerendered; unknown slugs wait for the render and return a
// real 404 instead of a streamed App Shell with a 200 status.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post, 2);
  const { newer, older } = getAdjacentPosts(post.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <article>
        <header className="border-b border-line">
          <div className="shell">
            <div className="flex items-center justify-between gap-6 border-b border-line py-5">
              <Link href="/blog" className="label link-underline text-muted">
                ← Journal
              </Link>
              <span className="label text-muted">
                {post.category} / {post.readingTime} min read
              </span>
            </div>

            <div className="grid gap-8 py-12 md:py-16 lg:grid-cols-12">
              <div className="lg:col-span-9">
                <p className="label text-accent">{formatDate(post.date)}</p>
                <h1 className="display display-lg mt-5 max-w-[18ch]">
                  {post.title}
                </h1>
                <p className="body-lg mt-6 max-w-2xl text-muted">
                  {post.excerpt}
                </p>
              </div>
              <div className="lg:col-span-3 lg:pt-2">
                <p className="label text-muted">Written by</p>
                <p className="mt-2 text-sm">{post.author}</p>
                <p className="label mt-6 text-muted">Category</p>
                <p className="mt-2 text-sm">{post.category}</p>
                <p className="label mt-6 text-muted">Reading time</p>
                <p className="mt-2 text-sm">{post.readingTime} minutes</p>
              </div>
            </div>
          </div>
        </header>

        <div className="shell py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <p className="label text-muted">Published</p>
                <p className="mt-2 text-sm">{formatDate(post.date)}</p>
                <p className="label mt-6 text-muted">Author</p>
                <p className="mt-2 text-sm">{post.author}</p>
                <p className="label mt-6 text-muted">Category</p>
                <p className="mt-2 text-sm">{post.category}</p>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <PostBody blocks={post.blocks} />
            </div>
          </div>

          {older || newer ? (
            <div className="mt-16 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
              {older ? (
                <Link href={`/blog/${older.slug}`} className="group block">
                  <span className="label text-muted">Older</span>
                  <p className="title-md mt-2 max-w-[28ch]">{older.title}</p>
                </Link>
              ) : (
                <div />
              )}
              {newer ? (
                <Link
                  href={`/blog/${newer.slug}`}
                  className="group block sm:text-right"
                >
                  <span className="label text-muted">Newer</span>
                  <p className="title-md mt-2 max-w-[28ch] sm:ml-auto">
                    {newer.title}
                  </p>
                </Link>
              ) : null}
            </div>
          ) : null}

          {related.length > 0 ? (
            <section className="mt-16 border-t border-line pt-10">
              <h2 className="label text-muted">Related reading</h2>
              <div className="mt-6 grid gap-10 md:grid-cols-2">
                {related.map((entry) => (
                  <PostCard key={entry.slug} post={entry} heading="h3" />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
