"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Calendar, DollarSign, HelpCircle, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site";
import { services } from "@/lib/services";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"actions" | "services">("services");

  const generalQuestions = [
    {
      label: "Schedule Free Consultation",
      desc: "Book a direct growth session for your business",
      message: "Hi Smart Grow Agency — I'd like to schedule a free growth consultation for my brand.",
      icon: Calendar,
      accent: "#2997ff"
    },
    {
      label: "Discuss Pricing Packages",
      desc: "Get details on packages and tailored pricing",
      message: "Hi Smart Grow Agency — I'm interested in discussing your pricing packages.",
      icon: DollarSign,
      accent: "#30d158"
    },
    {
      label: "Custom Project Inquiry",
      desc: "Discuss a custom product, automation, or brand",
      message: "Hi Smart Grow Agency — I have a general inquiry / custom project I'd like to discuss.",
      icon: HelpCircle,
      accent: "#ff9f0a"
    }
  ];

  // Framer Motion Variants for Staggered Dropdowns
  const menuVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.8, 0.25, 1] as const
      }
    },
    exit: {
      opacity: 0,
      y: 15,
      scale: 0.92,
      transition: { duration: 0.2, ease: "easeInOut" as const }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.02
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.25, ease: "easeOut" as const }
    }
  };

  return (
    <>
      {/* Background Click Overlay to Close */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-[3px] transition-all duration-300"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {/* WhatsApp Inquiry Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass-panel-secondary relative w-[360px] max-w-[calc(100vw-40px)] rounded-[28px] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden"
            >
              {/* Dynamic Prism Glow Mesh Background */}
              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-blue-600/10 blur-[40px] animate-pulse" />
                <div className="absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-[40px] animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                <div>
                  <h3 className="font-display text-[16px] font-bold tracking-tight text-[var(--text-primary)]">Smart Inquiry</h3>
                  <p className="text-[11px] text-[var(--text-tertiary)]">Interactive WhatsApp chat selection</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-[var(--text-primary)] transition-colors border border-white/5 active:scale-90"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Modern Glass Tab Switcher */}
              <div className="flex p-1 bg-black/25 backdrop-blur-sm rounded-xl border border-white/5 mb-4 relative">
                <button
                  onClick={() => setActiveTab("actions")}
                  className="relative flex-1 py-2 text-[11px] font-bold tracking-wide text-center rounded-lg transition-colors duration-300 z-10 flex items-center justify-center gap-1.5"
                  style={{ color: activeTab === "actions" ? "#fff" : "var(--text-secondary)" }}
                >
                  {activeTab === "actions" && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-white/10 rounded-lg -z-10 border border-white/10 shadow-[0_2px_8px_rgba(255,255,255,0.05)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  ⚡ Quick Help
                </button>
                <button
                  onClick={() => setActiveTab("services")}
                  className="relative flex-1 py-2 text-[11px] font-bold tracking-wide text-center rounded-lg transition-colors duration-300 z-10 flex items-center justify-center gap-1.5"
                  style={{ color: activeTab === "services" ? "#fff" : "var(--text-secondary)" }}
                >
                  {activeTab === "services" && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-white/10 rounded-lg -z-10 border border-white/10 shadow-[0_2px_8px_rgba(255,255,255,0.05)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  💼 Services
                </button>
              </div>

              {/* Tab Content List Container with fresh stagger key on activeTab switch */}
              <motion.div
                key={activeTab}
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="max-h-[300px] overflow-y-auto pr-1.5 space-y-2.5 custom-scrollbar"
              >
                {activeTab === "actions" ? (
                  /* TAB 1: QUICK ACTIONS */
                  <div className="space-y-2.5">
                    {generalQuestions.map((q, idx) => (
                      <motion.a
                        key={idx}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: `${q.accent}12`,
                          borderColor: `${q.accent}30`,
                          boxShadow: `0 8px 24px ${q.accent}20`
                        }}
                        whileTap={{ scale: 0.98 }}
                        href={getWhatsAppLink(q.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-white/[0.02] transition-colors duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-lg"
                            style={{
                              backgroundColor: q.accent,
                              boxShadow: `inset 0 1px 1px rgba(255,255,255,0.3), 0 6px 15px ${q.accent}30`
                            }}
                          >
                            <q.icon size={16} />
                          </div>
                          <div className="text-left">
                            <span className="block text-[12px] font-bold text-[var(--text-primary)]">{q.label}</span>
                            <span className="block text-[10px] text-[var(--text-secondary)] mt-0.5">{q.desc}</span>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-[var(--text-tertiary)]" />
                      </motion.a>
                    ))}
                  </div>
                ) : (
                  /* TAB 2: SERVICES LIST */
                  <div className="space-y-2.5">
                    {services.map((service) => (
                      <motion.a
                        key={service.slug}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: `${service.accent}12`,
                          borderColor: `${service.accent}30`,
                          boxShadow: `0 8px 24px ${service.accent}20`
                        }}
                        whileTap={{ scale: 0.98 }}
                        href={getWhatsAppLink(`Hi Smart Grow Agency — I need help with ${service.title} services.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] transition-colors duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-lg"
                            style={{
                              backgroundColor: service.accent,
                              boxShadow: `inset 0 1px 1px rgba(255,255,255,0.3), 0 6px 15px ${service.accent}30`
                            }}
                          >
                            <service.icon size={16} />
                          </div>
                          <div className="text-left">
                            <span className="block text-[12px] font-bold text-[var(--text-primary)]">{service.title}</span>
                            <span className="block text-[9.5px] text-[var(--text-secondary)] truncate max-w-[190px] mt-0.5">{service.short}</span>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-[var(--text-tertiary)] animate-pulse" />
                      </motion.a>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Float Button Toggle (Small & Creative) */}
        <div className="relative flex items-center group">
          {/* Animated Pulsing Rings */}
          {!isOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
              <span className="absolute inset-0 rounded-full bg-[#25D366]/10 animate-ping pointer-events-none" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
            </>
          )}

          {/* Compact Button with Text */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            animate={isOpen ? { scale: 0.95 } : { scale: [1, 1.06, 0.98, 1.06, 1, 1] }}
            transition={
              isOpen
                ? { duration: 0.2 }
                : {
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut"
                }
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-11 items-center gap-2 rounded-full px-4 text-white active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)] transition-shadow duration-300"
            style={{
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 8px 24px rgba(37, 211, 102, 0.35)",
            }}
            aria-label="Chat on WhatsApp"
          >
            {isOpen ? <X size={16} strokeWidth={2.5} /> : <MessageCircle size={18} strokeWidth={2} />}
            <span className="text-[12px] font-bold tracking-tight">
              {isOpen ? "Close" : "Whatsapp"}
            </span>
          </motion.button>
        </div>
      </div>
    </>
  );
}
