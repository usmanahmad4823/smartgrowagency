import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { prisma } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");
  const staticRoutes = ["", "/services", "/packages", "/about", "/portfolio", "/contact", "/privacy", "/terms"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    }),
  );

  try {
    const projects = await prisma.project.findMany({ select: { slug: true, updatedAt: true } });

    const projectUrls = projects.map((p) => ({
      url: `${base}/portfolio/${p.slug}`,
      lastModified: p.updatedAt,
    }));

    return [...staticRoutes, ...projectUrls];
  } catch {
    return staticRoutes;
  }
}
