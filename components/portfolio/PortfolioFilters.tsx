"use client";

import Link from "next/link";

export function PortfolioFilters({
  categories,
  active,
}: {
  categories: readonly string[];
  active: string;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const href = category === "All" ? "/portfolio" : `/portfolio?category=${encodeURIComponent(category)}`;
        const isActive = active === category;
        return (
          <Link
            key={category}
            href={href}
            className={`rounded-full border px-4 py-2 text-[14px] font-bold transition-all duration-300 ${
              isActive
                ? "border-[#2997ff]/40 bg-gradient-to-r from-[#2997ff]/10 to-[#30d158]/10 text-[#2997ff] shadow-sm scale-[1.03]"
                : "border-white/10 text-[var(--text-secondary)] hover:border-white/20 hover:bg-white/[0.04] hover:text-white hover:scale-[1.01]"
            }`}
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
}
