import Link from "next/link";
import { Linkedin, Instagram, Twitter, Youtube, ShieldCheck, Sparkles } from "lucide-react";
import { navLinks } from "@/lib/nav-links";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";

const company = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const chips = ["ROI-led delivery", "200+ launches", "Remote-first pod"];

export function Footer() {
  return (
    <footer className="glass-panel pb-8 pt-12 md:pb-12 md:pt-16">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-[var(--radius-footer)] border border-[var(--border-subtle)] glass-panel-secondary px-6 py-10 md:px-10 md:py-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-100"
            style={{ backgroundImage: "var(--footer-card-glow)" }}
            aria-hidden
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-4 lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--glass-bg)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                <Sparkles size={12} className="text-[var(--accent-blue)]" aria-hidden />
                Full-service digital growth
              </div>
              <p className="font-display text-[15px] font-semibold tracking-tight text-[var(--text-primary)] md:text-[17px]">
                {siteConfig.name}
              </p>
              <p className="max-w-sm text-[11px] leading-relaxed text-[var(--text-secondary)]">{siteConfig.tagline}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[var(--border-subtle)] bg-[var(--glass-bg)] px-3 py-1 text-[11px] font-medium text-[var(--text-secondary)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={siteConfig.social.linkedin}
                  className="rounded-full border border-[var(--border-subtle)] p-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  className="rounded-full border border-[var(--border-subtle)] p-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  className="rounded-full border border-[var(--border-subtle)] p-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={16} />
                </a>
                {/* <a
                  href={siteConfig.social.youtube}
                  className="rounded-full border border-[var(--border-subtle)] p-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  aria-label="YouTube"
                >
                  <Youtube size={16} />
                </a> */}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                  Services
                </p>
                <ul className="space-y-2.5 text-[11px] leading-snug text-[var(--text-secondary)]">
                  {services.slice(0, 6).map((s) => (
                    <li key={s.slug}>
                      <Link className="transition-colors hover:text-[var(--text-primary)]" href={`/services#${s.slug}`}>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link className="text-[11px] font-semibold text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]" href="/services">
                      View all →
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Company</p>
                <ul className="space-y-2.5 text-[11px] text-[var(--text-secondary)]">
                  {company.map((c) => (
                    <li key={c.href}>
                      <Link className="transition-colors hover:text-[var(--text-primary)]" href={c.href}>
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Contact</p>
                <p className="text-[11px] text-[var(--text-secondary)]">{siteConfig.email}</p>
                <p className="text-[11px] text-[var(--text-secondary)]">{siteConfig.phone}</p>
                {/* <p className="text-[11px] text-[var(--text-secondary)]">{siteConfig.address}</p> */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[11px] font-semibold text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]"
                >
                  Get Free Proposal →
                </Link>
                <div className="flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--glass-bg)] px-2.5 py-1.5 text-[11px] text-[var(--text-tertiary)]">
                  <ShieldCheck size={14} className="shrink-0 text-[var(--accent-blue)]" aria-hidden />
                  <span>256-bit SSL encrypted forms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[11px] text-[var(--text-tertiary)] md:flex-row md:items-center md:justify-between md:gap-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-[var(--text-primary)]">
                {l.label}
              </Link>
            ))}
            <Link href="/privacy" className="hover:text-[var(--text-primary)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--text-primary)]">
              Terms of Service
            </Link>
          </div>
          <p className="text-[var(--text-secondary)]">Built with care by {siteConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}
