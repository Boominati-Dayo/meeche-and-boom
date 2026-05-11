"use client";

import { useState, useEffect } from "react";
import { Check, X, Trash2, Star } from "lucide-react";
import { useAdmin } from "../layout";

interface Testimonial {
  _id: string;
  name: string;
  company: string;
  quote: string;
  rating: number;
  status: string;
  createdAt: string;
}

export default function TestimonialsPage() {
  const { refreshKey, triggerRefresh } = useAdmin();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, [refreshKey]);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch("/api/admin/testimonials");
      const data = await res.json();
      setTestimonials(data);
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/admin/testimonials/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      setTestimonials(testimonials.map((t) => (t._id === id ? { ...t, status } : t)));
      triggerRefresh();
    } catch (error) {
      console.error("Failed to update testimonial:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return;
    try {
      await fetch(`/api/admin/testimonials/${id}`, { method: "DELETE" });
      setTestimonials(testimonials.filter((t) => t._id !== id));
      triggerRefresh();
    } catch (error) {
      console.error("Failed to delete testimonial:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-500/20 text-yellow-400";
      case "approved": return "bg-green-500/20 text-green-400";
      case "rejected": return "bg-red-500/20 text-red-400";
      default: return "bg-secondary text-muted";
    }
  };

  const pendingCount = testimonials.filter((t) => t.status === "pending").length;
  const approvedCount = testimonials.filter((t) => t.status === "approved").length;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-muted">Loading testimonials...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pt-4 lg:pt-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Testimonials</h1>

      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="glass rounded-xl p-3 md:p-4">
          <p className="text-xl md:text-2xl font-bold">{pendingCount}</p>
          <p className="text-muted text-xs md:text-sm">Pending</p>
        </div>
        <div className="glass rounded-xl p-3 md:p-4">
          <p className="text-xl md:text-2xl font-bold text-green-400">{approvedCount}</p>
          <p className="text-muted text-xs md:text-sm">Approved</p>
        </div>
        <div className="glass rounded-xl p-3 md:p-4">
          <p className="text-xl md:text-2xl font-bold">{testimonials.length}</p>
          <p className="text-muted text-xs md:text-sm">Total</p>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block glass rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-secondary/50">
            <tr>
              <th className="text-left p-4 font-medium text-sm">Client</th>
              <th className="text-left p-4 font-medium text-sm">Testimonial</th>
              <th className="text-left p-4 font-medium text-sm">Rating</th>
              <th className="text-left p-4 font-medium text-sm">Status</th>
              <th className="text-right p-4 font-medium text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial) => (
              <tr key={testimonial._id} className="border-t border-border">
                <td className="p-4">
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.company}</p>
                </td>
                <td className="p-4 max-w-xs">
                  <p className="text-sm truncate">{testimonial.quote}</p>
                </td>
                <td className="p-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < testimonial.rating ? "text-primary fill-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(testimonial.status)}`}>
                    {testimonial.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-1">
                    {testimonial.status === "pending" && (
                      <>
                        <button
                          onClick={() => updateStatus(testimonial._id, "approved")}
                          className="p-2 hover:bg-secondary rounded-lg text-green-400"
                          title="Approve"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => updateStatus(testimonial._id, "rejected")}
                          className="p-2 hover:bg-secondary rounded-lg text-red-400"
                          title="Reject"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    {testimonial.status === "approved" && (
                      <button
                        onClick={() => updateStatus(testimonial._id, "pending")}
                        className="p-2 hover:bg-secondary rounded-lg text-yellow-400"
                        title="Undo"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(testimonial._id)}
                      className="p-2 hover:bg-secondary rounded-lg text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {testimonials.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-muted">
                  No testimonials yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="glass rounded-xl p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-xs text-muted">{testimonial.company}</p>
              </div>
              <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(testimonial.status)}`}>
                {testimonial.status}
              </span>
            </div>
            <p className="text-sm text-muted line-clamp-3 mb-3">{testimonial.quote}</p>
            <div className="flex items-center justify-between">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < testimonial.rating ? "text-primary fill-primary" : "text-muted"}`}
                  />
                ))}
              </div>
              <div className="flex gap-1">
                {testimonial.status === "pending" && (
                  <>
                    <button
                      onClick={() => updateStatus(testimonial._id, "approved")}
                      className="p-2 hover:bg-white/10 rounded-lg text-green-400"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => updateStatus(testimonial._id, "rejected")}
                      className="p-2 hover:bg-white/10 rounded-lg text-red-400"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                )}
                <button
                  onClick={() => handleDelete(testimonial._id)}
                  className="p-2 hover:bg-white/10 rounded-lg text-red-400"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {testimonials.length === 0 && (
          <div className="p-8 text-center text-muted">
            No testimonials yet
          </div>
        )}
      </div>
    </div>
  );
}