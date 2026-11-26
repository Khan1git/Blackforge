import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { ArrowIcon } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

export function PostCard({
  post,
  featured = false,
  heading = "h2",
}: {
  post: BlogPost;
  featured?: boolean;
  heading?: "h2" | "h3";
}) {
  const Heading = heading;

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="flex flex-wrap items-center gap-3">
        <Tag>{post.category}</Tag>
        <span className="label text-muted">{formatDate(post.date)}</span>
        <span className="label text-muted">{post.readingTime} min read</span>
      </div>

      <Heading
        className={
          featured
            ? "display display-md mt-6 max-w-[20ch]"
            : "title-lg mt-5 max-w-[24ch]"
        }
      >
        {post.title}
      </Heading>

      <p className="body-sm mt-4 max-w-prose text-muted">{post.excerpt}</p>

      <span className="label mt-6 inline-flex items-center gap-2 text-ink">
        Read the article <ArrowIcon />
      </span>
    </Link>
  );
}
