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

  return (
    <div className="bg-[var(--bg-primary)]">
      <section className="section-y border-b border-[var(--border-subtle)]">
        <div className="container-content max-w-4xl space-y-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">PORTFOLIO</p>
          <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-[-0.022em] text-[var(--text-primary)] md:text-[56px]">
            Proof you can feel in the numbers.
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
            Filter by discipline, then dive into the challenge, the solution, and the results. Every engagement is built
            to answer one question: did we move the metric that matters for your business?
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-content space-y-8">
          <PortfolioFilters categories={categories} active={active} />
          <div className="columns-1 gap-6 md:columns-2">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="mb-6 block break-inside-avoid overflow-hidden rounded-[18px] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                    {project.category}
                  </p>
                  <p className="font-display text-[17px] font-semibold">{project.title}</p>
                  <p className="text-[12px] text-[var(--accent-blue)]">View case study →</p>
                </div>
              </Link>
            ))}
          </div>
          {projects.length === 0 ? (
            <p className="text-center text-[13px] text-[var(--text-secondary)]">
              No projects match this filter yet.{" "}
              <Link className="text-[var(--accent-blue)]" href="/portfolio">
                Reset filters
              </Link>
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
