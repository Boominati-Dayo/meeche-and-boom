import { connectDB } from "@/lib/mongodb";
import { Project } from "@/models/Project";
import PortfolioClient from "@/components/PortfolioClient";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio | Meeche & Boom Co.",
  description: "View our portfolio of websites for silicone babies, pet services, healthcare, logistics, and more.",
  keywords: ["portfolio", "web design", "websites", "projects"],
  openGraph: {
    title: "Portfolio | Meeche & Boom Co.",
    description: "View our portfolio of websites for silicone babies, pet services, healthcare, logistics, and more.",
    type: "website",
    images: ["https://res.cloudinary.com/dmwqqfeyq/image/upload/v1747052000/og-default.png"],
    siteName: "Meeche & Boom Co.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Meeche & Boom Co.",
    description: "View our portfolio of websites for silicone babies, pet services, healthcare, logistics, and more.",
  },
};

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