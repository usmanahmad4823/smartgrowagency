import { NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/queries";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? Number(limitParam) : undefined;
  const safeLimit = limit && Number.isFinite(limit) ? Math.min(Math.max(limit, 1), 50) : undefined;

  const posts = await getBlogPosts(safeLimit, category);
  const payload = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    readTimeMins: post.readTimeMins,
    publishedAt: post.publishedAt,
    coverImage: post.coverImage,
  }));

  return NextResponse.json({ posts: payload });
}
