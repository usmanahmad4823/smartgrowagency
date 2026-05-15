"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "We map your funnel, constraints, and success metrics so every decision ladders to revenue.",
  },
  {
    n: "02",
    title: "Strategy",
    body: "Channel, creative, and technical plans align into a sprint backlog you can approve in one session.",
  },
  {
    n: "03",
    title: "Execution",
    body: "Design, build, and launch happen in tight loops—async updates daily, demos weekly.",
  },
  {
    n: "04",
    title: "Growth",
    body: "We instrument, learn, and scale what wins—optimizing CAC, LTV, and speed together.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 35%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 32 });
  const scaleX = useTransform(progress, [0, 1], [0.08, 1]);

  return (
    <section className="section-y bg-[var(--bg-primary)]">
      <div className="container-content">
        <SectionHeader
          eyebrow="PROCESS"
          title="How we work"
          description="A clear cadence so you always know what ships next—and why it matters to your customers."
        />

        <div ref={ref} className="relative mt-6">
          <div className="relative hidden lg:grid lg:grid-cols-4 lg:gap-6">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-8 h-[3px] rounded-full bg-[rgba(255,255,255,0.12)]" />
            <motion.div
              className="pointer-events-none absolute left-[8%] top-8 h-[3px] w-[84%] rounded-full bg-[var(--accent-blue)]"
              style={{ scaleX, transformOrigin: "0% 50%" }}
            />

            {steps.map((step) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 space-y-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[11px] font-semibold text-[var(--text-primary)]">
                  {step.n}
                </div>
                <h3 className="font-display text-[18px] font-semibold tracking-[-0.015em]">{step.title}</h3>
                <p className="text-[12px] leading-relaxed text-[var(--text-secondary)]">{step.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 lg:hidden" role="list">
            {steps.map((step) => (
              <div
                key={step.n}
                className="min-w-[240px] space-y-3 rounded-[18px] border border-[var(--border-subtle)] bg-[var(--glass-bg)] p-5"
                role="listitem"
              >
                <p className="text-[11px] font-semibold text-[var(--text-tertiary)]">{step.n}</p>
                <h3 className="font-display text-[16px] font-semibold">{step.title}</h3>
                <p className="text-[12px] leading-relaxed text-[var(--text-secondary)]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-[12px] text-[var(--text-tertiary)]"
        >
          Ready for a plan you can execute this quarter?{" "}
          <a className="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]" href="/contact">
            Start with a free proposal →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
