import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ServicesSection } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Process } from "@/components/home/Process";
import { PortfolioPreview } from "@/components/home/Portfolio";
import { Testimonials } from "@/components/home/Testimonials";
import { Stats } from "@/components/home/Stats";
import { PackagesPreview } from "@/components/home/PackagesPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTABanner } from "@/components/home/CTABanner";
import { VideoTestimonials } from "@/components/home/VideoTestimonials";
import { getFeaturedProjects } from "@/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital growth agency for brands that refuse to plateau",
  description:
    "Smart Grow Agency ships web, AI automation, and performance marketing that turns attention into revenue—one accountable team, end to end.",
};

export default async function Home() {
  const projects = await getFeaturedProjects();

  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <WhyChooseUs />
      <Process />
      <PortfolioPreview projects={projects} />
      <Testimonials />
      <Stats />
      <VideoTestimonials />
      <PackagesPreview />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
