import type { Metadata } from "next";
import { Clock, Instagram, Linkedin, ShieldCheck, Sparkles, Twitter, Youtube } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Smart Grow Agency — proposals within 24 hours",
  description:
    "Tell us what you are launching. Smart Grow Agency replies within one business day with a tailored proposal, scope, and investment outline.",
};

function PartnerBadge({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="glass-card flex items-center gap-3 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[12px] font-bold text-[var(--text-primary)]">
        {title.slice(0, 1)}
      </div>
      <div>
        <p className="text-[14px] font-semibold text-[var(--text-primary)]">{title}</p>
        <p className="text-[12px] text-[var(--text-tertiary)]">{subtitle}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="glass-panel">
      <section className="section-y border-b border-[var(--border-subtle)]">
        <div className="container-content max-w-4xl space-y-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">CONTACT</p>
          <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-[-0.022em] md:text-[56px]">
            Tell us what you want to ship next.
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
            You will get a thoughtful reply from a senior lead—not a ticket bot. If we are not the right fit, we will
            point you in a better direction.
          </p>
          <div className="flex flex-wrap gap-3 text-[11px] text-[var(--text-secondary)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-3 py-2">
              <Clock size={16} className="text-[var(--accent-blue)]" aria-hidden />
              We respond within 24 hours
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-3 py-2">
              <ShieldCheck size={16} className="text-[var(--accent-blue)]" aria-hidden />
              30-day satisfaction guarantee on strategy deliverables
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-3 py-2">
              <Sparkles size={16} className="text-[var(--accent-blue)]" aria-hidden />
              Join 50+ brands who grew with Smart Grow Agency
            </span>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-content grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="font-display text-[22px] font-semibold tracking-[-0.02em]">Contact</h2>
              <p className="text-[13px] text-[var(--text-secondary)]">{siteConfig.email}</p>
              <p className="text-[13px] text-[var(--text-secondary)]">{siteConfig.phone}</p>
              <p className="text-[13px] text-[var(--text-secondary)]">{siteConfig.address}</p>
              <p className="text-[13px] text-[var(--text-secondary)]">{siteConfig.hours}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Social</h3>
              <div className="flex flex-wrap gap-3 text-[12px] text-[var(--accent-blue)]">
                <a className="inline-flex items-center gap-2 hover:text-[var(--accent-blue-hover)]" href={siteConfig.social.linkedin}>
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 hover:text-[var(--accent-blue-hover)]" href={siteConfig.social.instagram}>
                  <Instagram size={18} /> Instagram
                </a>
                <a className="inline-flex items-center gap-2 hover:text-[var(--accent-blue-hover)]" href={siteConfig.social.twitter}>
                  <Twitter size={18} /> X / Twitter
                </a>
                <a className="inline-flex items-center gap-2 hover:text-[var(--accent-blue-hover)]" href={siteConfig.social.youtube}>
                  <Youtube size={18} /> YouTube
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                Program badges
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <PartnerBadge title="Google Partner" subtitle="Measurement-led media reviews" />
                <PartnerBadge title="Meta Partner" subtitle="Creative testing at scale" />
              </div>
            </div>

          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
