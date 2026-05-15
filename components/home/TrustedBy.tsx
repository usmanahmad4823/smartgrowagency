const logos = ["Northwind", "Helio", "Vertex Labs", "Brightline", "Kite", "Aperture", "Signal", "Foundry", "Atlas", "Crest"];

export function TrustedBy() {
  const doubled = [...logos, ...logos];
  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-primary)] py-10">
      <div className="container-content mb-6 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)] md:text-[11px]">
          Trusted by forward-thinking brands
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="logo-marquee flex w-max items-center gap-16 px-8">
          {doubled.map((name, idx) => (
            <div
              key={`${name}-${idx}`}
              className="flex h-9 min-w-[128px] items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--glass-bg)] px-5 text-[11px] font-semibold tracking-wide text-[var(--text-secondary)] md:h-10 md:min-w-[140px] md:text-[12px]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="container-content mt-8 text-center">
        <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-tertiary)] md:text-[11px]">As seen in partner programs</p>
      </div>
    </section>
  );
}
