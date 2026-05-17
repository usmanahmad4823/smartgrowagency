import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/queries";
import { PortfolioFilters } from "@/components/portfolio/PortfolioFilters";

export const metadata: Metadata = {
  title: "Portfolio — launches with measurable lift",
  description:
    "Explore Smart Grow Agency case studies across web, brand, growth, and automation—each tied to metrics you can brief your board on.",
};

const categories = ["All", "Web", "Growth", "Brand", "Automation"] as const;

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function PortfolioPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const all = categories as readonly string[];
  const active =
    category && all.includes(category) ? (category as (typeof categories)[number]) : "All";
  const projects = await getAllProjects(active === "All" ? null : active);

  const cardColors = [
    "#2997ff", // Blue
    "#30d158", // Emerald
    "#ff9f0a", // Orange
    "#bf5af2", // Purple
    "#ff375f", // Pink
    "#64d2ff"  // Cyan
  ];

  return (
    <div className="glass-panel">
      {/* Portfolio Hero */}
      <section className="section-y border-b border-[var(--border-subtle)] relative overflow-hidden">
        {/* Soft Background Orbs */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[60px]" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[60px]" />

        <div className="container-content max-w-4xl space-y-6 relative z-10">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">PORTFOLIO</p>
          <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-tight text-[var(--text-primary)] md:text-[56px]">
            Proof you can feel in the numbers.
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] font-medium">
            Filter by discipline, then dive into the challenge, the solution, and the results. Every engagement is built
            to answer one question: did we move the metric that matters for your business?
          </p>
        </div>
      </section>

      {/* Grid Portfolio */}
      <section className="section-y">
        <div className="container-content space-y-10">
          <PortfolioFilters categories={categories} active={active} />
          
          <div className="columns-1 gap-6 md:columns-2">
            {projects.map((project, idx) => {
              const color = cardColors[idx % cardColors.length];

              return (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}`}
                  className="mb-6 block break-inside-avoid overflow-hidden rounded-[18px] border glass-3d-hover relative transition-all duration-300"
                  style={{
                    backgroundColor: `${color}05`,
                    borderColor: `${color}25`
                  }}
                >
                  {/* Subtle Background Glow */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-20 blur-[20px]" style={{ backgroundColor: color }} />

                  <div className="relative aspect-[4/3] w-full relative z-10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="space-y-2.5 p-6 relative z-10">
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: color }}>
                      {project.category}
                    </p>
                    <p className="font-display text-[18px] font-bold text-[var(--text-primary)]">{project.title}</p>
                    <p className="text-[12px] font-bold uppercase tracking-wide pt-1" style={{ color: color }}>
                      View case study →
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {projects.length === 0 ? (
            <p className="text-center text-[13px] font-bold text-[var(--text-secondary)]">
              No projects match this filter yet.{" "}
              <Link className="text-[var(--accent-blue)] underline hover:opacity-80" href="/portfolio">
                Reset filters
              </Link>
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
