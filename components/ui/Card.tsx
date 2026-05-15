import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass-card p-6 shadow-none transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.55)] ${className}`}
    >
      {children}
    </div>
  );
}
