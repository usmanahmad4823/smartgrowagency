"use client";

import { Check, X } from "lucide-react";

const features = [
  { label: "Professional Website", starter: "Up to 5 pages", growth: "Up to 10 pages", enterprise: "Unlimited pages" },
  { label: "WhatsApp Integration", starter: true, growth: true, enterprise: true },
  { label: "Google Business Profile", starter: true, growth: true, enterprise: true },
  { label: "Facebook & Instagram Setup", starter: true, growth: true, enterprise: true },
  { label: "SEO Optimization", starter: "On-page only", growth: "On-page + Off-page", enterprise: "Advanced" },
  { label: "Social Media Posts", starter: "8 posts/mo", growth: "20 posts/mo", enterprise: "Custom volume" },
  { label: "Monthly Performance Report", starter: true, growth: true, enterprise: "Weekly calls" },
  { label: "Paid Ads Management", starter: false, growth: true, enterprise: "Priority" },
  { label: "Custom Graphic Design", starter: false, growth: "4 designs/mo", enterprise: "Unlimited requests" },
  { label: "Email Marketing", starter: false, growth: "1 campaign/mo", enterprise: "Custom flows" },
  { label: "WhatsApp Broadcast", starter: false, growth: true, enterprise: "Advanced API" },
  { label: "Strategy Calls", starter: false, growth: "Bi-weekly", enterprise: "Weekly" },
  { label: "Brand Identity", starter: false, growth: "Logo + Colors", enterprise: "Full Brand Kit" },
  { label: "Video Editing", starter: false, growth: false, enterprise: "4 Reels/mo" },
  { label: "App Development", starter: false, growth: false, enterprise: true },
];

export function ComparisonTable() {
  return (
    <div className="w-full overflow-x-auto pb-6">
      <div className="min-w-[700px] border border-[var(--border-subtle)] rounded-[18px] bg-[var(--bg-secondary)] overflow-hidden">
        <div className="grid grid-cols-4 border-b border-[var(--border-subtle)] bg-[var(--glass-bg)] px-6 py-4 sticky top-0">
          <div className="font-display text-[14px] font-semibold text-[var(--text-primary)]">Features</div>
          <div className="font-display text-[14px] font-semibold text-[var(--text-primary)] text-center">Starter</div>
          <div className="font-display text-[14px] font-semibold text-[var(--accent-blue)] text-center">Growth</div>
          <div className="font-display text-[14px] font-semibold text-[var(--text-primary)] text-center">Enterprise</div>
        </div>
        <div className="divide-y divide-[var(--border-subtle)]">
          {features.map((feature, i) => (
            <div key={i} className="grid grid-cols-4 px-6 py-4 hover:bg-[var(--bg-primary)] transition-colors">
              <div className="text-[13px] text-[var(--text-secondary)] font-medium flex items-center">
                {feature.label}
              </div>
              <div className="flex items-center justify-center text-[13px] text-[var(--text-secondary)]">
                {typeof feature.starter === "boolean" ? (
                  feature.starter ? <Check size={16} className="text-[var(--text-primary)]" /> : <X size={16} className="text-[var(--text-tertiary)] opacity-50" />
                ) : (
                  feature.starter
                )}
              </div>
              <div className="flex items-center justify-center text-[13px] text-[var(--text-primary)] font-medium">
                {typeof feature.growth === "boolean" ? (
                  feature.growth ? <Check size={16} className="text-[var(--accent-blue)]" /> : <X size={16} className="text-[var(--text-tertiary)] opacity-50" />
                ) : (
                  feature.growth
                )}
              </div>
              <div className="flex items-center justify-center text-[13px] text-[var(--text-secondary)]">
                {typeof feature.enterprise === "boolean" ? (
                  feature.enterprise ? <Check size={16} className="text-[var(--text-primary)]" /> : <X size={16} className="text-[var(--text-tertiary)] opacity-50" />
                ) : (
                  feature.enterprise
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
