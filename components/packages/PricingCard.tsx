"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MonthlyPackage, formatPKR } from "@/lib/pricing";

export function PricingCard({ pkg }: { pkg: MonthlyPackage }) {
  const isPopular = pkg.isPopular;
  
  // Assign gorgeous neon brand color mapping
  const colorMap: Record<string, string> = {
    starter: "#2997ff",    // Blue
    growth: "#30d158",     // Emerald
    enterprise: "#ff9f0a"  // Orange
  };
  const accent = colorMap[pkg.id] || "#2997ff";

  return (
    <Card
      className={`glass-3d-hover relative flex flex-col space-y-6 p-6 md:p-8 transition-all duration-300 border ${
        isPopular ? "shadow-[0_0_40px_-15px_rgba(48,209,88,0.25)]" : ""
      }`}
      style={{
        backgroundColor: `${accent}05`,
        borderColor: isPopular ? `${accent}50` : `${accent}25`
      }}
    >
      {/* Background Soft Glow Orb */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-[25px]" style={{ backgroundColor: accent }} />

      {isPopular && (
        <div 
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md"
          style={{ 
            backgroundColor: accent,
            boxShadow: `0 4px 12px ${accent}40`
          }}
        >
          Most Popular
        </div>
      )}

      <div>
        <h3 className="font-display text-[14px] font-bold uppercase tracking-wider text-[var(--text-tertiary)]">{pkg.name}</h3>
        <div className="mt-4 flex items-baseline gap-1">
          {pkg.price > 0 ? (
            <>
              <span className="font-display text-[32px] font-bold tracking-tight" style={{ color: accent }}>
                {formatPKR(pkg.price)}
              </span>
              <span className="text-[13px] text-[var(--text-tertiary)] font-medium">{pkg.period}</span>
            </>
          ) : (
            <span className="font-display text-[32px] font-bold tracking-tight" style={{ color: accent }}>
              Custom Quote
            </span>
          )}
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-[var(--text-secondary)] font-medium">{pkg.description}</p>
      </div>

      <div className="relative z-10">
        <Button
          href="/contact"
          variant={isPopular ? "primary" : "ghost"}
          className="w-full justify-center text-[12px] font-bold"
        >
          Get Started
        </Button>
      </div>

      <div className="flex-1 space-y-4 pt-4 border-t border-white/5 relative z-10">
        <ul className="space-y-3.5 text-[13px] font-medium">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              {feature.included ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} />
              ) : (
                <X className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-tertiary)] opacity-30" />
              )}
              <span className={feature.included ? "text-[var(--text-secondary)]" : "text-[var(--text-tertiary)] opacity-40"}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
