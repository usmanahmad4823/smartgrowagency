"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@prisma/client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUpVariant } from "@/lib/motion";

export function PortfolioPreview({ projects }: { projects: Project[] }) {
  return (
    <section className="section-y bg-[var(--bg-secondary)]">
      <div className="container-content">
        <SectionHeader
          eyebrow="PORTFOLIO"
          title="Our recent work"
          description="Real launches with measurable outcomes—crafted for teams who care about craft and conversion."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUpVariant}
              className="group relative overflow-hidden rounded-[18px] border border-[var(--border-subtle)] bg-[var(--bg-tertiary)]"
            >
              <Link href={`/portfolio/${project.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/55" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--text-tertiary)]">{project.category}</p>
                    <p className="font-display text-[17px] font-semibold text-white">{project.title}</p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent-blue)] px-7 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-[var(--accent-blue-hover)]"
          >
            View All Work →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
