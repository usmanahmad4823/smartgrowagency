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
  return (
    <div className="glass-panel">
      <section className="section-y border-b border-[var(--border-subtle)]">
        <div className="container-content max-w-4xl space-y-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">SERVICES</p>
          <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-[-0.022em] text-[var(--text-primary)] md:text-[56px]">
            Everything your brand needs to win online—without the vendor maze.
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
            Pick a lane to see how we work with your team, what you get and where it shows up in your funnel. Every
            engagement ends with a clear next step—usually a proposal you can approve in one sitting.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary">
              Get Free Proposal
            </Button>
            <p className="text-[14px] text-[var(--text-tertiary)]">Join 50+ brands who grew with Smart Grow Agency</p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-content space-y-12">
          <SectionHeader
            eyebrow="DEEP DIVES"
            title="Ten practices. One growth engine."
            description="You choose the entry point—we align specialists, tooling, and reporting so every sprint ladders to revenue you can defend in a boardroom."
          />

          <div className="space-y-16">
            {services.map((service) => (
              <section key={service.slug} id={service.slug} className="scroll-mt-28">
                <Card className="space-y-6 p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <service.icon className="h-7 w-7 text-[var(--text-secondary)]" aria-hidden />
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: service.accent }}
                      aria-hidden
                    />
                    <h2 className="font-display text-[26px] font-semibold tracking-[-0.02em] md:text-[32px]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] md:text-[17px]">
                    {service.description}
                  </p>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                        What you get
                      </h3>
                      <ul className="mt-4 space-y-3 text-[16px] text-[var(--text-secondary)]">
                        {service.features.map((f) => (
                          <li key={f} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-blue)]" aria-hidden />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                        Where it shows up
                      </h3>
                      <ul className="mt-4 space-y-3 text-[16px] text-[var(--text-secondary)]">
                        {service.useCases.map((u) => (
                          <li key={u} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" aria-hidden />
                            <span>{u}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 border-t border-[var(--border-subtle)] pt-6">
                    <Button href="/contact" variant="primary">
                      Plan this with us
                      <ArrowUpRight size={18} />
                    </Button>
                    <Link className="text-[15px] text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]" href="/portfolio">
                      See related work →
                    </Link>
                  </div>
                </Card>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y glass-panel-secondary">
        <div className="container-content space-y-10">
          <SectionHeader
            eyebrow="INVESTMENT"
            title="Pricing that scales with your ambition."
            description="Most clients start with a scoped sprint. When you are ready to scale, we graduate you into a retained pod with predictable throughput."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className="flex h-full flex-col gap-4 p-7">
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                  {tier.name}
                </p>
                <p className="font-display text-[24px] font-semibold tracking-[-0.02em]">{tier.price}</p>
                <p className="text-[13px] text-[var(--text-secondary)]">{tier.blurb}</p>
                <ul className="mt-2 space-y-2 text-[15px] text-[var(--text-secondary)]">
                  {tier.items.map((item) => (
                    <li key={item} className="text-[12px]">• {item}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Button href="/contact" variant="ghost" className="w-full justify-center">
                    Request custom quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
