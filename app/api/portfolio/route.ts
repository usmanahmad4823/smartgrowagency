import { NextResponse } from "next/server";
import { getAllProjects } from "@/lib/queries";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const projects = await getAllProjects(category);
  return NextResponse.json({ projects });
}
