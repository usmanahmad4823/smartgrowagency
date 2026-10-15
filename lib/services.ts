import {
  Bot,
  Camera,
  Globe,
  Megaphone,
  Palette,
  Search,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  features: string[];
  useCases: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    short: "Launch a site that loads fast, ranks, and converts cold traffic.",
    description:
      "You get a conversion-led structure, performance-first engineering, and a design system your team can extend without breaking the brand.",
    icon: Globe,
    accent: "#2997ff",
    features: [
      "UX architecture mapped to revenue goals",
      "Next.js builds with measurable Core Web Vitals",
      "Component libraries aligned to your brand",
    ],
    useCases: ["Corporate sites", "Product marketing", "High-traffic launches"],
  },
  {
    slug: "ai-automation",
    title: "AI Automation Services",
    short: "Remove repetitive work so your team sells, ships, and supports faster.",
    description:
      "We connect your tools, model your workflows, and deploy guard-railed automations that save hours every week—without sacrificing quality.",
    icon: Bot,
    accent: "#64d2ff",
    features: [
      "Process mapping + ROI modeling",
      "Tool integrations (CRM, support, finance)",
      "Monitoring, logging, and human handoff paths",
    ],
    useCases: ["Lead routing", "Support triage", "Reporting pipelines"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Turn attention into pipeline with a disciplined content engine.",
    description:
      "Creative direction, production cadence, and paid amplification work together so your brand shows up consistently where buyers scroll.",
    icon: Megaphone,
    accent: "#ff9f0a",
    features: [
      "Channel strategy tied to funnel stages",
      "Creative testing roadmap",
      "Weekly performance snapshots you can act on",
    ],
    useCases: ["B2B thought leadership", "Product launches", "Community growth"],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    short: "Earn demand you do not have to pay for every single month.",
    description:
      "Technical fixes, topical authority, and content designed to win high-intent queries—built for compounding growth, not vanity rankings.",
    icon: Search,
    accent: "#30d158",
    features: [
      "Site audits with prioritized fixes",
      "Content clusters mapped to revenue keywords",
      "Measurement dashboards your leadership trusts",
    ],
    useCases: ["SaaS growth", "Local market dominance", "Category creation"],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    short: "Visual systems that make every touchpoint feel unmistakably you.",
    description:
      "From campaign assets to decks, you receive polished files, clear specs, and fast iterations so launches never stall on design.",
    icon: Palette,
    accent: "#ff375f",
    features: [
      "Brand-aligned templates",
      "Print + digital production support",
      "Rapid turnaround for launches",
    ],
    useCases: ["Event collateral", "Sales decks", "Ad creative"],
  },
  {
    slug: "video-editing",
    title: "Video Editing & Content Creation",
    short: "Short-form and long-form edits engineered for retention.",
    description:
      "Hooks, pacing, captions, and sound design that keep viewers watching—so your media spend works harder on every platform.",
    icon: Camera,
    accent: "#bf5af2",
    features: [
      "Editorial calendars aligned to campaigns",
      "Platform-native formats",
      "A/B cut variations for paid tests",
    ],
    useCases: ["YouTube series", "Paid social", "Webinar replays"],
  },
  {
    slug: "app-development",
    title: "App Development (Mobile & Web)",
    short: "Ship reliable products customers return to every week.",
    description:
      "Discovery, UX, engineering, and launch support in one team—so you are not coordinating five vendors to ship one roadmap.",
    icon: Smartphone,
    accent: "#5e5ce6",
    features: [
      "Product discovery + roadmap shaping",
      "Modern web and mobile stacks",
      "QA, analytics, and release management",
    ],
    useCases: ["Customer portals", "Internal tools", "MVP launches"],
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "From $1,500",
    blurb: "Best for a focused launch, high-converting site, or single funnel upgrade.",
    items: ["Discovery & architecture", "Core digital deliverables", "30-day optimization window"],
  },
  {
    name: "Growth",
    price: "From $3,500/mo",
    blurb: "Best when you need sustained velocity across creative, web, and paid media.",
    items: ["Cross-channel roadmap", "Dedicated engineering & design pod", "Biweekly strategy & sprint reviews"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "Best for global brands, multi-region compliance, and complex custom integrations.",
    items: ["Executive KPI reporting", "24/7 SLA-backed response", "Embedded product team workflows"],
  },
] as const;
