import { MetadataRoute } from "next";
import { connectDB } from "@/lib/mongodb";
import { Project } from "@/models/Project";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB();
  const projects = await Project.find({ status: "active" }).lean();
  
  const baseUrl = "https://meeche-and-boom.vercel.app";
  
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date().toISOString(), priority: 1.0 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date().toISOString(), priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: new Date().toISOString(), priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: new Date().toISOString(), priority: 0.8 },
    { url: `${baseUrl}/testimonials`, lastModified: new Date().toISOString(), priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString(), priority: 0.8 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map(p => ({
    url: `${baseUrl}/portfolio/${p._id}`,
    lastModified: (p.updatedAt || p.createdAt || new Date()).toISOString(),
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}