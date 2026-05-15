import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/queries";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/Button";

type Metric = { label: string; value: string };

function parseMetrics(raw: string | null): Metric[] {
  if (!raw) return [];
  try {
    const data = JSON.parse(raw) as unknown;
    if (!Array.isArray(data)) return [];
    return data
      .map((item) => {
        if (!item || typeof item !== "object") return null;
        const record = item as Record<string, unknown>;
        const label = record.label;
        const value = record.value;
        if (typeof label !== "string" || typeof value !== "string") return null;
        return { label, value };
      })
      .filter((m): m is Metric => Boolean(m));
  } catch {
    return [];
  }
}

function parseStack(raw: string): string[] {
  try {
    const tech = JSON.parse(raw) as unknown;
    return Array.isArray(tech) ? tech.filter((t): t is string => typeof t === "string") : [];
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  try {
    const projects = await prisma.project.findMany({ select: { slug: true } });
    return projects.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} case study`,
    description: project.challenge.slice(0, 150),
    openGraph: {
      title: `${project.title} — Smart Grow Agency`,
      description: project.challenge.slice(0, 180),
      images: [{ url: project.image }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const metrics = parseMetrics(project.metrics);
  const stack = parseStack(project.techStack);

  return (
    <article className="bg-[var(--bg-primary)]">
      <section className="border-b border-[var(--border-subtle)]">
        <div className="container-content section-y space-y-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
            {project.category}
          </p>
          <h1 className="font-display text-[36px] font-bold leading-[1.05] tracking-[-0.022em] md:text-[52px]">
            {project.title}
          </h1>
          {metrics.length ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.label} className="glass-card p-4">
                  <p className="text-[13px] uppercase tracking-[0.14em] text-[var(--text-tertiary)]">{m.label}</p>
                  <p className="mt-2 font-display text-[22px] font-semibold text-[var(--text-primary)]">{m.value}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image src={project.image} alt={project.title} fill priority className="object-cover" sizes="100vw" />
        </div>
      </section>

      <section className="section-y">
        <div className="container-content grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-display text-[24px] font-semibold tracking-[-0.02em]">Challenge</h2>
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">{project.challenge}</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-[24px] font-semibold tracking-[-0.02em]">Solution</h2>
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">{project.solution}</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--bg-secondary)]">
        <div className="container-content space-y-4">
          <h2 className="font-display text-[32px] font-semibold tracking-[-0.02em]">Results</h2>
          <p className="max-w-3xl text-[17px] leading-relaxed text-[var(--text-secondary)]">{project.results}</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-content space-y-4">
          <h2 className="font-display text-[32px] font-semibold tracking-[-0.02em]">Tech stack</h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-[14px] text-[var(--text-secondary)]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {project.testimonial ? (
        <section className="section-y bg-[var(--bg-secondary)]">
          <div className="container-content max-w-3xl space-y-4">
            <h2 className="font-display text-[32px] font-semibold tracking-[-0.02em]">Client voice</h2>
            <p className="text-[15px] leading-relaxed text-[var(--text-primary)]">“{project.testimonial}”</p>
          </div>
        </section>
      ) : null}

      <section className="section-y">
        <div className="container-content flex flex-col items-start justify-between gap-4 rounded-[20px] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-[22px] font-semibold tracking-[-0.02em]">Want a roadmap like this?</p>
            <p className="mt-2 text-[16px] text-[var(--text-secondary)]">
              Tell us what you are launching—we will respond within 24 hours.
            </p>
          </div>
          <Button href="/contact" variant="primary">
            Get Free Proposal
          </Button>
        </div>
        <div className="container-content mt-6">
          <Link href="/portfolio" className="text-[15px] text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]">
            ← Back to portfolio
          </Link>
        </div>
      </section>
    </article>
  );
}
