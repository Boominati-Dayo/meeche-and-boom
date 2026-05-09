"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Filter, Search, Sparkles, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/data";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "silicone", label: "Silicone Baby" },
  { id: "pets", label: "Pet Sites" },
  { id: "logistics", label: "Tracking" },
  { id: "banking", label: "Banking" },
  { id: "healthcare", label: "Healthcare" },
  { id: "business", label: "Business" },
  { id: "automotive", label: "Automotive" },
  { id: "ecommerce", label: "E-commerce" },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <Link href={`/portfolio/${project.id}`}>
        <div className="group h-full glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:glow">
          <div className="relative h-48 bg-gradient-to-br from-secondary to-accent flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <Sparkles className="w-12 h-12 text-primary/30 group-hover:text-primary/60 transition-colors" />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-primary capitalize">
              {project.category}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
            <p className="text-muted text-sm mb-4 line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-secondary rounded-full text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-primary font-medium">{project.price}</span>
              <div className="flex items-center gap-1 text-sm text-muted group-hover:text-primary transition-colors">
                View Details
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Explore my collection of premium websites across various industries
            </p>
          </motion.div>

          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? "bg-primary text-background"
                        : "glass text-muted hover:text-foreground hover:border-primary/50"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 glass rounded-full text-sm focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-16"
                >
                  <Sparkles className="w-16 h-16 mx-auto mb-4 text-primary/30" />
                  <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                  <p className="text-muted">Try adjusting your filters or search query</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-16">
            <p className="text-muted">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}