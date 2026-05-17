"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Stats() {
  return (
    <section className="section-y glass-panel-tertiary">
      <div className="container-content">
        <SectionHeader
          eyebrow="RESULTS"
          title="Outcomes you can brief your board on."
          description="We obsess over lagging indicators: pipeline, revenue, retention—not vanity metrics that evaporate next quarter."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="glass-card space-y-3 p-6">
            <AnimatedCounter to={31} suffix="+" />
            <p className="text-[11px] leading-snug text-[var(--text-secondary)] md:text-[12px]">Boutique projects delivered with elite execution</p>
          </div>
          <div className="glass-card space-y-3 p-6">
            <AnimatedCounter to={9} prefix="PKR " suffix="M+" />
            <p className="text-[11px] leading-snug text-[var(--text-secondary)] md:text-[12px]">Direct revenue generated for our early clients</p>
          </div>
          <div className="glass-card space-y-3 p-6">
            <AnimatedCounter to={100} suffix="%" />
            <p className="text-[11px] leading-snug text-[var(--text-secondary)] md:text-[12px]">Client satisfaction & dedicated retention rate</p>
          </div>
          <div className="glass-card space-y-3 p-6">
            <AnimatedCounter to={14} suffix=" Days" />
            <p className="text-[11px] leading-snug text-[var(--text-secondary)] md:text-[12px]">Average turnaround to ship initial versions</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-[11px] text-[var(--text-tertiary)] md:text-[12px]"
        >
          Want a forecast for your numbers?{" "}
          <a className="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]" href="/contact">
            Request a free growth proposal →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
