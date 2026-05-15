"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { monthlyPackages, oneTimePackages } from "@/lib/pricing";
import { PricingCard } from "./PricingCard";
import { OneTimeCard } from "./OneTimeCard";

export function PackagesToggle() {
  const [activeTab, setActiveTab] = useState<"monthly" | "onetime">("monthly");

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative mb-12 inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-1">
        <div
          className="absolute inset-y-1 rounded-full bg-[var(--text-primary)] transition-all duration-300 ease-out"
          style={{
            left: activeTab === "monthly" ? "4px" : "calc(50% + 2px)",
            width: "calc(50% - 6px)",
          }}
        />
        <button
          onClick={() => setActiveTab("monthly")}
          className={`relative w-36 sm:w-48 rounded-full py-2.5 text-[13px] font-semibold transition-colors duration-300 ${
            activeTab === "monthly" ? "text-[var(--bg-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          Monthly Retainers
        </button>
        <button
          onClick={() => setActiveTab("onetime")}
          className={`relative w-36 sm:w-48 rounded-full py-2.5 text-[13px] font-semibold transition-colors duration-300 ${
            activeTab === "onetime" ? "text-[var(--bg-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          One-Time Projects
        </button>
      </div>

      <div className="w-full">
        <AnimatePresence mode="wait">
          {activeTab === "monthly" ? (
            <motion.div
              key="monthly"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid gap-6 md:grid-cols-3 w-full"
            >
              {monthlyPackages.map((pkg) => (
                <PricingCard key={pkg.id} pkg={pkg} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="onetime"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid gap-6 md:grid-cols-3 w-full"
            >
              {oneTimePackages.map((pkg) => (
                <OneTimeCard key={pkg.id} pkg={pkg} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
