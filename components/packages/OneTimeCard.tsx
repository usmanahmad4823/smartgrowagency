"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { OneTimePackage, formatPKR } from "@/lib/pricing";

export function OneTimeCard({ pkg }: { pkg: OneTimePackage }) {
  // Assign gorgeous neon brand color mapping
  const colorMap: Record<string, string> = {
    basic: "#2997ff",     // Blue
    business: "#30d158",  // Emerald
    ecommerce: "#ff9f0a" // Orange
  };
  const accent = colorMap[pkg.id] || "#2997ff";

  return (
    <Card 
      className="glass-3d-hover relative flex flex-col space-y-6 p-6 md:p-8 transition-all duration-300 border"
      style={{
        backgroundColor: `${accent}05`,
        borderColor: `${accent}25`
      }}
    >
      {/* Background Soft Glow Orb */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-[25px]" style={{ backgroundColor: accent }} />

      <div>
        <h3 className="font-display text-[14px] font-bold uppercase tracking-wider text-[var(--text-tertiary)]">{pkg.name}</h3>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="font-display text-[32px] font-bold tracking-tight" style={{ color: accent }}>
            {formatPKR(pkg.price)}
          </span>
        </div>
      </div>

      <div className="relative z-10">
        <Button 
          href="/contact" 
          variant="ghost" 
          className="w-full justify-center text-[12px] font-bold"
        >
          Get Started
        </Button>
      </div>

      <div className="flex-1 space-y-4 pt-4 border-t border-white/5 relative z-10">
        <ul className="space-y-3.5 text-[13px] font-medium">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} />
              <span className="text-[var(--text-secondary)]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
