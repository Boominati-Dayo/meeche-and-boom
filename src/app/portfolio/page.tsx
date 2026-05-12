import { connectDB } from "@/lib/mongodb";
import { Project } from "@/models/Project";
import PortfolioClient from "@/components/PortfolioClient";

export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
  await connectDB();
  const projects = await Project.find({ status: "active" }).sort({ order: 1 }).lean();
  const projectsData = projects.map(p => ({
    _id: p._id.toString(),
    title: p.title,
    slug: p.slug,
    client: p.client || "",
    description: p.description,
    shortDesc: p.shortDesc || "",
    category: p.category,
    priceRange: p.priceRange || "",
    tags: p.tags || [],
    images: p.images || [],
    visitUrl: p.visitUrl || "",
    featured: p.featured || false,
    status: p.status,
  }));

  return <PortfolioClient initialProjects={projectsData} />;
}