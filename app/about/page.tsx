import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Target, Users2, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Smart Grow Agency — operators who ship like owners",
  description:
    "Smart Grow Agency is a senior-led digital agency building growth systems, web platforms, and automated workflows for modern brands.",
};

const values = [
  {
    title: "Clarity beats cleverness",
    body: "If your customer cannot repeat your offer in one sentence, we have not finished.",
    icon: Target,
    color: "#2997ff" // Blue
  },
  {
    title: "Velocity with guardrails",
    body: "We ship fast, but never at the expense of trust, accessibility, or measurement.",
    icon: Zap,
    color: "#30d158" // Emerald
  },
  {
    title: "One team surface",
    body: "You interface with leads who own outcomes—not a rotating cast of junior staffers.",
    icon: Users2,
    color: "#ff9f0a" // Orange
  },
  {
    title: "Craft you can feel",
    body: "The details matter: motion, typography, and performance are part of the product.",
    icon: Sparkles,
    color: "#bf5af2" // Purple
  },
];

const recognition = [
  {
    title: "Google Partner",
    body: "Search, Performance Max, and measurement reviews aligned to Google standards.",
    color: "#2997ff" // Blue
  },
  {
    title: "Meta Business Partner",
    body: "Creative testing, catalog ads, and signal quality tuned for iOS-era attribution.",
    color: "#30d158" // Emerald
  },
  {
    title: "HubSpot & CRM stack",
    body: "Lifecycle architecture across HubSpot, Salesforce, and modern data warehouses.",
    color: "#ff9f0a" // Orange
  }
];

export default function AboutPage() {
  return (
    <div className="glass-panel">
      {/* Hero Header */}
      <section className="section-y border-b border-[var(--border-subtle)] relative overflow-hidden">
        {/* Soft Background Orbs */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[60px]" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[60px]" />

        <div className="container-content max-w-4xl space-y-6 relative z-10">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">ABOUT</p>
          <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-tight text-[var(--text-primary)] md:text-[56px]">
            We exist so your best ideas do not die in a backlog.
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] font-medium">
            Smart Grow Agency is a senior-led digital agency for teams that want Apple-caliber craft with operator-grade
            accountability. You get one pod spanning strategy, design, engineering, and media—so you can ship the next
            chapter without losing weeks to coordination tax.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" className="px-8 py-3 text-[12px] font-bold shadow-lg">
              Meet us on a call
            </Button>
          </div>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="section-y glass-panel-secondary">
        <div className="container-content grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">STORY</p>
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[38px]">
              How we started
            </h2>
            <p className="text-[13.5px] leading-relaxed text-[var(--text-secondary)] font-medium">
              We launched after watching brilliant operators drown in mismatched vendors: a fast site with weak analytics,
              beautiful ads with a slow funnel, automation that terrified legal. Smart Grow Agency was built as the antidote—a
              single accountable team that speaks revenue, creative, and systems in the same meeting.
            </p>
            <p className="text-[13.5px] leading-relaxed text-[var(--text-secondary)] font-medium">
              Today we partner with founders, CMOs, and product leaders who need a partner that ships like an owner. If
              that is you, we should talk.
            </p>
          </div>
          
          <Card 
            className="space-y-4 p-8 glass-3d-hover relative overflow-hidden transition-all duration-300 border"
            style={{
              backgroundColor: "rgba(41, 151, 255, 0.05)",
              borderColor: "rgba(41, 151, 255, 0.25)"
            }}
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#2997ff]/20 blur-[25px]" />
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--text-tertiary)] relative z-10">Mission</p>
            <p className="font-display text-[26px] font-bold leading-snug tracking-tight text-[var(--text-primary)] relative z-10">
              Help ambitious brands turn attention into durable revenue—with systems that scale.
            </p>
            <p className="text-[15px] font-medium text-[var(--text-secondary)] relative z-10 pt-2">
              Ready to see how that shows up for your roadmap?{" "}
              <Link className="text-[var(--accent-blue)] font-bold hover:text-[var(--accent-blue-hover)]" href="/contact">
                Request a proposal →
              </Link>
            </p>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-y glass-panel-secondary">
        <div className="container-content space-y-10">
          <SectionHeader
            eyebrow="VALUES"
            title="Principles we will not compromise."
            description="They keep quality high and decisions fast—so you always know what we optimize for."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              const accent = value.color;

              return (
                <Card 
                  key={value.title} 
                  className="space-y-4 p-7 glass-3d-hover relative overflow-hidden flex flex-col transition-all duration-300 border"
                  style={{
                    backgroundColor: `${accent}05`,
                    borderColor: `${accent}25`
                  }}
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-20 blur-[20px]" style={{ backgroundColor: accent }} />
                  
                  {/* Solid Colored Icon Box */}
                  <div 
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-md transition-transform duration-300"
                    style={{ 
                      backgroundColor: accent,
                      boxShadow: `inset 0 1px 1px rgba(255,255,255,0.4), 0 4px 10px ${accent}30`
                    }}
                  >
                    <Icon size={18} strokeWidth={2} aria-hidden />
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-display text-[18px] font-bold text-[var(--text-primary)]" style={{ color: accent }}>{value.title}</h3>
                    <p className="mt-2 text-[13px] text-[var(--text-secondary)] font-medium leading-relaxed">{value.body}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recognition / Certifications */}
      <section className="section-y">
        <div className="container-content space-y-8">
          <SectionHeader
            eyebrow="RECOGNITION"
            title="Certifications & partnerships"
            description="Credentials that keep our media, analytics, and cloud work aligned to platform best practices."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {recognition.map((item) => {
              const accent = item.color;

              return (
                <Card 
                  key={item.title}
                  className="p-6 glass-3d-hover relative overflow-hidden flex flex-col transition-all duration-300 border"
                  style={{
                    backgroundColor: `${accent}05`,
                    borderColor: `${accent}25`
                  }}
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full opacity-20 blur-[18px]" style={{ backgroundColor: accent }} />
                  
                  <div className="relative z-10">
                    <p className="font-display text-[15px] font-bold text-[var(--text-primary)]" style={{ color: accent }}>
                      {item.title}
                    </p>
                    <p className="mt-2 text-[12.5px] text-[var(--text-secondary)] font-medium leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
