import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { SectionHeader } from "@/components/ui/SectionHeader";

async function getPosts() {
  try {
    return await prisma.blogPost.findMany({
      orderBy: { publishedAt: "desc" },
      take: 3,
    });
  } catch {
    return [];
  }
}

export async function BlogPreview() {
  const posts = await getPosts();
  if (!posts.length) {
    return null;
  }

  return (
    <section className="section-y bg-[var(--bg-primary)]">
      <div className="container-content">
        <SectionHeader
          eyebrow="INSIGHTS"
          title="Insights & Resources"
          description="Practical guides on growth, automation, and creative execution—written for operators who need signal, not noise."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="glass-card overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1">
              <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-blue)]">
                    {post.category}
                  </p>
                  <h3 className="font-display text-[17px] font-semibold leading-snug tracking-[-0.015em]">{post.title}</h3>
                  <div className="flex items-center gap-3 text-[11px] text-[var(--text-tertiary)]">
                    <span>{post.readTimeMins} min read</span>
                    <span>·</span>
                    <time dateTime={post.publishedAt.toISOString()}>
                      {post.publishedAt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </time>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border-subtle)] px-6 py-3 text-[12px] font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)]"
          >
            Read All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
