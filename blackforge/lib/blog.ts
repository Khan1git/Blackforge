import fs from "node:fs";
import path from "node:path";
import type { BlogBlock, BlogPost, BlogPostFile } from "@/lib/types";

const blogDirectory = path.join(process.cwd(), "content", "blog");

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function blockWordCount(block: BlogBlock): number {
  switch (block.type) {
    case "paragraph":
    case "heading":
      return countWords(block.text);
    case "list":
      return block.items.reduce((total, item) => total + countWords(item), 0);
    case "quote":
      return countWords(block.text);
  }
}

function readingTime(blocks: BlogBlock[]): number {
  const words = blocks.reduce((total, block) => total + blockWordCount(block), 0);
  return Math.max(1, Math.ceil(words / 220));
}

function readPostFile(fileName: string): BlogPost {
  const raw = fs.readFileSync(path.join(blogDirectory, fileName), "utf8");
  const parsed = JSON.parse(raw) as BlogPostFile;

  if (!parsed.slug || !parsed.title || !Array.isArray(parsed.blocks)) {
    throw new Error(`Blog post ${fileName} is missing required fields.`);
  }

  return {
    ...parsed,
    readingTime: readingTime(parsed.blocks),
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) return [];

  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".json"))
    .map(readPostFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  const others = getAllPosts().filter((entry) => entry.slug !== post.slug);
  const sameCategory = others.filter((entry) => entry.category === post.category);
  const rest = others.filter((entry) => entry.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getAdjacentPosts(slug: string): {
  newer?: BlogPost;
  older?: BlogPost;
} {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return {};
  return {
    newer: index > 0 ? posts[index - 1] : undefined,
    older: index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}
