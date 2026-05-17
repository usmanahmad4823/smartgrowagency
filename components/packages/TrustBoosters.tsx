import { ShieldCheck, FileCheck, Users, Banknote } from "lucide-react";

export function TrustBoosters() {
  const boosters = [
    {
      title: "No hidden charges",
      subtitle: "jo dikhta hai wahi lagta hai",
      icon: Banknote,
      color: "#2997ff" // Blue
    },
    {
      title: "Contract & NDA",
      subtitle: "Kaam shuru hone se pehle sign",
      icon: FileCheck,
      color: "#30d158" // Emerald
    },
    {
      title: "Local Team",
      subtitle: "Islamabad / Lahore / Karachi",
      icon: Users,
      color: "#ff9f0a" // Orange
    },
    {
      title: "100% Satisfaction",
      subtitle: "ya paisay wapas",
      icon: ShieldCheck,
      color: "#bf5af2" // Purple
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {boosters.map((item, idx) => {
        const Icon = item.icon;
        
        return (
          <div 
            key={idx}
            className="flex flex-col items-center text-center space-y-3.5 p-6 glass-card glass-3d-hover relative overflow-hidden transition-all duration-300 border"
            style={{
              backgroundColor: `${item.color}05`,
              borderColor: `${item.color}25`
            }}
          >
            {/* Subtle Top-Right Glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-20 blur-[20px]" style={{ backgroundColor: item.color }} />

            {/* Solid Vibrant Circle Icon Box */}
            <div 
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-md transition-transform duration-300"
              style={{ 
                backgroundColor: item.color,
                boxShadow: `inset 0 1px 1px rgba(255,255,255,0.4), 0 4px 10px ${item.color}30`
              }}
            >
              <Icon size={18} strokeWidth={2} aria-hidden />
            </div>

            <div className="relative z-10">
              <p className="font-display text-[14.5px] font-bold text-[var(--text-primary)]">{item.title}</p>
              <p className="mt-1 text-[11.5px] font-bold italic tracking-wide" style={{ color: item.color }}>
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
