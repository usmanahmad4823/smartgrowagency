import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="container-content section-y max-w-3xl space-y-4 text-[17px] leading-relaxed text-[var(--text-secondary)]">
      <h1 className="font-display text-[40px] font-bold tracking-[-0.02em] text-[var(--text-primary)]">Privacy Policy</h1>
      <p>
        Smart Grow Agency collects the information you submit through our forms to respond to inquiries, deliver proposals,
        and improve our services. We do not sell your personal information. Data is stored securely and retained only as
        long as needed to fulfill the relationship or meet legal obligations.
      </p>
      <p>
        You may request access, correction, or deletion of your personal data by emailing{" "}
        <a className="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)]" href="mailto:hellocreecode@gmail.com">
          hellocreecode@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
