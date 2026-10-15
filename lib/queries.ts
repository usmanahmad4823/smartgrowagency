import { prisma } from "@/lib/db";

export async function getFeaturedProjects() {
  try {
    return await prisma.project.findMany({
      where: { featured: true },
      orderBy: { title: "asc" },
      take: 6,
    });
  } catch {
    return [];
  }
}

export async function getAllProjects(category?: string | null) {
  try {
    return await prisma.project.findMany({
      where: category ? { category } : undefined,
      orderBy: { title: "asc" },
    });
  } catch {
    return [];
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    return await prisma.project.findUnique({ where: { slug } });
  } catch {
    return null;
  }
}
