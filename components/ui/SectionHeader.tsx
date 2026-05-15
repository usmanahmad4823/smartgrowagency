"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`mb-10 max-w-3xl space-y-3 md:mb-12 ${alignClass}`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">{eyebrow}</p>
      <h2 className="font-display text-[26px] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--text-primary)] md:text-[32px] lg:text-[36px]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[12px] leading-[1.5] text-[var(--text-secondary)] md:mx-auto md:text-[13px]">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
