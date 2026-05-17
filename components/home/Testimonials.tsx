"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/testimonials";
import { Stars } from "@/components/ui/Stars";
import { containerVariant, fadeUpItem } from "@/lib/motion";

export function Testimonials() {
  const cardGlows = [
    "from-blue-500/10 to-transparent",
    "from-orange-500/10 to-transparent",
    "from-emerald-500/10 to-transparent",
    "from-purple-500/10 to-transparent",
    "from-pink-500/10 to-transparent",
  ];

  const cardBorders = [
    "hover:border-blue-500/30",
    "hover:border-orange-500/30",
    "hover:border-emerald-500/30",
    "hover:border-purple-500/30",
    "hover:border-pink-500/30",
  ];

  const iconTints = [
    "text-blue-400",
    "text-orange-400",
    "text-emerald-400",
    "text-purple-400",
    "text-pink-400",
  ];

  return (
    <section id="testimonials" className="section-y glass-panel">
      <div className="container-content">
        <SectionHeader
          eyebrow="TESTIMONIALS"
          title="Trusted by our clients"
          description="Teams stay because the work holds up—and because we treat your revenue like it is our own."
        />

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((item, idx) => (
            <motion.div 
              key={item.name} 
              variants={fadeUpItem}
              className="h-full"
            >
              <div 
                className={`glass-card glass-3d-hover relative overflow-hidden h-full p-8 transition-all duration-500 border border-white/5 hover:scale-[1.02] flex flex-col justify-between ${cardBorders[idx % cardBorders.length]}`}
              >
                {/* Creative Dynamic Background Gradient Glows */}
                <div 
                  className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${cardGlows[idx % cardGlows.length]} opacity-60 blur-[30px] transition-transform duration-700`}
                />
                <div 
                  className={`pointer-events-none absolute -left-12 -bottom-12 h-28 w-28 rounded-full bg-gradient-to-tr ${cardGlows[(idx + 2) % cardGlows.length]} opacity-20 blur-[25px] transition-transform duration-700`}
                />

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <Stars />
                    {/* Unique Stylized Double Quote Glyph */}
                    <span className={`font-serif text-[42px] leading-none select-none opacity-20 font-bold ${iconTints[idx % iconTints.length]}`}>
                      ”
                    </span>
                  </div>
                  <p className="font-display text-[14.5px] leading-[1.65] text-[var(--text-primary)] italic relative z-10 font-medium">
                    “{item.quote}”
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-6 border-t border-white/5 mt-5">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.25)] shrink-0">
                    <Image 
                      src={item.avatar} 
                      alt={item.name} 
                      fill 
                      className="object-cover" 
                      sizes="44px" 
                    />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold tracking-tight text-[var(--text-primary)]">{item.name}</p>
                    <p className="text-[11px] text-[var(--text-tertiary)]">{item.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-[12px] text-[var(--text-tertiary)]"
        >
          Want similar outcomes for your funnel?{" "}
          <a className="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)] font-semibold transition-colors" href="/contact">
            Tell us what you are launching →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
