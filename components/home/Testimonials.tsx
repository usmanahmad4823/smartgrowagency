"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/testimonials";
import { Stars } from "@/components/ui/Stars";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const items = useMemo(() => testimonials, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [items.length, paused]);

  const active = items[index];

  return (
    <section className="section-y bg-[var(--bg-primary)]">
      <div className="container-content">
        <SectionHeader
          eyebrow="TESTIMONIALS"
          title="Trusted by our clients"
          description="Teams stay because the work holds up—and because we treat your revenue like it is our own."
        />

        <div
          className="mx-auto max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="glass-card relative overflow-hidden p-8 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <Stars />
                <p className="font-display text-[20px] leading-[1.35] text-[var(--text-primary)] md:text-[22px]">
                  “{active.quote}”
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--border-subtle)]">
                    <Image src={active.avatar} alt={active.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[var(--text-primary)]">{active.name}</p>
                    <p className="text-[11px] text-[var(--text-secondary)]">{active.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === index ? "bg-[var(--accent-blue)]" : "bg-[rgba(255,255,255,0.2)]"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-[12px] text-[var(--text-tertiary)]"
        >
          Want similar outcomes for your funnel?{" "}
          <a className="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]" href="/contact">
            Tell us what you are launching →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
