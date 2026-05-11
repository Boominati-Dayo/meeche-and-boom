"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Star, Sparkles, Quote, Loader2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Testimonial {
  _id: string;
  name: string;
  company: string;
  quote: string;
  rating: number;
  avatar?: string;
  status?: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        const approved = (Array.isArray(data) ? data : []).filter(
          (t: Testimonial) => t.status === "approved" || !t.status
        );
        setTestimonials(approved);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Client <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Don&apos;t just take my word for it - hear from satisfied clients
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center min-h-[200px]">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial._id}
                  className="p-8 glass rounded-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-muted mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {testimonial.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted">{testimonial.company || "Client"}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted text-lg mb-6">No testimonials yet. Be our first client!</p>
              <Link href="/testimonials/submit">
                <button className="px-6 py-3 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors">
                  Submit a Testimonial
                </button>
              </Link>
            </div>
          )}

          <div className="mt-16 p-8 glass rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Become a Happy Client?</h3>
            <p className="text-muted mb-6 max-w-xl mx-auto">
              Join the many satisfied clients who have transformed their online presence. Let&apos;s work together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors">
                  Start Your Project
                </button>
              </Link>
              <Link href="/testimonials/submit">
                <button className="px-8 py-4 bg-secondary border border-border rounded-full font-semibold hover:bg-white/5 transition-colors">
                  Leave a Review
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}