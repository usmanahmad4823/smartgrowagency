import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="container-content section-y max-w-3xl space-y-4 text-[17px] leading-relaxed text-[var(--text-secondary)]">
      <h1 className="font-display text-[40px] font-bold tracking-[-0.02em] text-[var(--text-primary)]">Terms of Service</h1>
      <p>
        By accessing this website or engaging Smart Grow Agency, you agree to use our services for lawful purposes and to
        provide accurate information during onboarding. Statements on this site are for general guidance and do not
        constitute a binding commercial agreement until a signed statement of work is executed.
      </p>
      <p>
        Smart Grow Agency is not liable for indirect or consequential damages arising from the use of our materials. For
        questions, contact{" "}
        <a className="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]" href="mailto:hellocreecode@gmail.com">
          hellocreecode@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
