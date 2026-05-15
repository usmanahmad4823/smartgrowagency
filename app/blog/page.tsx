import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/lib/queries";
import { BlogFilters } from "@/components/blog/BlogFilters";

export const metadata: Metadata = {
  title: "Insights on growth, automation, and creative execution",
  description:
    "Read Smart Grow Agency articles on experimentation, SEO, lifecycle email, AI readiness, and paid media—written for operators who need signal.",
};

const categories = ["All", "Growth", "Automation", "Product", "Media"] as const;

type Props = { searchParams: Promise<{ category?: string }> };

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const all = categories as readonly string[];
  const active =
    category && all.includes(category) ? (category as (typeof categories)[number]) : "All";
  const posts = await getBlogPosts(undefined, active === "All" ? null : active);

  return (
    <div className="bg-[var(--bg-primary)]">
      <section className="section-y border-b border-[var(--border-subtle)]">
        <div className="container-content max-w-4xl space-y-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">BLOG</p>
          <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-[-0.022em] md:text-[56px]">
            Insights you can ship from this week.
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
            Practical frameworks from launches we have led—no fluff, no jargon walls. Filter by topic and dive in.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-content space-y-8">
          <BlogFilters categories={categories} active={active} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="glass-card overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">
                    {post.category}
                  </p>
                  <h2 className="font-display text-[17px] font-semibold leading-snug">{post.title}</h2>
                  <p className="text-[13px] text-[var(--text-secondary)]">{post.excerpt}</p>
                  <div className="text-[11px] text-[var(--text-tertiary)]">
                    {post.readTimeMins} min read ·{" "}
                    {post.publishedAt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {posts.length === 0 ? (
            <p className="text-center text-[13px] text-[var(--text-secondary)]">
              No articles in this category yet.{" "}
              <Link className="text-[var(--accent-blue)]" href="/blog">
                View all posts
              </Link>
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
