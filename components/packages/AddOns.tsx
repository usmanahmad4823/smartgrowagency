import { addOns, formatPKR } from "@/lib/pricing";

export function AddOns() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {addOns.map((addon) => (
        <div key={addon.name} className="flex items-center justify-between p-5 rounded-[16px] border border-[var(--border-subtle)] bg-[var(--glass-bg)] hover:glass-panel-secondary transition-colors">
          <p className="font-display text-[14px] font-semibold text-[var(--text-primary)]">{addon.name}</p>
          <div className="text-right">
            <span className="font-display text-[15px] font-bold text-[var(--text-primary)]">{formatPKR(addon.price)}</span>
            {addon.isMonthly && <span className="text-[11px] text-[var(--text-tertiary)] block -mt-1">/mo</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
