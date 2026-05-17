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
          <Button href="/packages" variant="primary" className="px-8 py-3 text-[12px] font-bold">
            View full packages, one-time projects & add-ons →
          </Button>
        </div>
      </div>
    </section>
  );
}
