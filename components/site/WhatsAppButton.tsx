"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-40"
      animate={{ scale: [1, 1.15, 1, 1.15, 1] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeInOut"
      }}
    >
      <Link
        href={getWhatsAppLink("Hi Smart Grow Agency — I would like a quick consult on a project.")}
        className="flex h-11 items-center gap-2 rounded-full bg-[#25D366] pl-3 pr-4 text-white shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-transform hover:bg-[#128C7E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} strokeWidth={2} />
        <span className="text-[12px] font-semibold tracking-tight">WhatsApp</span>
      </Link>
    </motion.div>
  );
}
