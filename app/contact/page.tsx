import type { Metadata } from "next";
import { Clock, Instagram, Linkedin, ShieldCheck, Sparkles, Twitter, Youtube } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Smart Grow Agency — proposals within 24 hours",
  description:
    "Tell us what you are launching. Smart Grow Agency replies within one business day with a tailored proposal, scope, and investment outline.",
};

function PartnerBadge({ title, subtitle, color }: { title: string; subtitle: string; color: string }) {
  return (
    <div 
      className="glass-card glass-3d-hover relative overflow-hidden flex items-center gap-3 p-4 border transition-all duration-300"
      style={{
        backgroundColor: `${color}05`,
        borderColor: `${color}25`
      }}
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full opacity-20 blur-[15px]" style={{ backgroundColor: color }} />

      {/* Solid Colored Circle Badge */}
      <div 
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-sm font-bold"
        style={{ backgroundColor: color }}
      >
        {title.slice(0, 1)}
      </div>
      <div className="relative z-10">
        <p className="text-[14px] font-bold text-[var(--text-primary)]">{title}</p>
        <p className="text-[12px] text-[var(--text-tertiary)] font-medium mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const badgeThemes = {
    blue: "#2997ff",
    emerald: "#30d158",
    orange: "#ff9f0a"
  };

  return (
    <div className="glass-panel">
      {/* Contact Hero */}
      <section className="section-y border-b border-[var(--border-subtle)] relative overflow-hidden">
        {/* Soft Background Orbs */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[60px]" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[60px]" />

        <div className="container-content max-w-4xl space-y-6 relative z-10">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">CONTACT</p>
          <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-tight md:text-[56px] text-[var(--text-primary)]">
            Tell us what you want to ship next.
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] font-medium">
            You will get a thoughtful reply from a senior lead—not a ticket bot. If we are not the right fit, we will
            point you in a better direction.
          </p>
          
          {/* Dynamic Glowing Pill Badges */}
          <div className="flex flex-wrap gap-3 text-[11px] text-[var(--text-secondary)] font-semibold">
            <span 
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2 shadow-sm"
              style={{
                backgroundColor: `${badgeThemes.blue}05`,
                borderColor: `${badgeThemes.blue}25`
              }}
            >
              <Clock size={16} style={{ color: badgeThemes.blue }} aria-hidden />
              We respond within 24 hours
            </span>
            <span 
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2 shadow-sm"
              style={{
                backgroundColor: `${badgeThemes.emerald}05`,
                borderColor: `${badgeThemes.emerald}25`
              }}
            >
              <ShieldCheck size={16} style={{ color: badgeThemes.emerald }} aria-hidden />
              30-day satisfaction guarantee
            </span>
            <span 
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2 shadow-sm"
              style={{
                backgroundColor: `${badgeThemes.orange}05`,
                borderColor: `${badgeThemes.orange}25`
              }}
            >
              <Sparkles size={16} style={{ color: badgeThemes.orange }} aria-hidden />
              Join 50+ brands who grew with us
            </span>
          </div>
        </div>
      </section>

      {/* Main Grid Contact & Form */}
      <section className="section-y">
        <div className="container-content grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="font-display text-[22px] font-bold tracking-tight text-[var(--text-primary)]">Contact Info</h2>
              <p className="text-[13.5px] font-medium text-[var(--text-secondary)]">{siteConfig.email}</p>
              <p className="text-[13.5px] font-medium text-[var(--text-secondary)]">{siteConfig.phone}</p>
              <p className="text-[13.5px] font-medium text-[var(--text-secondary)]">{siteConfig.address}</p>
              <p className="text-[13.5px] font-medium text-[var(--text-secondary)]">{siteConfig.hours}</p>
            </div>

            <div className="space-y-3.5">
              <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Social Networks</h3>
              <div className="flex flex-wrap gap-4 text-[13px] font-bold text-[var(--accent-blue)]">
                <a className="inline-flex items-center gap-2 hover:opacity-85 transition-opacity" href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} style={{ color: badgeThemes.blue }} /> LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 hover:opacity-85 transition-opacity" href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram size={16} style={{ color: "#ff375f" }} /> Instagram
                </a>
                <a className="inline-flex items-center gap-2 hover:opacity-85 transition-opacity" href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter size={16} style={{ color: "#64d2ff" }} /> X / Twitter
                </a>
                <a className="inline-flex items-center gap-2 hover:opacity-85 transition-opacity" href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube size={16} style={{ color: "#ff453a" }} /> YouTube
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                Program badges
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <PartnerBadge title="Google Partner" subtitle="Measurement-led media reviews" color={badgeThemes.blue} />
                <PartnerBadge title="Meta Partner" subtitle="Creative testing at scale" color={badgeThemes.emerald} />
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
