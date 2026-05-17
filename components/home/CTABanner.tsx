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
        className="container-content rounded-[24px] border border-blue-500/25 glass-panel-secondary px-8 py-16 text-center md:px-16 relative overflow-hidden shadow-[0_15px_40px_rgba(41,151,255,0.06)]"
      >
        {/* Prismatic Mesh Glow Orbs */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2997ff]/10 blur-[60px]" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#30d158]/10 blur-[60px]" />

        <div className="relative z-10 space-y-6">
          <h2 className="font-display text-[32px] font-bold leading-[1.1] tracking-tight text-[var(--text-primary)] md:text-[44px]">
            Ready to grow your business?
          </h2>
          <p className="mx-auto max-w-2xl text-[13px] leading-relaxed text-[var(--text-secondary)] font-medium md:text-[15px]">
            Share your goals, timeline, and constraints. You will receive a tailored proposal with scope, milestones, and
            investment—no fluff, no bait-and-switch.
          </p>
          <div className="pt-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" className="px-8 py-3 text-[12px] font-bold">
              Get Free Proposal
            </Button>
            <p className="text-[12px] font-semibold text-[var(--text-tertiary)]">Join 50+ brands who grew with Smart Grow Agency</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
