"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "We map your funnel, constraints, and success metrics so every decision ladders to revenue.",
    color: "#2997ff" // Blue
  },
  {
    n: "02",
    title: "Strategy",
    body: "Channel, creative, and technical plans align into a sprint backlog you can approve in one session.",
    color: "#30d158" // Emerald
  },
  {
    n: "03",
    title: "Execution",
    body: "Design, build, and launch happen in tight loops—async updates daily, demos weekly.",
    color: "#ff9f0a" // Orange
  },
  {
    n: "04",
    title: "Growth",
    body: "We instrument, learn, and scale what wins—optimizing CAC, LTV, and speed together.",
    color: "#bf5af2" // Purple
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
    <section className="section-y glass-panel">
      <div className="container-content">
        <SectionHeader
          eyebrow="PROCESS"
          title="How we work"
          description="A clear cadence so you always know what ships next—and why it matters to your customers."
        />

        <div ref={ref} className="relative mt-12">
          {/* Desktop Timeline Layout */}
          <div className="relative hidden lg:grid lg:grid-cols-4 lg:gap-8">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-[18px] h-[3px] rounded-full bg-white/10" />
            <motion.div
              className="pointer-events-none absolute left-[8%] top-[18px] h-[3px] w-[84%] rounded-full bg-gradient-to-r from-[#2997ff] via-[#30d158] via-[#ff9f0a] to-[#bf5af2]"
              style={{ scaleX, transformOrigin: "0% 50%" }}
            />

            {steps.map((step) => {
              const accent = step.color;

              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 space-y-4 group"
                >
                  {/* Glowing Node Badge */}
                  <div 
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-md transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: accent,
                      boxShadow: `inset 0 1px 1px rgba(255,255,255,0.4), 0 6px 15px ${accent}40`
                    }}
                  >
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-display text-[18px] font-bold tracking-tight text-[var(--text-primary)] transition-colors duration-300" style={{ color: accent }}>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--text-secondary)] font-medium pr-2">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Horizontal Layout */}
          <div className="flex gap-4 overflow-x-auto pb-4 lg:hidden scrollbar-none" role="list">
            {steps.map((step) => {
              const accent = step.color;

              return (
                <div
                  key={step.n}
                  className="min-w-[260px] space-y-4 rounded-[18px] border glass-3d-hover relative overflow-hidden p-6 transition-all duration-300"
                  style={{
                    backgroundColor: `${accent}05`,
                    borderColor: `${accent}25`
                  }}
                  role="listitem"
                >
                  {/* Top-Right Ambient Glow */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full opacity-20 blur-[15px]" style={{ backgroundColor: accent }} />

                  <div 
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-sm"
                    style={{ backgroundColor: accent }}
                  >
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-display text-[16px] font-bold text-[var(--text-primary)]" style={{ color: accent }}>
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[12px] leading-relaxed text-[var(--text-secondary)] font-medium">
                      {step.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-[12px] font-semibold text-[var(--text-tertiary)]"
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
