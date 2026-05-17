"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/pricing";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqColors = [
    "#2997ff", // Blue
    "#30d158", // Emerald
    "#ff9f0a", // Orange
    "#bf5af2", // Purple
    "#ff375f", // Pink
    "#64d2ff"  // Cyan
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const color = faqColors[index % faqColors.length];

        return (
          <div
            key={index}
            className="rounded-[16px] border overflow-hidden transition-all duration-300 glass-card glass-3d-hover relative"
            style={{
              backgroundColor: isOpen ? `${color}06` : "rgba(255, 255, 255, 0.02)",
              borderColor: isOpen ? `${color}40` : "rgba(255, 255, 255, 0.05)",
              boxShadow: isOpen ? `0 8px 24px ${color}15` : "none"
            }}
          >
            {/* Subtle Ambient Glow for Open Items */}
            {isOpen && (
              <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-20 blur-[20px]" style={{ backgroundColor: color }} />
            )}

            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left relative z-10"
            >
              <span 
                className="font-display text-[15px] font-bold text-[var(--text-primary)] pr-4 transition-colors duration-300"
                style={isOpen ? { color: color } : undefined}
              >
                {faq.q}
              </span>
              <div 
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300"
                style={{ 
                  backgroundColor: isOpen ? color : "rgba(255, 255, 255, 0.05)",
                  boxShadow: isOpen ? `0 4px 10px ${color}30` : "none"
                }}
              >
                {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={2} className="text-[var(--text-secondary)]" />}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-[14px] leading-relaxed text-[var(--text-secondary)] font-medium relative z-10 border-t border-white/5 pt-4 mt-1">
                    {faq.a}
                  </div>
                  </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
