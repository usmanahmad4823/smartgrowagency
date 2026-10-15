export const formatUSD = (amount: number) => `$${amount.toLocaleString("en-US")}`;
export const formatPKR = formatUSD; // Backwards compatibility alias

export type MonthlyPackage = {
  id: string;
  name: string;
  price: number;
  period: string;
  isPopular?: boolean;
  isEnterprise?: boolean;
  description: string;
  features: { name: string; included: boolean }[];
};

export const monthlyPackages: MonthlyPackage[] = [
  {
    id: "starter",
    name: "STARTER",
    price: 999,
    period: "/mo",
    description: "For ambitious startups & modern businesses ready to establish an elite online presence and steady growth.",
    features: [
      { name: "Custom high-speed website (up to 5 pages)", included: true },
      { name: "Lead capture & CRM / WhatsApp integration", included: true },
      { name: "Google Business & GA4 analytics tracking", included: true },
      { name: "Social media management (8 curated posts/mo)", included: true },
      { name: "Core technical & on-page SEO optimization", included: true },
      { name: "Monthly growth & performance analytics report", included: true },
      { name: "Dedicated Slack & email support channel", included: true },
      { name: "Paid ad management (Meta / Google)", included: false },
      { name: "Short-form video & reels production", included: false },
      { name: "Full brand identity & design system", included: false },
    ],
  },
  {
    id: "growth",
    name: "GROWTH",
    price: 2499,
    period: "/mo",
    isPopular: true,
    description: "For scaling brands ready to accelerate pipeline, acquire customers profitably, and dominate search.",
    features: [
      { name: "High-converting modern website (up to 10 pages)", included: true },
      { name: "Full Google & Meta Ads management & ROAS tracking", included: true },
      { name: "20 social media posts & short-form creative/mo", included: true },
      { name: "4 custom graphic designs & sales decks/mo", included: true },
      { name: "Comprehensive SEO (on-page, technical & backlinks)", included: true },
      { name: "Email marketing sequences & monthly newsletters", included: true },
      { name: "Workflow automations & CRM lead pipeline setup", included: true },
      { name: "Bi-weekly strategic growth & optimization calls", included: true },
      { name: "Brand identity refresh (logo, guidelines, colors)", included: true },
      { name: "Custom full-stack web/mobile app engineering", included: false },
      { name: "Dedicated 24/7 SLA & DevOps support", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    price: 0, // Custom Quote
    period: "",
    isEnterprise: true,
    description: "For mid-market and enterprise businesses requiring dedicated engineering, custom AI workflows, and global scale.",
    features: [
      { name: "Unlimited custom pages / headless web architecture", included: true },
      { name: "High-retention video editing & reels (8/month)", included: true },
      { name: "Advanced AI agents & automated ops workflows", included: true },
      { name: "Full-stack mobile or web app engineering", included: true },
      { name: "Weekly executive strategy & reporting syncs", included: true },
      { name: "Dedicated Senior Account Director & dedicated pod", included: true },
      { name: "Priority 24/7 SLA & mission-critical support", included: true },
      { name: "Enterprise design system & brand kit", included: true },
      { name: "Custom API, CRM, and ERP integrations", included: true },
      { name: "Global e-commerce & multi-currency payment setup", included: true },
    ],
  },
];

export type OneTimePackage = {
  id: string;
  name: string;
  price: number;
  features: string[];
};

export const oneTimePackages: OneTimePackage[] = [
  {
    id: "basic",
    name: "BASIC WEBSITE",
    price: 1499,
    features: [
      "Up to 5 bespoke pages",
      "Mobile-first, sub-second load times (Next.js)",
      "On-page SEO & analytics setup",
      "Lead capture contact forms & CRM hooks",
      "2 revision rounds",
      "Delivery: 7–10 days",
    ],
  },
  {
    id: "business",
    name: "BUSINESS WEBSITE",
    price: 2999,
    features: [
      "Up to 10 custom interactive pages",
      "Bespoke design system & fluid animations",
      "Advanced SEO architecture & schema markup",
      "WhatsApp, Calendly & CRM integrations",
      "CMS setup for case studies & portfolio publishing",
      "3 revision rounds",
      "Delivery: 14 days",
    ],
  },
  {
    id: "ecommerce",
    name: "E-COMMERCE STORE",
    price: 4999,
    features: [
      "Full bespoke online store (Shopify or Next.js)",
      "Stripe, PayPal, Apple Pay & multi-currency",
      "Product catalog, inventory & tax setup",
      "Order tracking & automated customer emails",
      "Abandoned cart recovery & checkout optimization",
      "5 revision rounds",
      "Delivery: 21 days",
    ],
  },
];

export const addOns = [
  { name: "Brand Identity & Logo Design", price: 350, isMonthly: false },
  { name: "Extra High-Converting Landing Page", price: 450, isMonthly: false },
  { name: "Monthly Technical SEO Retainer", price: 399, isMonthly: true },
  { name: "Omnichannel Social Media Setup", price: 299, isMonthly: false },
  { name: "Email Marketing Flow (5 sequences)", price: 499, isMonthly: false },
  { name: "Custom AI Assistant / WhatsApp Bot", price: 599, isMonthly: false },
  { name: "Short-Form Video / Reels (pack of 4)", price: 499, isMonthly: false },
  { name: "Google Business & Local Search Boost", price: 250, isMonthly: false },
  { name: "Paid Ads Account Setup & Tracking", price: 450, isMonthly: false },
  { name: "Global Payment Gateway & Checkout Setup", price: 499, isMonthly: false },
];

export const faqs = [
  {
    q: "Can packages be customized for our specific requirements?",
    a: "Absolutely. Every business has unique needs. We routinely tailor scopes, add bespoke deliverables, and adapt monthly retainers to match your growth objectives and tech stack.",
  },
  {
    q: "What payment methods do you accept for international clients?",
    a: "We accept all major Credit/Debit Cards (Visa, MasterCard, Amex) through Stripe, PayPal, International Bank Wire Transfers (SWIFT / ACH / IBAN), and USDT/Crypto. All billing is handled in USD ($) with formal invoices provided.",
  },
  {
    q: "Are there any hidden fees or surprise costs?",
    a: "Never. The price quoted in our proposal is the exact price you pay. If your project requires third-party API services, hosting, or ad spend, those are discussed and approved transparently in advance.",
  },
  {
    q: "What is your typical project delivery timeline?",
    a: "Our 5-page Basic Website is delivered in 7–10 days. The 10-page Business Website takes 14 days, and full E-Commerce platforms take 21 days. For monthly retainers, we start shipping deliverables within your first 48 hours of onboarding.",
  },
  {
    q: "How do you coordinate with clients across international time zones?",
    a: "We work seamlessly across North American (EST/PST), European (GMT/CET), and Asian time zones. You receive a dedicated Slack channel or WhatsApp group, daily async updates, and scheduled video syncs that fit your calendar.",
  },
  {
    q: "What is your revision and quality satisfaction policy?",
    a: "Every fixed-scope project includes structured revision rounds to ensure the final product meets your exact standards. We work with milestone sign-offs so there are never any unwelcome surprises.",
  },
  {
    q: "Can we pause, upgrade, or cancel our monthly retainer?",
    a: "Yes. Our monthly retainers are built on trust and momentum with zero long-term lock-in. You can upgrade, scale up hours, or cancel with a simple 30-day notice.",
  },
];
