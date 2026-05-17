import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/queries";
import { prisma } from "@/lib/db";
import { MdxContent } from "@/components/mdx/MdxContent";

export async function generateStaticParams() {
  try {
    const posts = await prisma.blogPost.findMany({ select: { slug: true } });
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt.toISOString(),
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="glass-panel">
      <header className="border-b border-[var(--border-subtle)]">
        <div className="container-content section-y max-w-3xl space-y-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">{post.category}</p>
          <h1 className="font-display text-[36px] font-bold leading-[1.05] tracking-[-0.022em] md:text-[48px]">
            {post.title}
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">{post.excerpt}</p>
          <div className="text-[12px] text-[var(--text-tertiary)]">
            {post.readTimeMins} min read · {post.publishedAt.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </div>
        </div>
      </header>
      <div className="container-content section-y max-w-3xl">
        <div className="prose-mdx">
          <MdxContent source={post.contentMdx} />
        </div>
        <div className="mt-12 rounded-[18px] border border-[var(--border-subtle)] glass-panel-secondary p-6 text-[13px] text-[var(--text-secondary)]">
          Want this rigor on your roadmap?{" "}
          <Link className="font-semibold text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]" href="/contact">
            Request a proposal →
          </Link>
        </div>
        <div className="mt-6">
          <Link href="/blog" className="text-[13px] text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]">
            ← Back to articles
          </Link>
        </div>
      </div>
    </article>
  );
}
