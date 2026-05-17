import { Landmark, Wallet, CircleDollarSign } from "lucide-react";

export function PaymentMethods() {
  const methods = [
    { name: "EasyPaisa", icon: Wallet, color: "#00A950" },
    { name: "JazzCash", icon: Wallet, color: "#EF4136" },
    { name: "Bank Transfer", icon: Landmark, color: "#2997ff" },
    { name: "USDT / Crypto", icon: CircleDollarSign, color: "#26A17B" }
  ];

  return (
    <div className="rounded-[24px] border border-white/10 glass-panel-secondary p-8 md:p-12 relative overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-[50px]" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/5 blur-[50px]" />

      <div className="max-w-2xl relative z-10">
        <h3 className="font-display text-[24px] font-bold tracking-tight md:text-[28px] text-[var(--text-primary)]">
          Flexible payments. Zero hassle.
        </h3>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {methods.map((m) => {
            const Icon = m.icon;
            return (
              <div 
                key={m.name} 
                className="flex items-center gap-3 p-4 rounded-[14px] border glass-3d-hover transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: `${m.color}05`,
                  borderColor: `${m.color}25`
                }}
              >
                {/* Solid Colored Icon Container */}
                <div 
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-sm"
                  style={{ backgroundColor: m.color }}
                >
                  <Icon size={16} strokeWidth={2} />
                </div>
                <span className="text-[13px] font-bold tracking-tight text-[var(--text-primary)]">{m.name}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 space-y-2.5">
          <p className="text-[14px] font-bold text-[var(--text-secondary)]">
            50% advance to start. 50% on delivery. No hidden charges.
          </p>
          <p className="text-[12px] font-semibold text-[var(--text-tertiary)]">
            International clients can pay in USD/GBP via PayPal or USDT.
          </p>
        </div>
      </div>
    </div>
  );
}
