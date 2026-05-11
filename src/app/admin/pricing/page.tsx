"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Star, X } from "lucide-react";
import { useAdmin } from "../layout";

interface Package {
  _id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  order: number;
  status: string;
}

export default function PricingAdminPage() {
  const { refreshKey, triggerRefresh } = useAdmin();
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Package | null>(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    features: "",
    popular: false,
    order: 0,
    status: "active",
  });

  useEffect(() => {
    fetchPackages();
  }, [refreshKey]);

  const fetchPackages = async () => {
    try {
      const res = await fetch("/api/admin/pricing");
      const data = await res.json();
      setPackages(data);
    } catch (error) {
      console.error("Failed to fetch packages:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...form,
      features: form.features.split("\n").map((f) => f.trim()).filter(Boolean),
    };

    try {
      if (editing) {
        await fetch(`/api/admin/pricing/${editing._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/admin/pricing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      fetchPackages();
      resetForm();
      triggerRefresh();
    } catch (error) {
      console.error("Failed to save package:", error);
    }
  };

  const handleEdit = (pkg: Package) => {
    setEditing(pkg);
    setForm({
      name: pkg.name,
      price: pkg.price,
      description: pkg.description,
      features: pkg.features.join("\n"),
      popular: pkg.popular,
      order: pkg.order,
      status: pkg.status,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this package?")) return;
    try {
      await fetch(`/api/admin/pricing/${id}`, { method: "DELETE" });
      fetchPackages();
      triggerRefresh();
    } catch (error) {
      console.error("Failed to delete package:", error);
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditing(null);
    setForm({
      name: "",
      price: "",
      description: "",
      features: "",
      popular: false,
      order: 0,
      status: "active",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pt-4 lg:pt-12">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Pricing Packages</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-3 md:px-4 py-2 bg-primary text-background rounded-lg font-semibold text-sm"
        >
          <Plus className="w-4 h-4" />
          Add Package
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-secondary rounded-xl p-4 md:p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg md:text-xl font-bold">{editing ? "Edit Package" : "Add Package"}</h2>
              <button onClick={resetForm} className="p-2 hover:bg-white/10 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Package Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-background rounded-lg border border-border focus:border-primary focus:outline-none text-sm"
                  placeholder="e.g., Professional"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Price *</label>
                <input
                  type="text"
                  required
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-background rounded-lg border border-border focus:border-primary focus:outline-none text-sm"
                  placeholder="e.g., 1,500,000 XAF"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description *</label>
                <input
                  type="text"
                  required
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-background rounded-lg border border-border focus:border-primary focus:outline-none text-sm"
                  placeholder="Short description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Features (one per line) *</label>
                <textarea
                  required
                  rows={5}
                  value={form.features}
                  onChange={(e) => setForm({ ...form, features: e.target.value })}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-background rounded-lg border border-border focus:border-primary focus:outline-none resize-none text-sm"
                  placeholder="5-page responsive website&#10;Contact form integration&#10;Basic SEO"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Display Order</label>
                  <input
                    type="number"
                    value={form.order}
                    onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) })}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-background rounded-lg border border-border focus:border-primary focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-background rounded-lg border border-border focus:border-primary focus:outline-none text-sm"
                  >
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.popular}
                  onChange={(e) => setForm({ ...form, popular: e.target.checked })}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm">Mark as "Most Popular"</span>
              </label>
              <button
                type="submit"
                className="w-full py-2 md:py-3 bg-primary text-background rounded-lg font-semibold text-sm"
              >
                {editing ? "Update Package" : "Create Package"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {packages.map((pkg) => (
          <div key={pkg._id} className={`glass rounded-xl p-4 md:p-6 ${pkg.popular ? "border-primary glow" : ""}`}>
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg md:text-xl font-bold">{pkg.name}</h3>
                  {pkg.popular && (
                    <span className="px-2 py-0.5 bg-primary text-background text-xs rounded-full">Popular</span>
                  )}
                </div>
                <p className="text-2xl md:text-3xl font-bold text-gradient">{pkg.price}</p>
              </div>
              <div className="flex gap-1">
                <button onClick={() => handleEdit(pkg)} className="p-1.5 md:p-2 hover:bg-white/10 rounded-lg">
                  <Edit className="w-3 h-3 md:w-4 md:h-4" />
                </button>
                <button onClick={() => handleDelete(pkg._id)} className="p-1.5 md:p-2 hover:bg-white/10 rounded-lg text-red-400">
                  <Trash2 className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted mb-3 md:mb-4">{pkg.description}</p>
            <ul className="space-y-1.5 md:space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {packages.length === 0 && (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-12 text-muted">
            No packages yet. Click "Add Package" to create one.
          </div>
        )}
      </div>
    </div>
  );
}