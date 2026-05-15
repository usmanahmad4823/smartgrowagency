"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MonthlyPackage, formatPKR } from "@/lib/pricing";

export function PricingCard({ pkg }: { pkg: MonthlyPackage }) {
  const isPopular = pkg.isPopular;

  return (
    <Card
      className={`relative flex flex-col space-y-6 p-6 md:p-8 ${
        isPopular ? "border-[var(--accent-blue)] shadow-[0_0_40px_-15px_var(--accent-blue)]" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent-blue)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          Most Popular
        </div>
      )}
      <div>
        <h3 className="font-display text-[16px] font-semibold text-[var(--text-primary)]">{pkg.name}</h3>
        <div className="mt-4 flex items-baseline gap-1">
          {pkg.price > 0 ? (
            <>
              <span className="font-display text-[32px] font-bold tracking-tight text-[var(--text-primary)]">
                {formatPKR(pkg.price)}
              </span>
              <span className="text-[13px] text-[var(--text-tertiary)]">{pkg.period}</span>
            </>
          ) : (
            <span className="font-display text-[32px] font-bold tracking-tight text-[var(--text-primary)]">
              Custom Quote
            </span>
          )}
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-[var(--text-secondary)]">{pkg.description}</p>
      </div>

      <Button
        href="/contact"
        variant={isPopular ? "primary" : "ghost"}
        className={!isPopular ? "w-full justify-center border border-[var(--border-subtle)]" : "w-full justify-center"}
      >
        Get Started
      </Button>

      <div className="flex-1 space-y-4 pt-4">
        <ul className="space-y-3 text-[13px]">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              {feature.included ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-blue)]" />
              ) : (
                <X className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-tertiary)] opacity-50" />
              )}
              <span className={feature.included ? "text-[var(--text-secondary)]" : "text-[var(--text-tertiary)] opacity-60"}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
