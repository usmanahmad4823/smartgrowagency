import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ServicesSection } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Process } from "@/components/home/Process";
import { WorkHighlights } from "@/components/home/WorkHighlights";
import { Testimonials } from "@/components/home/Testimonials";
import { Stats } from "@/components/home/Stats";
import { PackagesPreview } from "@/components/home/PackagesPreview";
import { CTABanner } from "@/components/home/CTABanner";
import { VideoTestimonials } from "@/components/home/VideoTestimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital growth agency for brands that refuse to plateau",
  description:
    "Smart Grow Agency ships web, AI automation, and performance marketing that turns attention into revenue—one accountable team, end to end.",
};

export default async function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <WhyChooseUs />
      <Process />
      <WorkHighlights />
      <Testimonials />
      <Stats />
      <VideoTestimonials />
      <PackagesPreview />
      <CTABanner />
    </>
  );
}
