import { Landmark, Wallet, CircleDollarSign } from "lucide-react";

export function PaymentMethods() {
  return (
    <div className="rounded-[24px] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-8 md:p-12">
      <div className="max-w-2xl">
        <h3 className="font-display text-[24px] font-bold tracking-tight md:text-[28px]">Flexible payments. Zero hassle.</h3>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-[14px] bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
            <Wallet size={20} className="text-[#00A950]" />
            <span className="text-[13px] font-semibold">EasyPaisa</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-[14px] bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
            <Wallet size={20} className="text-[#EF4136]" />
            <span className="text-[13px] font-semibold">JazzCash</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-[14px] bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
            <Landmark size={20} className="text-[var(--text-primary)]" />
            <span className="text-[13px] font-semibold">Bank Transfer</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-[14px] bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
            <CircleDollarSign size={20} className="text-[#26A17B]" />
            <span className="text-[13px] font-semibold">USDT / Crypto</span>
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <p className="text-[14px] font-medium text-[var(--text-secondary)]">
            50% advance to start. 50% on delivery. No hidden charges.
          </p>
          <p className="text-[12px] text-[var(--text-tertiary)]">
            International clients can pay in USD/GBP via PayPal or USDT.
          </p>
        </div>
      </div>
    </div>
  );
}
