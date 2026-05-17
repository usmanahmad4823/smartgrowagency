"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@prisma/client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUpVariant } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

export function PortfolioPreview({ projects }: { projects: Project[] }) {
  const cardColors = [
    "#2997ff", // Blue
    "#30d158", // Emerald
    "#ff9f0a", // Orange
    "#bf5af2", // Purple
    "#ff375f"  // Pink
  ];

  return (
    <section className="section-y glass-panel-secondary">
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
          {projects.map((project, idx) => {
            const color = cardColors[idx % cardColors.length];

            return (
              <motion.article
                key={project.id}
                variants={fadeUpVariant}
                className="group relative overflow-hidden rounded-[18px] border glass-3d-hover transition-all duration-300"
                style={{
                  backgroundColor: `${color}05`,
                  borderColor: `${color}25`
                }}
              >
                {/* Background Soft Glow Orb */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-20 blur-[20px]" style={{ backgroundColor: color }} />

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
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/60" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: color }}>
                        {project.category}
                      </p>
                      <p className="font-display text-[17px] font-bold text-white mt-0.5">{project.title}</p>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 flex justify-center"
        >
          <Button href="/portfolio" variant="primary" className="px-8 py-3 text-[12px] font-bold">
            View All Work →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
