import { connectDB } from "@/lib/mongodb";
import { Project } from "@/models/Project";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import { notFound } from "next/navigation";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  await connectDB();
  const project = await Project.findById(id).lean();

  if (!project) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link href="/portfolio" className="text-primary hover:underline">View All Projects</Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const projectData = {
    _id: project._id.toString(),
    title: project.title,
    client: project.client || "",
    description: project.description,
    shortDesc: project.shortDesc || "",
    category: project.category,
    priceRange: project.priceRange || "",
    tags: project.tags || [],
    images: project.images || [],
    visitUrl: project.visitUrl || "",
    featured: project.featured || false,
    showUrl: project.showUrl !== false,
    features: project.features || [],
  };

  return <ProjectDetailClient project={projectData} />;
}