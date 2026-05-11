"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TestimonialSubmitPage() {
  const [rating, setRating] = useState(5);
  const [form, setForm] = useState({ name: "", company: "", quote: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, rating }),
      });
      
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Failed to submit testimonial:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-10 h-10 text-green-400" />
            </motion.div>
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-muted text-lg mb-8">
              Your testimonial has been submitted and is pending review. 
              We'll publish it once approved.
            </p>
            <a href="/" className="text-primary hover:underline">
              Back to Home
            </a>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Share Your <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-muted text-lg">
              We value your feedback. Share your experience working with us.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Your Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company/Business</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none"
                placeholder="Your Business Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-2 hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating
                          ? "text-primary fill-primary"
                          : "text-muted"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Experience *</label>
              <textarea
                required
                rows={5}
                value={form.quote}
                onChange={(e) => setForm({ ...form, quote: e.target.value })}
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none resize-none"
                placeholder="Tell us about your experience working with Meeche & Boom Co..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary-light transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              {submitting ? "Submitting..." : "Submit Testimonial"}
            </button>

            <p className="text-center text-sm text-muted">
              Your testimonial will be reviewed before being published.
            </p>
          </motion.form>
        </div>
      </div>

      <Footer />
    </main>
  );
}