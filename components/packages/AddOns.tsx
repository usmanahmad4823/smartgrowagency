import { addOns, formatPKR } from "@/lib/pricing";

export function AddOns() {
  const addonColors = [
    "#2997ff", // Blue
    "#30d158", // Emerald
    "#ff9f0a", // Orange
    "#bf5af2", // Purple
    "#ff375f", // Pink
    "#64d2ff"  // Cyan
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {addOns.map((addon, idx) => {
        const color = addonColors[idx % addonColors.length];

        return (
          <div 
            key={addon.name} 
            className="group glass-card glass-3d-hover relative overflow-hidden flex items-center justify-between p-5 rounded-[16px] border transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: `${color}05`,
              borderColor: `${color}25`
            }}
          >
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full opacity-25 blur-[18px]" style={{ backgroundColor: color }} />

            <p className="font-display text-[14px] font-bold text-[var(--text-primary)] relative z-10">{addon.name}</p>
            <div className="text-right relative z-10">
              <span className="font-display text-[15px] font-bold" style={{ color: color }}>{formatPKR(addon.price)}</span>
              {addon.isMonthly && <span className="text-[11px] text-[var(--text-tertiary)] block font-semibold -mt-0.5">/mo</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
