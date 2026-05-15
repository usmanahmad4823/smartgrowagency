import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

export function MdxContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: "github-dark",
              },
            ],
          ],
        },
      }}
      components={{
        h2: (props) => <h2 className="font-display mt-8 text-2xl font-semibold tracking-[-0.02em] md:text-3xl" {...props} />,
        h3: (props) => <h3 className="font-display mt-6 text-xl font-semibold tracking-[-0.015em] md:text-2xl" {...props} />,
        p: (props) => <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-secondary)]" {...props} />,
        ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--text-secondary)]" {...props} />,
        ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-[var(--text-secondary)]" {...props} />,
        a: (props) => (
          <a className="text-[var(--accent-blue)] underline-offset-4 hover:underline" {...props} />
        ),
      }}
    />
  );
}
