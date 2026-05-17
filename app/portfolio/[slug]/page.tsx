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

  const themeColors = [
    "#2997ff", // Blue
    "#30d158", // Emerald
    "#ff9f0a", // Orange
    "#bf5af2", // Purple
    "#ff375f", // Pink
    "#64d2ff"  // Cyan
  ];

  return (
    <article className="glass-panel">
      {/* Top Banner & Title */}
      <section className="border-b border-[var(--border-subtle)] relative overflow-hidden">
        {/* Soft Background Orbs */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[60px]" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[60px]" />

        <div className="container-content section-y space-y-6 relative z-10">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
            {project.category}
          </p>
          <h1 className="font-display text-[36px] font-bold leading-[1.05] tracking-tight text-[var(--text-primary)] md:text-[52px]">
            {project.title}
          </h1>
          {metrics.length ? (
            <div className="grid gap-4 sm:grid-cols-3 pt-4">
              {metrics.map((m, idx) => {
                const color = themeColors[idx % themeColors.length];

                return (
                  <div 
                    key={m.label} 
                    className="glass-card glass-3d-hover relative overflow-hidden p-5 border transition-all duration-300"
                    style={{
                      backgroundColor: `${color}05`,
                      borderColor: `${color}25`
                    }}
                  >
                    {/* Top-Right Glow */}
                    <div className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full opacity-20 blur-[15px]" style={{ backgroundColor: color }} />
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-tertiary)]">{m.label}</p>
                    <p className="mt-2 font-display text-[26px] font-bold tracking-tight" style={{ color: color }}>{m.value}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image src={project.image} alt={project.title} fill priority className="object-cover" sizes="100vw" />
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-y border-b border-white/5">
        <div className="container-content grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-display text-[24px] font-bold tracking-tight text-[var(--text-primary)]">Challenge</h2>
            <p className="text-[13.5px] leading-relaxed text-[var(--text-secondary)] font-medium">{project.challenge}</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-[24px] font-bold tracking-tight text-[var(--text-primary)]">Solution</h2>
            <p className="text-[13.5px] leading-relaxed text-[var(--text-secondary)] font-medium">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-y glass-panel-secondary border-b border-white/5">
        <div className="container-content space-y-4">
          <h2 className="font-display text-[32px] font-bold tracking-tight text-[var(--text-primary)]">Results</h2>
          <p className="max-w-4xl text-[16px] leading-relaxed text-[var(--text-secondary)] font-medium">{project.results}</p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-y border-b border-white/5">
        <div className="container-content space-y-5">
          <h2 className="font-display text-[28px] font-bold tracking-tight text-[var(--text-primary)]">Tech stack</h2>
          <div className="flex flex-wrap gap-2.5">
            {stack.map((item, idx) => {
              const color = themeColors[idx % themeColors.length];

              return (
                <span 
                  key={item} 
                  className="rounded-full border px-4 py-1.5 text-[12.5px] font-bold transition-all duration-300"
                  style={{
                    backgroundColor: `${color}05`,
                    borderColor: `${color}25`,
                    color: color
                  }}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Voice */}
      {project.testimonial ? (
        <section className="section-y glass-panel-secondary border-b border-white/5">
          <div className="container-content max-w-3xl space-y-4">
            <h2 className="font-display text-[32px] font-bold tracking-tight text-[var(--text-primary)]">Client voice</h2>
            <p className="text-[16px] leading-relaxed text-[var(--text-primary)] font-semibold italic">“{project.testimonial}”</p>
          </div>
        </section>
      ) : null}

      {/* Action Footer */}
      <section className="section-y">
        <div 
          className="container-content flex flex-col items-start justify-between gap-6 rounded-[24px] border glass-panel-secondary p-8 md:p-10 md:flex-row md:items-center relative overflow-hidden shadow-md"
          style={{
            borderColor: "rgba(41, 151, 255, 0.25)",
            backgroundColor: "rgba(41, 151, 255, 0.05)"
          }}
        >
          {/* Subtle Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2997ff]/10 blur-[60px]" />
          
          <div className="relative z-10">
            <p className="font-display text-[22px] font-bold tracking-tight text-[var(--text-primary)]">Want a roadmap like this?</p>
            <p className="mt-2 text-[14.5px] font-semibold text-[var(--text-secondary)]">
              Tell us what you are launching—we will respond within 24 hours.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Button href="/contact" variant="primary" className="px-8 py-3 text-[12px] font-bold shadow-lg">
              Get Free Proposal
            </Button>
          </div>
        </div>
        <div className="container-content mt-8">
          <Link href="/portfolio" className="text-[14.5px] font-bold text-[var(--accent-blue)] hover:opacity-85 transition-opacity">
            ← Back to portfolio
          </Link>
        </div>
      </section>
    </article>
  );
}
