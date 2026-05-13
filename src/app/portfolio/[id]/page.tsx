import { connectDB } from "@/lib/mongodb";
import { Project } from "@/models/Project";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  await connectDB();
  const project = await Project.findById(id).lean();

  if (!project) {
    return { title: "Project Not Found" };
  }

  const ogImage = project.images?.[0] || "/meeche_og.png";
  const baseUrl = "https://meeche-and-boom.vercel.app";

  return {
    title: `${project.title} | Meeche & Boom Co.`,
    description: project.shortDesc || project.description,
    keywords: project.tags || [],
    authors: [{ name: "Meeche & Boom Co." }],
    openGraph: {
      title: project.title,
      description: project.shortDesc || project.description,
      url: `${baseUrl}/portfolio/${id}`,
      siteName: "Meeche & Boom Co.",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Meeche & Boom Co.`,
      description: project.shortDesc || project.description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${baseUrl}/portfolio/${id}`,
    },
  };
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