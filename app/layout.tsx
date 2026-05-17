import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UrgencyBanner } from "@/components/site/UrgencyBanner";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ExitIntentModal } from "@/components/site/ExitIntentModal";
import { LiveChatLoader } from "@/components/site/LiveChatLoader";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { GlobalBackground } from "@/components/site/GlobalBackground";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-transparent font-body text-[var(--text-primary)] antialiased">
        <ThemeProvider>
          <GlobalBackground />
          <LiveChatLoader />
          <Navbar />
          <UrgencyBanner />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ExitIntentModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
