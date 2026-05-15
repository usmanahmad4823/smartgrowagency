export const formatPKR = (amount: number) => `₨${amount.toLocaleString("en-PK")}`;

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
    price: 44999,
    period: "/mo",
    description: "For new & small businesses ready to establish online presence. Perfect for startups & small shops.",
    features: [
      { name: "Professional website (up to 5 pages)", included: true },
      { name: "WhatsApp Business integration", included: true },
      { name: "Google Business Profile setup", included: true },
      { name: "Facebook & Instagram page setup", included: true },
      { name: "Basic SEO (on-page)", included: true },
      { name: "8 social media posts/month", included: true },
      { name: "Monthly performance report", included: true },
      { name: "Paid ad campaigns", included: false },
      { name: "Video content", included: false },
      { name: "Custom branding", included: false },
    ],
  },
  {
    id: "growth",
    name: "GROWTH",
    price: 74999,
    period: "/mo",
    isPopular: true,
    description: "For growing brands ready to scale their digital presence.",
    features: [
      { name: "Website (up to 10 pages)", included: true },
      { name: "Google & Meta Ads management", included: true },
      { name: "20 social media posts/month", included: true },
      { name: "4 custom graphic designs/month", included: true },
      { name: "SEO (on-page + off-page)", included: true },
      { name: "Email marketing (1 campaign/month)", included: true },
      { name: "WhatsApp broadcast setup", included: true },
      { name: "Bi-weekly strategy calls", included: true },
      { name: "Brand identity (logo + colors)", included: true },
      { name: "Video editing", included: false },
      { name: "App development", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    price: 0, // Custom Quote
    period: "",
    isEnterprise: true,
    description: "For established businesses & corporates with advanced needs. Ideal for brands, corporates & large e-commerce.",
    features: [
      { name: "Unlimited pages / full website", included: true },
      { name: "Full video editing & reels (4/month)", included: true },
      { name: "Advanced AI automation workflows", included: true },
      { name: "App development (mobile or web)", included: true },
      { name: "Weekly strategy & reporting calls", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "Priority 24-hour support", included: true },
      { name: "Full branding kit", included: true },
      { name: "Custom integrations", included: true },
      { name: "E-commerce / payment setup", included: true },
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
    price: 44999,
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form",
      "1 revision round",
      "Delivery: 7 days",
    ],
  },
  {
    id: "business",
    name: "BUSINESS WEBSITE",
    price: 74999,
    features: [
      "Up to 10 pages",
      "Mobile responsive",
      "Advanced SEO",
      "WhatsApp integration",
      "3 revision rounds",
      "Delivery: 14 days",
    ],
  },
  {
    id: "ecommerce",
    name: "E-COMMERCE STORE",
    price: 149999,
    features: [
      "Full online store",
      "Payment gateway",
      "Product management",
      "Order tracking",
      "5 revision rounds",
      "Delivery: 21 days",
    ],
  },
];

export const addOns = [
  { name: "Logo Design", price: 9999, isMonthly: false },
  { name: "Extra Landing Page", price: 14999, isMonthly: false },
  { name: "Monthly SEO Report", price: 6999, isMonthly: true },
  { name: "Social Media Setup (full)", price: 7499, isMonthly: false },
  { name: "Email Sequence (5 emails)", price: 9999, isMonthly: false },
  { name: "WhatsApp Automation Bot", price: 14999, isMonthly: false },
  { name: "Reels / Short Video (per 4)", price: 11999, isMonthly: false },
  { name: "Google Business Optimization", price: 4999, isMonthly: false },
  { name: "Meta Ads Setup (one-time)", price: 6999, isMonthly: false },
  { name: "Daraz Store Setup", price: 14999, isMonthly: false },
];

export const faqs = [
  {
    q: "Kya prices negotiate ho sakti hain?",
    a: "Yes — for long-term contracts (3+ months) we offer special discounted rates. Contact us to discuss a custom plan.",
  },
  {
    q: "Payment kaise karein?",
    a: "We accept EasyPaisa, JazzCash, bank transfer, and crypto (USDT). 50% advance, 50% on delivery.",
  },
  {
    q: "Kya koi hidden charges hain?",
    a: "Absolutely not. The price we quote is the price you pay. Any extra work is discussed and approved first.",
  },
  {
    q: "Kitne time mein kaam complete hoga?",
    a: "Starter website: 7 days. Business website: 14 days. Monthly retainers start delivering in week 1.",
  },
  {
    q: "Kya ap overseas Pakistanis ko bhi serve karte hain?",
    a: "Yes — we serve clients in Pakistan, UAE, UK, USA and beyond. International payments via PayPal or USDT.",
  },
  {
    q: "Agar kaam pasand na aaye toh?",
    a: "We offer revision rounds per package. If still not satisfied, we have a money-back policy on project packages.",
  },
  {
    q: "Kya monthly contract band kar sakte hain?",
    a: "Yes — 30-day notice required to cancel a monthly retainer. No lock-in beyond that.",
  },
];
