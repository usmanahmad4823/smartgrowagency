"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { siteConfig } from "@/lib/site";

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden glass-panel pt-8">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -left-32 top-24 h-[380px] w-[380px] rounded-full md:h-[420px] md:w-[420px]"
          style={{ backgroundColor: "var(--hero-blob)" }}
          animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-10 h-[460px] w-[460px] rounded-full md:h-[520px] md:w-[520px]"
          style={{ backgroundColor: "var(--hero-blob-strong)" }}
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1.02, 1, 1.02] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-radial)" }} />
      </div>

      <div className="container-content relative z-10 flex min-h-[calc(100svh-88px)] flex-col justify-center pb-14 pt-4 md:min-h-[calc(100svh-96px)] md:pb-20 md:pt-8">
        <motion.div variants={heroStagger} initial="hidden" animate="visible" className="max-w-3xl space-y-6 md:space-y-7">
          <motion.div variants={heroItem} className="flex items-center gap-3">
            <Badge>DIGITAL GROWTH PARTNER</Badge>
            <div className="hidden items-center gap-1.5 text-[11px] font-medium text-[var(--text-tertiary)] sm:flex">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-[#30d158] ring-2 ring-[#30d158]/20" />
              Accepting new projects
            </div>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="font-display text-[36px] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)] md:text-[52px] lg:text-[64px]"
          >
            Scale Your Brand With <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[var(--accent-blue)] via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Elite Digital Execution.
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="max-w-xl text-[15px] leading-[1.6] text-[var(--text-secondary)] md:max-w-2xl md:text-[17px]"
          >
            We pair premium web craft, AI automation and performance media to convert attention into predictable revenue. Stop managing five different agencies.
          </motion.p>

          <motion.div variants={heroItem} className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button
              href="/contact"
              variant="primary"
              className="h-12 px-8 text-[13px] shadow-lg shadow-[var(--accent-blue)]/20 transition-all hover:-translate-y-0.5 hover:shadow-[var(--accent-blue)]/40"
            >
              Get Your Free Growth Plan
              <ArrowRight size={16} className="ml-1" />
            </Button>
            <Button href="/portfolio" variant="ghost" className="h-12 px-8 text-[13px] hover:glass-panel-secondary">
              View Case Studies
            </Button>
          </motion.div>

          <motion.div variants={heroItem} className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {[10, 32, 45, 68].map((imgId, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${imgId}`}
                  alt="Avatar"
                  className="h-8 w-8 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#ffb800]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-[11px] font-medium text-[var(--text-tertiary)]">
                Trusted by 50+ modern brands
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-12 grid gap-3 sm:grid-cols-3 sm:gap-4"
        >
          <div className="glass-card flex flex-col gap-1.5 p-4 md:p-5">
            <AnimatedCounter to={200} suffix="+" />
            <p className="text-[11px] leading-snug text-[var(--text-secondary)] md:text-[12px]">
              Projects shipped with measurable lift
            </p>
          </div>
          <div className="glass-card flex flex-col gap-1.5 p-4 md:p-5">
            <AnimatedCounter to={98} suffix="%" />
            <p className="text-[11px] leading-snug text-[var(--text-secondary)] md:text-[12px]">
              Clients who renew after the first win
            </p>
          </div>
          <div className="glass-card flex flex-col gap-1.5 p-4 md:p-5">
            <AnimatedCounter to={50} suffix="+" />
            <p className="text-[11px] leading-snug text-[var(--text-secondary)] md:text-[12px]">
              Brands partnered across industries
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 text-[11px] text-[var(--text-tertiary)]"
        >
          Prefer WhatsApp?{" "}
          <Link className="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]" href="/contact">
            Message {siteConfig.name} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
