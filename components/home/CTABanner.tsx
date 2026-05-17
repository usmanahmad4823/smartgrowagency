"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="section-y glass-panel">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="container-content rounded-[24px] border border-[rgba(41,151,255,0.35)] glass-panel-secondary px-8 py-14 text-center md:px-16"
      >
        <h2 className="font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] md:text-[44px]">
          Ready to grow your business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-relaxed text-[var(--text-secondary)] md:text-[15px]">
          Share your goals, timeline, and constraints. You will receive a tailored proposal with scope, milestones, and
          investment—no fluff, no bait-and-switch.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="primary" className="px-8">
            Get Free Proposal
          </Button>
          <p className="text-[11px] text-[var(--text-tertiary)]">Join 50+ brands who grew with Smart Grow Agency</p>
        </div>
      </motion.div>
    </section>
  );
}
