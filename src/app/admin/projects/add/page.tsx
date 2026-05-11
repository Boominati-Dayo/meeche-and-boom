"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plus, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function AddProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    description: "",
    category: "",
    priceRange: "",
    client: "",
    visitUrl: "",
    features: "",
    technologies: "",
    timeline: "",
    status: "active",
    featured: false,
  });

  const addImage = () => {
    if (imageUrl && !images.includes(imageUrl)) {
      setImages([...images, imageUrl]);
      setImageUrl("");
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          images,
          features: form.features.split(",").map((f) => f.trim()).filter(Boolean),
          technologies: form.technologies.split(",").map((t) => t.trim()).filter(Boolean),
        }),
      });
      
      if (res.ok) {
        toast.success("Project created successfully!");
        setTimeout(() => router.push("/admin/projects"), 1000);
      } else {
        toast.error("Failed to create project");
      }
    } catch (error) {
      toast.error("Failed to create project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pt-4 lg:pt-12">
      <Toaster position="top-right" />
      <Link href="/admin/projects" className="inline-flex items-center gap-2 text-muted hover:text-primary mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>
      
      <h1 className="text-2xl lg:text-3xl font-bold mb-8">Add New Project</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="glass rounded-xl p-4 lg:p-6 space-y-4">
          <h2 className="text-lg font-semibold">Basic Info</h2>
          
          <div>
            <label className="block text-sm font-medium mb-2">Project Title *</label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm lg:text-base"
              placeholder="e.g., Joana's Reborn Babies"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Short Description *</label>
            <input
              type="text"
              required
              value={form.shortDesc}
              onChange={(e) => setForm({ ...form, shortDesc: e.target.value })}
              className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm lg:text-base"
              placeholder="Brief description for cards"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Full Description *</label>
            <textarea
              required
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none resize-none text-sm lg:text-base"
              placeholder="Detailed project description"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category *</label>
            <select
              required
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm lg:text-base"
            >
              <option value="">Select category</option>
              <option value="silicone">Silicone Baby</option>
              <option value="pets">Pet Sites</option>
              <option value="tracking">Tracking Systems</option>
              <option value="banking">Banking/Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="automotive">Automotive</option>
              <option value="political">Political</option>
              <option value="construction">Construction</option>
              <option value="portfolio">Portfolio</option>
              <option value="ecommerce">E-commerce</option>
              <option value="other">Other</option>
            </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Price Range</label>
            <input
              type="text"
              value={form.priceRange}
              onChange={(e) => setForm({ ...form, priceRange: e.target.value })}
              className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm lg:text-base"
              placeholder="e.g., 75,000 - 120,000 XAF"
            />
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-4 lg:p-6 space-y-4">
          <h2 className="text-lg font-semibold">Images</h2>
          <p className="text-sm text-muted">Add image URLs. First image will be the main thumbnail.</p>
          
          <div className="flex gap-2">
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="flex-1 px-3 lg:px-4 py-2 lg:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm lg:text-base"
              placeholder="Paste image URL"
            />
            <button
              type="button"
              onClick={addImage}
              className="px-4 py-2 lg:py-3 bg-secondary rounded-lg hover:bg-white/10 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
              {images.map((img, i) => (
                <div key={i} className="relative group">
                  <img src={img} alt="" className="w-full h-20 md:h-24 rounded-lg object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  {i === 0 && <span className="absolute bottom-1 left-1 text-xs bg-primary px-2 py-0.5 rounded">Main</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="glass rounded-xl p-4 lg:p-6 space-y-4">
          <h2 className="text-lg font-semibold">Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Client Name</label>
              <input
                type="text"
                value={form.client}
                onChange={(e) => setForm({ ...form, client: e.target.value })}
                className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm lg:text-base"
                placeholder="e.g., Joana's Reborn"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Live URL</label>
              <input
                type="url"
                value={form.visitUrl}
                onChange={(e) => setForm({ ...form, visitUrl: e.target.value })}
                className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm lg:text-base"
                placeholder="https://..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Features (comma separated)</label>
            <input
              type="text"
              value={form.features}
              onChange={(e) => setForm({ ...form, features: e.target.value })}
              className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm lg:text-base"
              placeholder="E-commerce, Gallery, Custom Orders"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Technologies Used</label>
            <input
              type="text"
              value={form.technologies}
              onChange={(e) => setForm({ ...form, technologies: e.target.value })}
              className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm lg:text-base"
              placeholder="Next.js, Tailwind, MongoDB"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Timeline</label>
              <input
                type="text"
                value={form.timeline}
                onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm lg:text-base"
                placeholder="e.g., 3 weeks"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm lg:text-base"
              >
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              className="w-4 h-4 rounded border-border"
            />
            <span className="text-sm">Featured on homepage</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 lg:py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary-light transition-colors disabled:opacity-50 text-sm lg:text-base"
        >
          {loading ? "Creating..." : "Create Project"}
        </button>
      </form>
    </div>
  );
}