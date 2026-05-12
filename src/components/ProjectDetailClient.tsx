"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, ArrowRight, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services } from "@/lib/data";

interface Project {
  _id: string;
  title: string;
  client: string;
  description: string;
  shortDesc: string;
  category: string;
  priceRange: string;
  tags: string[];
  images: string[];
  visitUrl: string;
  featured: boolean;
  showUrl: boolean;
  features: string[];
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const allImages = project.images && project.images.length > 0 ? project.images : [];

  useEffect(() => {
    if (allImages.length <= 1 || isPaused) return;
    
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % allImages.length);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, isPaused, allImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % allImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + allImages.length) % allImages.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  const relatedServices = services.filter(s => 
    (project.category === 'silicone' && s.id === 'silicone') ||
    (project.category === 'pets' && s.id === 'pets') ||
    (project.category === 'logistics' && s.id === 'tracking') ||
    (project.category === 'banking' && s.id === 'banking') ||
    (project.category === 'healthcare' && s.id === 'ecommerce') ||
    (project.category === 'automotive' && s.id === 'business')
  );

  return (
    <main className="min-h-screen relative z-10">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              {allImages.length > 0 ? (
                <>
                  <div 
                    className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/30"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <img 
                      src={allImages[currentSlide]} 
                      alt={`${project.title} - Image ${currentSlide + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    
                    {allImages.length > 1 && (
                      <>
                        <button 
                          onClick={prevSlide}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={nextSlide}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {allImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => goToSlide(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentSlide ? 'bg-primary w-6' : 'bg-background/50 hover:bg-background/80'
                              }`}
                            />
                          ))}
                        </div>
                        
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm font-medium">
                          {currentSlide + 1} / {allImages.length}
                        </div>
                      </>
                    )}
                  </div>

                  {allImages.length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                      {allImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToSlide(idx)}
                          className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            idx === currentSlide ? 'border-primary' : 'border-transparent hover:border-primary/50'
                          }`}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-20 h-20 text-primary/30" />
                </div>
              )}
              
              {project.visitUrl && project.showUrl !== false && (
                <a href={project.visitUrl} target="_blank" className="inline-flex items-center gap-2 text-primary hover:underline mt-6">
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm capitalize mb-4">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg sm:text-xl text-muted mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {(project.tags || []).map((tag: string) => (
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
                    <span className="font-medium">{project.client || "N/A"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Category</span>
                    <span className="font-medium capitalize">{project.category}</span>
                  </div>
                  {project.priceRange && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted">Price Range</span>
                      <span className="font-medium text-primary">{project.priceRange}</span>
                    </div>
                  )}
                </div>
              </div>

              {project.visitUrl && project.showUrl !== false && (
                <a href={project.visitUrl} target="_blank">
                  <button className="flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors w-full justify-center">
                    Visit Live Site <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
              )}
            </div>
          </div>

          {relatedServices.length > 0 && (
            <div className="mt-16">
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
            </div>
          )}

          <div className="mt-16 p-6 sm:p-8 glass rounded-2xl text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Want a similar website?</h3>
            <p className="text-muted mb-6">Contact us to discuss your project needs.</p>
            <Link href="/contact">
              <button className="flex items-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors text-sm sm:text-base">
                Get In Touch <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}