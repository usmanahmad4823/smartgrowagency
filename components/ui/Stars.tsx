import { Star } from "lucide-react";

export function Stars() {
  return (
    <div className="flex gap-1 text-[var(--accent-blue)]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}
