import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  return ["", "/services", "/packages", "/about", "/contact", "/privacy", "/terms"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    }),
  );
}
