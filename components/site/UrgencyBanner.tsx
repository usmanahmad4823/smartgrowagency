"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function UrgencyBanner() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const dismissed = window.sessionStorage.getItem("cc-urgency-dismissed");
    if (dismissed) setVisible(false);
  }, []);

  const dismiss = () => {
    window.sessionStorage.setItem("cc-urgency-dismissed", "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[11px] text-[var(--text-secondary)] md:text-[12px]"
        >
          <div className="container-content flex items-center justify-center gap-3 py-2 text-center">
            <span>
              Currently accepting <span className="text-[var(--text-primary)]">3 new clients</span> for June—secure your
              sprint window.
            </span>
            <Link href="/contact" className="hidden font-semibold text-[var(--accent-blue)] sm:inline">
              Reserve a slot →
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
              aria-label="Dismiss banner"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
