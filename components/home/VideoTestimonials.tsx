"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUpVariant } from "@/lib/motion";

const videos = [
  {
    title: "How Helio doubled demo volume in 45 days",
    thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Vertex Labs on AI automation without chaos",
    thumb: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
  {
    title: "Brightline: paid media that finally matches the story",
    thumb: "https://img.youtube.com/vi/3GwjfUFyY6M/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=3GwjfUFyY6M",
  },
];

export function VideoTestimonials() {
  const cardColors = [
    "#2997ff", // Blue
    "#30d158", // Emerald
    "#ff9f0a"  // Orange
  ];

  return (
    <section className="section-y glass-panel-secondary">
      <div className="container-content">
        <SectionHeader
          eyebrow="VIDEO"
          title="Hear how leaders run growth with Smart Grow Agency"
          description="Short conversations on what changed, what it cost, and what they would do again—embed-ready for your review."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {videos.map((video, idx) => {
            const color = cardColors[idx % cardColors.length];

            return (
              <motion.article 
                key={video.title} 
                variants={fadeUpVariant} 
                className="glass-card glass-3d-hover relative overflow-hidden p-0 transition-all duration-300 border"
                style={{
                  backgroundColor: `${color}05`,
                  borderColor: `${color}25`
                }}
              >
                {/* Background Soft Glow Orb */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-20 blur-[20px]" style={{ backgroundColor: color }} />

                <Link href={video.href} target="_blank" rel="noreferrer" className="group block relative z-10">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image src={video.thumb} alt={video.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width:768px) 100vw, 33vw" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div 
                        className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                        style={{ 
                          backgroundColor: color,
                          boxShadow: `inset 0 1px 1px rgba(255,255,255,0.4), 0 6px 15px ${color}50`
                        }}
                      >
                        <Play size={22} fill="white" className="ml-1" aria-hidden />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-display text-[14px] font-bold leading-snug text-[var(--text-primary)]">
                      {video.title}
                    </p>
                    <p className="mt-2.5 text-[11px] font-bold uppercase tracking-wider" style={{ color: color }}>
                      Watch on YouTube →
                    </p>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-[12px] font-semibold text-[var(--text-tertiary)]"
        >
          Prefer a private walkthrough?{" "}
          <Link className="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]" href="/contact">
            Book a live session →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
