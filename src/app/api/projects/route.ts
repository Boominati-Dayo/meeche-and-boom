import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Project } from "@/models/Project";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({ status: "active" }).sort({ order: 1, createdAt: -1 }).lean();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}