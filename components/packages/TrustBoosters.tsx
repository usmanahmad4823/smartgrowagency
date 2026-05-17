import { ShieldCheck, FileCheck, Users, Banknote } from "lucide-react";

export function TrustBoosters() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="flex flex-col items-center text-center space-y-3 p-6 glass-card rounded-[18px]">
        <div className="h-10 w-10 rounded-full glass-panel-secondary flex items-center justify-center border border-[var(--border-subtle)]">
          <Banknote size={18} className="text-[var(--text-primary)]" />
        </div>
        <div>
          <p className="font-display text-[14px] font-semibold text-[var(--text-primary)]">No hidden charges</p>
          <p className="mt-1 text-[11px] italic text-[var(--text-tertiary)]">jo dikhta hai wahi lagta hai</p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center space-y-3 p-6 glass-card rounded-[18px]">
        <div className="h-10 w-10 rounded-full glass-panel-secondary flex items-center justify-center border border-[var(--border-subtle)]">
          <FileCheck size={18} className="text-[var(--text-primary)]" />
        </div>
        <div>
          <p className="font-display text-[14px] font-semibold text-[var(--text-primary)]">Contract & NDA</p>
          <p className="mt-1 text-[11px] italic text-[var(--text-tertiary)]">Kaam shuru hone se pehle sign</p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center space-y-3 p-6 glass-card rounded-[18px]">
        <div className="h-10 w-10 rounded-full glass-panel-secondary flex items-center justify-center border border-[var(--border-subtle)]">
          <Users size={18} className="text-[var(--text-primary)]" />
        </div>
        <div>
          <p className="font-display text-[14px] font-semibold text-[var(--text-primary)]">Local Team</p>
          <p className="mt-1 text-[11px] italic text-[var(--text-tertiary)]">Islamabad / Lahore / Karachi</p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center space-y-3 p-6 glass-card rounded-[18px]">
        <div className="h-10 w-10 rounded-full glass-panel-secondary flex items-center justify-center border border-[var(--border-subtle)]">
          <ShieldCheck size={18} className="text-[var(--accent-blue)]" />
        </div>
        <div>
          <p className="font-display text-[14px] font-semibold text-[var(--text-primary)]">100% Satisfaction</p>
          <p className="mt-1 text-[11px] italic text-[var(--accent-blue)]">ya paisay wapas</p>
        </div>
      </div>
    </div>
  );
}
