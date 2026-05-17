"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Stats() {
  const themes = {
    projects: "#2997ff",     // Blue
    revenue: "#30d158",      // Emerald
    satisfaction: "#ff9f0a", // Orange
    turnaround: "#bf5af2"    // Purple
  };

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
          {/* Card 1: Projects */}
          <div 
            className="glass-card glass-3d-hover relative overflow-hidden space-y-3 p-6 transition-all duration-300 border"
            style={{
              backgroundColor: `${themes.projects}06`,
              borderColor: `${themes.projects}25`
            }}
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-35 blur-[22px]" style={{ backgroundColor: themes.projects }} />
            <div style={{ color: themes.projects }} className="relative z-10">
              <AnimatedCounter to={31} suffix="+" />
            </div>
            <p className="text-[11px] leading-snug text-[var(--text-secondary)] font-medium md:text-[12px] relative z-10">
              Boutique projects delivered with elite execution
            </p>
          </div>

          {/* Card 2: Revenue */}
          <div 
            className="glass-card glass-3d-hover relative overflow-hidden space-y-3 p-6 transition-all duration-300 border"
            style={{
              backgroundColor: `${themes.revenue}06`,
              borderColor: `${themes.revenue}25`
            }}
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-35 blur-[22px]" style={{ backgroundColor: themes.revenue }} />
            <div style={{ color: themes.revenue }} className="relative z-10">
              <AnimatedCounter to={9} prefix="PKR " suffix="M+" />
            </div>
            <p className="text-[11px] leading-snug text-[var(--text-secondary)] font-medium md:text-[12px] relative z-10">
              Direct revenue generated for our early clients
            </p>
          </div>

          {/* Card 3: Satisfaction */}
          <div 
            className="glass-card glass-3d-hover relative overflow-hidden space-y-3 p-6 transition-all duration-300 border"
            style={{
              backgroundColor: `${themes.satisfaction}06`,
              borderColor: `${themes.satisfaction}25`
            }}
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-35 blur-[22px]" style={{ backgroundColor: themes.satisfaction }} />
            <div style={{ color: themes.satisfaction }} className="relative z-10">
              <AnimatedCounter to={100} suffix="%" />
            </div>
            <p className="text-[11px] leading-snug text-[var(--text-secondary)] font-medium md:text-[12px] relative z-10">
              Client satisfaction & dedicated retention rate
            </p>
          </div>

          {/* Card 4: Turnaround */}
          <div 
            className="glass-card glass-3d-hover relative overflow-hidden space-y-3 p-6 transition-all duration-300 border"
            style={{
              backgroundColor: `${themes.turnaround}06`,
              borderColor: `${themes.turnaround}25`
            }}
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-35 blur-[22px]" style={{ backgroundColor: themes.turnaround }} />
            <div style={{ color: themes.turnaround }} className="relative z-10">
              <AnimatedCounter to={14} suffix=" Days" />
            </div>
            <p className="text-[11px] leading-snug text-[var(--text-secondary)] font-medium md:text-[12px] relative z-10">
              Average turnaround to ship initial versions
            </p>
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
