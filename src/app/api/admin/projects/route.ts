import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Project } from "@/models/Project";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({ status: "active" }).sort({ order: 1 });
    return NextResponse.json(Array.isArray(projects) ? projects : []);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    
    const slug = (body.title || body.name || "project").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    
    const project = new Project({
      title: body.title || body.name,
      slug,
      description: body.description || "",
      shortDesc: body.shortDesc || body.description?.slice(0, 100) || "",
      category: body.category || "business",
      priceRange: body.price || body.priceRange || "",
      client: body.client || "",
      features: body.features || [],
      images: body.images || [],
      visitUrl: body.url || body.visitUrl || "",
      technologies: body.technologies || [],
      timeline: body.timeline || "",
      completionDate: body.completionDate || new Date(),
      featured: body.featured || false,
      status: "active",
      tags: body.tags || [],
      order: body.order || 0,
    });
    
    await project.save();
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}