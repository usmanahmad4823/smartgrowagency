import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PackagesToggle } from "@/components/packages/PackagesToggle";
import { ComparisonTable } from "@/components/packages/ComparisonTable";
import { TrustBoosters } from "@/components/packages/TrustBoosters";
import { AddOns } from "@/components/packages/AddOns";
import { PaymentMethods } from "@/components/packages/PaymentMethods";
import { FAQSection } from "@/components/packages/FAQSection";

export const metadata: Metadata = {
  title: "Packages & Pricing — Honest pricing. Real results.",
  description:
    "Transparent pricing packages designed for Pakistani businesses. From startups to corporates, find the perfect plan to scale your digital presence.",
};

export default function PackagesPage() {
  // Replace with the actual WhatsApp number
  const whatsappNumber = "923000000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20packages`;

  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Hero & Packages Toggle */}
      <section className="section-y border-b border-[var(--border-subtle)] overflow-hidden">
        <div className="container-content space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-blue)]">TRANSPARENT PRICING</p>
            <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-[-0.022em] text-[var(--text-primary)] md:text-[56px]">
              Simple packages. Real results. No surprises.
            </h1>
            <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
              Every package is a starting point — we customize to fit your exact goals and budget.
            </p>
          </div>

          <PackagesToggle />
          <div className="pt-6">
            <TrustBoosters />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-y bg-[var(--bg-secondary)]">
        <div className="container-content space-y-10">
          <SectionHeader
            eyebrow="COMPARE"
            title="Feature Comparison"
            description="See exactly what's included in every monthly tier."
            align="center"
          />
          <ComparisonTable />
        </div>
      </section>

      {/* Add-Ons */}
      <section className="section-y">
        <div className="container-content space-y-10">
          <SectionHeader
            eyebrow="EXTRAS"
            title="Need something specific? Add it on."
            description="Flexible add-ons to customize your package without forcing an upgrade."
          />
          <AddOns />
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-y bg-[var(--bg-secondary)]">
        <div className="container-content">
          <PaymentMethods />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-y">
        <div className="container-content space-y-10">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions? We've got answers."
            description="Everything you need to know about working with us."
            align="center"
          />
          <FAQSection />
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-20 md:py-32">
        <div className="container-content flex flex-col items-center text-center space-y-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-[-0.02em] md:text-[48px]">
              Not sure which package is right for you?
            </h2>
            <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
              Book a free 30-minute consultation — we&apos;ll recommend the exact plan for your business and budget.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto justify-center px-8 py-3 text-[15px]">
              Book Free Call
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3 text-[15px] font-semibold text-white transition-all hover:bg-[#128C7E] w-full sm:w-auto shadow-lg hover:shadow-xl"
            >
              WhatsApp Us Now
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
