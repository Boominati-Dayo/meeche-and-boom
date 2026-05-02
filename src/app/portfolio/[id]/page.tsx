"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Sparkles, ArrowRight, ExternalLink, ChevronRight, Check, Globe, Shield, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects, services } from "@/lib/data";

export default function PortfolioDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projects.find(p => p.id === projectId);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

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

  const relatedServices = services.filter(s => 
    (project.category === 'silicone' && s.id === 'silicone') ||
    (project.category === 'pets' && s.id === 'pets') ||
    (project.category === 'logistics' && s.id === 'tracking') ||
    (project.category === 'banking' && s.id === 'banking') ||
    (project.category === 'healthcare' && s.id === 'ecommerce') ||
    (project.category === 'automotive' && s.id === 'business')
  );

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </motion.div>

          <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div className="aspect-video bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-20 h-20 text-primary/30" />
              </div>
              <a href={project.url} target="_blank" className="inline-flex items-center gap-2 text-primary hover:underline">
                Visit Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm capitalize mb-4">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{project.name}</h1>
              <p className="text-lg sm:text-xl text-muted mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-secondary rounded-full text-sm text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="glass rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Client</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Category</span>
                    <span className="font-medium capitalize">{project.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Price Range</span>
                    <span className="font-medium text-primary">{project.price}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="glass rounded-xl p-4 text-center">
                  <Globe className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted">Responsive</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted">Secure</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted">SEO Ready</p>
                </div>
              </div>

              <a href={project.url} target="_blank">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors w-full justify-center">
                  Visit Live Site <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
            </div>
          </motion.div>

          {relatedServices.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="mt-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Related Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {relatedServices.map((service) => (
                  <Link key={service.id} href={`/services/${service.id}`} className="block group glass rounded-xl p-5 hover:border-primary/50 transition-all">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                    <p className="text-sm text-muted line-clamp-2 mb-3">{service.shortDesc}</p>
                    <span className="text-xs text-primary">{service.priceRange}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="mt-16 p-6 sm:p-8 glass rounded-2xl text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Want a similar website?</h3>
            <p className="text-muted mb-6">Contact us to discuss your project needs.</p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors text-sm sm:text-base">
                Get In Touch <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}