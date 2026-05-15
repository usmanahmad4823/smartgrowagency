"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { OneTimePackage, formatPKR } from "@/lib/pricing";

export function OneTimeCard({ pkg }: { pkg: OneTimePackage }) {
  return (
    <Card className="flex flex-col space-y-6 p-6 md:p-8">
      <div>
        <h3 className="font-display text-[16px] font-semibold text-[var(--text-primary)]">{pkg.name}</h3>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="font-display text-[32px] font-bold tracking-tight text-[var(--text-primary)]">
            {formatPKR(pkg.price)}
          </span>
        </div>
      </div>

      <Button href="/contact" variant="ghost" className="w-full justify-center border border-[var(--border-subtle)]">
        Get Started
      </Button>

      <div className="flex-1 space-y-4 pt-4 border-t border-[var(--border-subtle)]">
        <ul className="space-y-3 text-[13px]">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-blue)]" />
              <span className="text-[var(--text-secondary)]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
