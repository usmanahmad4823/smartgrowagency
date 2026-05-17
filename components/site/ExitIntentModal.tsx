"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let triggered = false;
    const onMouseOut = (event: MouseEvent) => {
      if (triggered) return;
      if (event.clientY > 0) return;
      triggered = true;
      setOpen(true);
    };
    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-title"
            className="max-w-lg rounded-[20px] border border-[var(--border-subtle)] glass-panel-secondary p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p id="exit-title" className="font-display text-[28px] font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
              Wait — get a free audit before you go
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-[var(--text-secondary)]">
              Tell us what you are trying to ship this quarter. We will send a short teardown with quick wins you can act
              on this week.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href="/contact" variant="primary" className="justify-center">
                Claim Free Audit
              </Button>
              <Button type="button" variant="ghost" className="justify-center" onClick={() => setOpen(false)}>
                Not now
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
