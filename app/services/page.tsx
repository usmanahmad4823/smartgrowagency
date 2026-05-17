import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { pricingTiers, services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services built to lift pipeline, retention, and brand equity",
  description:
    "Explore Smart Grow Agency services spanning web, AI automation, paid media, SEO, creative, and lifecycle marketing—delivered as one accountable team.",
};

export default function ServicesPage() {
  const pricingColors = {
    Starter: "#2997ff",
    Growth: "#30d158",
    Enterprise: "#ff9f0a"
  };

  return (
    <div className="glass-panel">
      {/* Hero Header Section */}
      <section className="section-y border-b border-[var(--border-subtle)] relative overflow-hidden">
        {/* Colorful Mesh Glows in Hero */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[60px]" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[60px]" />

        <div className="container-content max-w-4xl space-y-6 relative z-10">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">SERVICES</p>
          <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-tight text-[var(--text-primary)] md:text-[56px]">
            Everything your brand needs to win online—without the vendor maze.
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] font-medium">
            Pick a lane to see how we work with your team, what you get and where it shows up in your funnel. Every
            engagement ends with a clear next step—usually a proposal you can approve in one sitting.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
            <Button href="/contact" variant="primary" className="shadow-[0_8px_20px_rgba(41,151,255,0.25)]">
              Get Free Proposal
            </Button>
            <p className="text-[13px] font-semibold text-[var(--text-tertiary)]">Join 50+ brands who grew with Smart Grow Agency</p>
          </div>
        </div>
      </section>

      {/* Deep Dives Sections */}
      <section className="section-y">
        <div className="container-content space-y-12">
          <SectionHeader
            eyebrow="DEEP DIVES"
            title="Ten practices. One growth engine."
            description="You choose the entry point—we align specialists, tooling, and reporting so every sprint ladders to revenue you can defend in a boardroom."
          />

          <div className="space-y-16">
            {services.map((service) => {
              const accent = service.accent;

              return (
                <section key={service.slug} id={service.slug} className="scroll-mt-28">
                  <Card 
                    className="space-y-6 p-8 md:p-10 glass-3d-hover relative overflow-hidden transition-all duration-300 border"
                    style={{
                      backgroundColor: `${accent}05`,
                      borderColor: `${accent}25`
                    }}
                  >
                    {/* Ambient Background Glowing Orbs */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-35 blur-[45px]" style={{ backgroundColor: accent }} />
                    <div className="pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full opacity-15 blur-[40px]" style={{ backgroundColor: accent }} />

                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-4 relative z-10">
                      {/* Solid Vibrant Circle Icon Box */}
                      <div 
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md transition-transform duration-300"
                        style={{ 
                          backgroundColor: accent,
                          boxShadow: `inset 0 1px 1px rgba(255,255,255,0.4), 0 6px 15px ${accent}40`
                        }}
                      >
                        <service.icon size={20} strokeWidth={2} />
                      </div>
                      <h2 className="font-display text-[26px] font-bold tracking-tight md:text-[32px] text-[var(--text-primary)]">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] font-medium md:text-[17px] relative z-10">
                      {service.description}
                    </p>

                    {/* Lists Grid */}
                    <div className="grid gap-8 md:grid-cols-2 relative z-10 pt-2">
                      <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-tertiary)] pb-2.5 border-b border-white/5">
                          What you get
                        </h3>
                        <ul className="mt-4 space-y-3.5 text-[14.5px] text-[var(--text-secondary)] font-medium">
                          {service.features.map((f) => (
                            <li key={f} className="flex gap-3 items-start">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: accent }} aria-hidden />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-tertiary)] pb-2.5 border-b border-white/5">
                          Where it shows up
                        </h3>
                        <ul className="mt-4 space-y-3.5 text-[14.5px] text-[var(--text-secondary)] font-medium">
                          {service.useCases.map((u) => (
                            <li key={u} className="flex gap-3 items-start">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0 opacity-60" style={{ backgroundColor: accent }} aria-hidden />
                              <span>{u}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="flex flex-wrap items-center gap-5 border-t border-white/5 pt-6 mt-2 relative z-10">
                      <Button href="/contact" variant="primary" className="shadow-lg">
                        Plan this with us
                        <ArrowUpRight size={18} />
                      </Button>
                      <Link 
                        className="text-[14.5px] font-bold transition-colors hover:opacity-80" 
                        style={{ color: accent }} 
                        href="/portfolio"
                      >
                        See related work →
                      </Link>
                    </div>
                  </Card>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing / Investment Tiers */}
      <section className="section-y glass-panel-secondary">
        <div className="container-content space-y-10">
          <SectionHeader
            eyebrow="INVESTMENT"
            title="Pricing that scales with your ambition."
            description="Most clients start with a scoped sprint. When you are ready to scale, we graduate you into a retained pod with predictable throughput."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => {
              const tierColor = pricingColors[tier.name as keyof typeof pricingColors] || "#2997ff";

              return (
                <Card 
                  key={tier.name} 
                  className="flex h-full flex-col gap-4 p-7 glass-3d-hover relative overflow-hidden transition-all duration-300 border"
                  style={{
                    backgroundColor: `${tierColor}05`,
                    borderColor: `${tierColor}25`
                  }}
                >
                  {/* Background Soft Glow Orb */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-[25px]" style={{ backgroundColor: tierColor }} />

                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-tertiary)] relative z-10">
                    {tier.name}
                  </p>
                  <p className="font-display text-[26px] font-bold tracking-tight relative z-10" style={{ color: tierColor }}>
                    {tier.price}
                  </p>
                  <p className="text-[13px] text-[var(--text-secondary)] font-medium relative z-10">{tier.blurb}</p>
                  <ul className="mt-2 space-y-2.5 text-[13px] text-[var(--text-secondary)] font-medium relative z-10">
                    {tier.items.map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--text-tertiary)] shrink-0" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 relative z-10">
                    <Button href="/contact" variant="ghost" className="w-full justify-center text-[12px] font-bold">
                      Request custom quote
                    </Button>
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
