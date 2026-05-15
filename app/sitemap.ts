import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { prisma } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");
  const staticRoutes = ["", "/services", "/about", "/portfolio", "/blog", "/contact", "/privacy", "/terms"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    }),
  );

  try {
    const [projects, posts] = await Promise.all([
      prisma.project.findMany({ select: { slug: true, updatedAt: true } }),
      prisma.blogPost.findMany({ select: { slug: true, updatedAt: true } }),
    ]);

    const projectUrls = projects.map((p) => ({
      url: `${base}/portfolio/${p.slug}`,
      lastModified: p.updatedAt,
    }));

    const blogUrls = posts.map((b) => ({
      url: `${base}/blog/${b.slug}`,
      lastModified: b.updatedAt,
    }));

    return [...staticRoutes, ...projectUrls, ...blogUrls];
  } catch {
    return staticRoutes;
  }
}
