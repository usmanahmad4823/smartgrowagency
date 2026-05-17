"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUpVariant } from "@/lib/motion";

const bullets = [
  { title: "ROI-Driven", copy: "Every roadmap starts with the metric you need to move—not a list of deliverables." },
  { title: "Transparent Reporting", copy: "You see spend, creative tests, and pipeline impact in one weekly snapshot." },
  { title: "Dedicated Account Manager", copy: "One senior owner coordinates specialists so nothing slips between teams." },
  { title: "Fast Turnaround", copy: "Sprints are built for launches: crisp milestones, daily async updates, no drift." },
  { title: "Proven Results", copy: "Playbooks refined across 200+ launches—patterns you can trust under pressure." },
  { title: "AI-Powered Workflows", copy: "Automation where it saves time; human judgment where it protects brand." },
];

export function WhyChooseUs() {
  return (
    <section className="section-y glass-panel-secondary">
      <div className="container-content grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="WHY SMART GROW AGENCY"
            title="Why the world's best brands choose us."
            description="You get senior execution without the agency theater—clear decisions, fast cycles, and work that holds up when traffic spikes."
          />
        </div>
        <motion.ul
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 lg:col-span-7"
        >
          {bullets.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeUpVariant}
              className="glass-card flex gap-3 p-5"
            >
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(41,151,255,0.12)] text-[var(--accent-blue)]">
                <Check size={18} aria-hidden />
              </div>
              <div>
                <p className="font-display text-[15px] font-semibold text-[var(--text-primary)]">{item.title}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-[var(--text-secondary)]">{item.copy}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container-content mt-10 text-[12px] text-[var(--text-tertiary)]"
      >
        Want the same rigor on your roadmap?{" "}
        <a className="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]" href="/contact">
          Book a free proposal call →
        </a>
      </motion.p>
    </section>
  );
}
