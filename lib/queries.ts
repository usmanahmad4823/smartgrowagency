import { prisma } from "@/lib/db";

export async function getFeaturedProjects() {
  try {
    return await prisma.project.findMany({
      where: { featured: true },
      orderBy: { title: "asc" },
      take: 6,
      select: {
        id: true,
        title: true,
        category: true,
        image: true,
      },
    });
  } catch (error) {
    console.error("Failed to load featured work", error);
    return [];
  }
}
