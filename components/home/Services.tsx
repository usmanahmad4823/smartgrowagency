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
    <section id="services" className="section-y glass-panel">
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
              <Card 
                className="glass-3d-hover relative overflow-hidden group h-full p-7"
                style={{
                  backgroundColor: `${service.accent}08`, 
                  borderColor: `${service.accent}30`
                }}
              >
                {/* Massive Colorful Background Glow */}
                <div 
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-40 blur-[50px] transition-all duration-700 group-hover:scale-[1.8] group-hover:opacity-70"
                  style={{ backgroundColor: service.accent }}
                />
                <div 
                  className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full opacity-20 blur-[40px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-50"
                  style={{ backgroundColor: service.accent }}
                />

                <div className="relative z-10 flex items-start gap-4 md:gap-5">
                  {/* Solid Vibrant Icon Box */}
                  <div 
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] text-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                    style={{ 
                      backgroundColor: service.accent,
                      boxShadow: `inset 0 2px 4px rgba(255,255,255,0.4), 0 8px 24px ${service.accent}60`
                    }}
                  >
                    <service.icon className="h-6 w-6" aria-hidden />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-[20px] font-bold leading-[1.2] tracking-[-0.015em] text-[var(--text-primary)] md:text-[22px]">
                      {service.title}
                    </h3>
                    <p className="text-[13px] leading-[1.6] text-[var(--text-secondary)] font-medium">{service.short}</p>
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold transition-all hover:gap-2"
                      style={{ color: service.accent }}
                    >
                      Learn more
                      <ArrowUpRight size={18} strokeWidth={2.5} />
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
