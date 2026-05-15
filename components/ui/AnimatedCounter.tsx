"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
  durationMs = 1400,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      setValue(Math.round(to * easeOutCubic(progress)));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [durationMs, isInView, to]);

  return (
    <motion.span
      ref={ref}
      className="font-display text-[28px] font-bold tracking-[-0.03em] md:text-[36px]"
    >
      {prefix}
      {value}
      {suffix}
    </motion.span>
  );
}
