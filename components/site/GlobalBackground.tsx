"use client";

import { motion } from "framer-motion";

export function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Base radial gradient */}
      <div className="absolute inset-0" style={{ background: "var(--hero-radial)" }} />
      
      {/* Animated Blob 1 */}
      <motion.div
        className="absolute -left-[10%] top-[10%] h-[50vh] w-[50vw] rounded-full opacity-60 blur-[100px] md:blur-[120px]"
        style={{ backgroundColor: "var(--hero-blob)" }}
        animate={{
          x: ["0%", "15%", "0%"],
          y: ["0%", "20%", "0%"],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated Blob 2 */}
      <motion.div
        className="absolute -right-[10%] top-[40%] h-[60vh] w-[60vw] rounded-full opacity-60 blur-[120px] md:blur-[140px]"
        style={{ backgroundColor: "var(--hero-blob-strong)" }}
        animate={{
          x: ["0%", "-15%", "0%"],
          y: ["0%", "-10%", "0%"],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Animated Blob 3 */}
      <motion.div
        className="absolute bottom-[-10%] left-[20%] h-[40vh] w-[50vw] rounded-full opacity-60 blur-[100px] md:blur-[120px]"
        style={{ backgroundColor: "var(--hero-blob)" }}
        animate={{
          x: ["0%", "15%", "0%"],
          y: ["0%", "-15%", "0%"],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  );
}
