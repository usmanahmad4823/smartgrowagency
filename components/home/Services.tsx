"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { containerVariant, fadeUpItem } from "@/lib/motion";
import { services } from "@/lib/services";

export function ServicesSection() {
  return (
    <section id="services" className="section-y bg-[var(--bg-primary)]">
      <div className="container-content">
        <SectionHeader
          eyebrow="WHAT WE DO"
          title="Every service your brand needs — under one roof."
          description="You stop stitching vendors together. One accountable team ships the site, the story, the systems, and the spend—tied to revenue you can see."
        />

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={fadeUpItem}>
              <Card className="group h-full p-7 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{ backgroundColor: service.accent, opacity: 0.85 }}
                    aria-hidden
                  />
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[var(--text-primary)]">
                      <service.icon className="h-6 w-6 text-[var(--text-secondary)]" aria-hidden />
                      <h3 className="font-display text-[19px] font-semibold leading-[1.2] tracking-[-0.015em] md:text-[22px]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)]">{service.short}</p>
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-2 text-[12px] font-semibold text-[var(--accent-blue)] transition-colors hover:text-[var(--accent-blue-hover)]"
                    >
                      Learn more
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border-subtle)] px-6 py-3 text-[12px] font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)]"
          >
            Explore the full services playbook →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
