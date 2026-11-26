import type { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/ui/PageHeader";
import { Tag } from "@/components/ui/Tag";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Journal",
  description:
    "Notes from BlackForge on security, engineering, design, search, automation, and the practical side of running digital systems.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const [lead, ...rest] = posts;
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <>
      <PageHeader
        index="06"
        label="Journal"
        title={
          <>
            Notes from the <span className="text-accent">work</span>.
          </>
        }
        description="Practical notes on security, engineering, design, and the unglamorous parts of running digital systems."
      />

      <div className="shell py-14 md:py-20">
        <div className="flex flex-wrap items-center gap-3 border-b border-line pb-6">
          <span className="label mr-1 text-muted">Topics</span>
          {categories.map((category) => (
            <Tag key={category}>{category}</Tag>
          ))}
        </div>

        {lead ? (
          <Reveal className="mt-10 border-t border-line pt-8">
            <PostCard post={lead} featured />
          </Reveal>
        ) : (
          <p className="body-lg mt-10 text-muted">
            The journal is being prepared. Check back soon.
          </p>
        )}

        {rest.length > 0 ? (
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {rest.map((post, index) => (
              <Reveal
                key={post.slug}
                delay={index * 80}
                className="border-t border-line pt-6"
              >
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>

      <CtaBand />
    </>
  );
}
