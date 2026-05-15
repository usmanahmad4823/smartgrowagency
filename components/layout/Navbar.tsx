"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { navLinks } from "@/lib/nav-links";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const pillBackground = scrolled ? "var(--nav-pill-bg-scrolled)" : "var(--nav-pill-bg)";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-transparent bg-transparent pt-3 md:pt-4">
      <div className="container-content flex justify-center px-3 sm:px-5">
        <nav
          aria-label="Primary"
          className={`flex w-full max-w-4xl items-center justify-between gap-2 rounded-full border border-[var(--border-subtle)] px-3 py-2 backdrop-blur-xl transition-[box-shadow,background-color] duration-300 sm:gap-3 sm:px-4 sm:py-2.5 lg:gap-5 lg:px-6 ${
            scrolled ? "shadow-[var(--nav-shadow)]" : ""
          }`}
          style={{ backgroundColor: pillBackground }}
        >
          <Link
            href="/"
            className="shrink-0 font-display text-[13px] font-semibold tracking-tight text-[var(--text-primary)] sm:text-[14px]"
          >
            {siteConfig.name}
          </Link>

          <div className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-6 text-[11px] font-medium tracking-wide text-[var(--text-secondary)] xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link className="transition-colors hover:text-[var(--text-primary)]" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            <ThemeToggle />
            <div className="hidden lg:block">
              <Button href="/contact" variant="primary" className="px-4 py-2 text-[13px] font-semibold">
                Get Free Proposal
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--glass-bg)] text-[var(--text-primary)] lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[72px] z-40 backdrop-blur-xl lg:hidden"
            style={{ backgroundColor: "var(--mobile-overlay)" }}
            role="dialog"
            aria-modal="true"
          >
            <motion.ul
              className="container-content flex flex-col gap-5 py-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
                  }}
                >
                  <Link
                    href={link.href}
                    className="block font-display text-[22px] font-semibold tracking-[-0.02em] text-[var(--text-primary)] sm:text-[24px]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
                }}
              >
                <Button href="/contact" variant="primary" className="w-full justify-center text-[14px]" onClick={() => setOpen(false)}>
                  Get Free Proposal
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
