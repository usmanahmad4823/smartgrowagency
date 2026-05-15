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
  },
  {
    title: "Velocity with guardrails",
    body: "We ship fast, but never at the expense of trust, accessibility, or measurement.",
    icon: Zap,
  },
  {
    title: "One team surface",
    body: "You interface with leads who own outcomes—not a rotating cast of junior staffers.",
    icon: Users2,
  },
  {
    title: "Craft you can feel",
    body: "The details matter: motion, typography, and performance are part of the product.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--bg-primary)]">
      <section className="section-y border-b border-[var(--border-subtle)]">
        <div className="container-content max-w-4xl space-y-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">ABOUT</p>
          <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-[-0.022em] text-[var(--text-primary)] md:text-[56px]">
            We exist so your best ideas do not die in a backlog.
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
            Smart Grow Agency is a senior-led digital agency for teams that want Apple-caliber craft with operator-grade
            accountability. You get one pod spanning strategy, design, engineering, and media—so you can ship the next
            chapter without losing weeks to coordination tax.
          </p>
          <Button href="/contact" variant="primary">
            Meet us on a call
          </Button>
        </div>
      </section>

      <section className="section-y bg-[var(--bg-secondary)]">
        <div className="container-content grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">STORY</p>
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-[-0.02em] md:text-[38px]">
              How we started
            </h2>
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
              We launched after watching brilliant operators drown in mismatched vendors: a fast site with weak analytics,
              beautiful ads with a slow funnel, automation that terrified legal. Smart Grow Agency was built as the antidote—a
              single accountable team that speaks revenue, creative, and systems in the same meeting.
            </p>
            <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">
              Today we partner with founders, CMOs, and product leaders who need a partner that ships like an owner. If
              that is you, we should talk.
            </p>
          </div>
          <Card className="space-y-4 p-8">
            <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">Mission</p>
            <p className="font-display text-[28px] font-semibold leading-snug tracking-[-0.02em] text-[var(--text-primary)]">
              Help ambitious brands turn attention into durable revenue—with systems that scale.
            </p>
            <p className="text-[16px] text-[var(--text-secondary)]">
              Ready to see how that shows up for your roadmap?{" "}
              <Link className="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]" href="/contact">
                Request a proposal →
              </Link>
            </p>
          </Card>
        </div>
      </section>


      <section className="section-y bg-[var(--bg-secondary)]">
        <div className="container-content space-y-10">
          <SectionHeader
            eyebrow="VALUES"
            title="Principles we will not compromise."
            description="They keep quality high and decisions fast—so you always know what we optimize for."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="space-y-3 p-7">
                <value.icon className="h-7 w-7 text-[var(--accent-blue)]" aria-hidden />
                <h3 className="font-display text-[19px] font-semibold">{value.title}</h3>
                <p className="text-[13px] text-[var(--text-secondary)]">{value.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-content space-y-8">
          <SectionHeader
            eyebrow="RECOGNITION"
            title="Certifications & partnerships"
            description="Credentials that keep our media, analytics, and cloud work aligned to platform best practices."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card className="p-6 text-[12px] text-[var(--text-secondary)]">
              <p className="font-display text-[14px] font-semibold text-[var(--text-primary)]">Google Partner</p>
              <p className="mt-2">Search, Performance Max, and measurement reviews aligned to Google standards.</p>
            </Card>
            <Card className="p-6 text-[12px] text-[var(--text-secondary)]">
              <p className="font-display text-[14px] font-semibold text-[var(--text-primary)]">Meta Business Partner</p>
              <p className="mt-2">Creative testing, catalog ads, and signal quality tuned for iOS-era attribution.</p>
            </Card>
            <Card className="p-6 text-[12px] text-[var(--text-secondary)]">
              <p className="font-display text-[14px] font-semibold text-[var(--text-primary)]">HubSpot & CRM stack</p>
              <p className="mt-2">Lifecycle architecture across HubSpot, Salesforce, and modern data warehouses.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
