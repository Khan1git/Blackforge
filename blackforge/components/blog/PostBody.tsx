import type { BlogBlock } from "@/lib/types";

export function PostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="body-lg text-ink/90">
                {block.text}
              </p>
            );

          case "heading":
            return (
              <h2 key={index} className="title-lg pt-6">
                {block.text}
              </h2>
            );

          case "list": {
            const List = block.ordered ? "ol" : "ul";
            return (
              <List
                key={index}
                className={
                  block.ordered
                    ? "list-decimal space-y-2 pl-5 marker:text-accent"
                    : "list-disc space-y-2 pl-5 marker:text-accent"
                }
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-base leading-relaxed">
                    {item}
                  </li>
                ))}
              </List>
            );
          }

          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-2 border-accent py-1 pl-6"
              >
                <p className="font-display text-2xl font-medium leading-snug tracking-[-0.02em]">
                  {block.text}
                </p>
                {block.attribution ? (
                  <footer className="label mt-3 text-muted">
                    {block.attribution}
                  </footer>
                ) : null}
              </blockquote>
            );
        }
      })}
    </div>
  );
}
