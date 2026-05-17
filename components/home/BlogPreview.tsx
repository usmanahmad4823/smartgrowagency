import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

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

  const cardColors = [
    "#2997ff", // Blue
    "#30d158", // Emerald
    "#ff9f0a"  // Orange
  ];

  return (
    <section className="section-y glass-panel">
      <div className="container-content">
        <SectionHeader
          eyebrow="INSIGHTS"
          title="Insights & Resources"
          description="Practical guides on growth, automation, and creative execution—written for operators who need signal, not noise."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, idx) => {
            const color = cardColors[idx % cardColors.length];

            return (
              <article 
                key={post.id} 
                className="glass-card glass-3d-hover relative overflow-hidden p-0 transition-all duration-300 border"
                style={{
                  backgroundColor: `${color}05`,
                  borderColor: `${color}25`
                }}
              >
                {/* Background Soft Glow Orb */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-20 blur-[20px]" style={{ backgroundColor: color }} />

                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col relative z-10">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="space-y-3.5 p-6">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: color }}>
                      {post.category}
                    </p>
                    <h3 className="font-display text-[17px] font-bold leading-snug tracking-tight text-[var(--text-primary)]">{post.title}</h3>
                    <div className="flex items-center gap-3 text-[11px] font-semibold text-[var(--text-tertiary)] pt-1">
                      <span>{post.readTimeMins} min read</span>
                      <span>·</span>
                      <time dateTime={post.publishedAt.toISOString()}>
                        {post.publishedAt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </time>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/blog" variant="primary" className="px-8 py-3 text-[12px] font-bold">
            Read All Articles →
          </Button>
        </div>
      </div>
    </section>
  );
}
