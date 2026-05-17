"use client";

import { PricingCard } from "@/components/packages/PricingCard";
import { monthlyPackages } from "@/lib/pricing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function PackagesPreview() {
  return (
    <section className="section-y glass-panel-secondary">
      <div className="container-content space-y-12">
        <SectionHeader
          eyebrow="PRICING"
          title="Honest pricing. Extraordinary results."
          description="Packages designed for Pakistani businesses — from startups to corporates."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {monthlyPackages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button href="/packages" variant="ghost" className="border border-[var(--border-subtle)] px-6 py-2">
            View full packages, one-time projects & add-ons →
          </Button>
        </div>
      </div>
    </section>
  );
}
