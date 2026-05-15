export const siteConfig = {
  name: "Smart Grow Agency",
  tagline: "We Build. We Automate. We Grow.",
  description:
    "Smart Grow Agency is a full-service digital agency helping you launch faster sites, smarter automations, and predictable growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://smartgrowagency.com",
  email: "hellosmartgrowagency@gmail.com",
  phone: "+923488386724",
  address: "Remote / Worldwide",
  hours: "Mon–Fri · 9:00–18:00 PT",
  whatsappNumber: "923488386724",
  social: {
    linkedin: "https://www.linkedin.com/company/smartgrowagency",
    instagram: "https://www.instagram.com/smartgrowagency",
    twitter: "https://twitter.com/smartgrowagency",
    youtube: "https://www.youtube.com/@smartgrowagency",
  },
  tawkPropertyId: process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID ?? "",
  tawkWidgetId: process.env.NEXT_PUBLIC_TAWK_WIDGET_ID ?? "",
} as const;

export function getWhatsAppLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
