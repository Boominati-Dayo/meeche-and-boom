"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, Image } from "lucide-react";
import { useAdmin } from "../layout";

interface Project {
  _id: string;
  title: string;
  slug: string;
  shortDesc: string;
  category: string;
  status: string;
  images: string[];
  featured: boolean;
}

export default function ProjectsPage() {
  const { refreshKey } = useAdmin();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, [refreshKey]);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/admin/projects");
      const data = await res.json();
      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this project?")) return;
    try {
      await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
      setProjects(projects.filter((p) => p._id !== id));
      setDeleteId(null);
    } catch (error) {
      console.error("Failed to delete project:", error);
    }
  };

  const toggleFeatured = async (id: string, current: boolean) => {
    try {
      await fetch(`/api/admin/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: !current }),
      });
      setProjects(projects.map((p) => (p._id === id ? { ...p, featured: !current } : p)));
    } catch (error) {
      console.error("Failed to update project:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-muted">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pt-4 lg:pt-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Projects</h1>
        <Link
          href="/admin/projects/add"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg font-semibold hover:bg-primary-light transition-colors text-sm"
        >
          <Plus className="w-4 h-4 md:w-5 md:h-5" />
          Add Project
        </Link>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block glass rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-secondary/50">
            <tr>
              <th className="text-left p-4 font-medium text-sm">Project</th>
              <th className="text-left p-4 font-medium text-sm">Category</th>
              <th className="text-left p-4 font-medium text-sm">Status</th>
              <th className="text-left p-4 font-medium text-sm">Featured</th>
              <th className="text-right p-4 font-medium text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id} className="border-t border-border hover:bg-white/5">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    {project.images?.[0] ? (
                      <img src={project.images[0]} alt={project.title} className="w-10 h-10 rounded-lg object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <Image className="w-5 h-5 text-muted" />
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-sm">{project.title}</p>
                      <p className="text-xs text-muted truncate max-w-xs">{project.shortDesc}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-secondary rounded text-xs">{project.category}</span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    project.status === "active" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => toggleFeatured(project._id, project.featured)}
                    className={`px-2 py-1 rounded text-xs ${
                      project.featured ? "bg-primary/20 text-primary" : "bg-secondary text-muted"
                    }`}
                  >
                    {project.featured ? "Featured" : "Normal"}
                  </button>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/admin/projects/${project._id}`}
                      className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="p-2 hover:bg-secondary rounded-lg transition-colors text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-muted">
                  No projects yet. Click "Add Project" to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {projects.map((project) => (
          <div key={project._id} className="glass rounded-xl p-4">
            <div className="flex items-start gap-3 mb-3">
              {project.images?.[0] ? (
                <img src={project.images[0]} alt={project.title} className="w-16 h-16 rounded-lg object-cover" />
              ) : (
                <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center">
                  <Image className="w-6 h-6 text-muted" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 bg-secondary rounded text-xs">{project.category}</span>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    project.status === "active" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 bg-primary/20 text-primary rounded text-xs">Featured</span>
                  )}
                </div>
                <h3 className="font-medium mt-1 truncate">{project.title}</h3>
                <p className="text-xs text-muted line-clamp-2">{project.shortDesc}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/portfolio/${project.slug}`}
                className="flex-1 flex items-center justify-center gap-1 py-2 bg-secondary rounded-lg text-xs"
              >
                <Eye className="w-3 h-3" /> View
              </Link>
              <Link
                href={`/admin/projects/${project._id}`}
                className="flex-1 flex items-center justify-center gap-1 py-2 bg-secondary rounded-lg text-xs"
              >
                <Edit className="w-3 h-3" /> Edit
              </Link>
              <button
                onClick={() => handleDelete(project._id)}
                className="flex-1 flex items-center justify-center gap-1 py-2 bg-secondary rounded-lg text-xs text-red-400"
              >
                <Trash2 className="w-3 h-3" /> Delete
              </button>
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <div className="p-8 text-center text-muted">
            No projects yet. Click "Add Project" to create one.
          </div>
        )}
      </div>
    </div>
  );
}