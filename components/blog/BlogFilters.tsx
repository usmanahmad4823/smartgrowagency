"use client";

import Link from "next/link";

export function BlogFilters({
  categories,
  active,
}: {
  categories: readonly string[];
  active: string;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const href = category === "All" ? "/blog" : `/blog?category=${encodeURIComponent(category)}`;
        const isActive = active === category;
        return (
          <Link
            key={category}
            href={href}
            className={`rounded-full border px-4 py-2 text-[14px] font-semibold transition-colors ${
              isActive
                ? "border-[var(--accent-blue)] bg-[rgba(41,151,255,0.12)] text-[var(--text-primary)]"
                : "border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-blue)] hover:text-[var(--text-primary)]"
            }`}
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
}
