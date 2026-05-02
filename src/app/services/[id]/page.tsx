"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Sparkles, ArrowRight, Check, Clock, ChevronRight, Palette, ShoppingCart, DollarSign, Baby, PawPrint, MapPin, Phone, Building, Edit, Award } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services, projects } from "@/lib/data";

const iconMap: Record<string, typeof Sparkles> = {
  Baby: Sparkles,
  Paw: PawPrint,
  MapPin: MapPin,
  Phone: Phone,
  Palette: Palette,
  Building: Building,
  ShoppingCart: ShoppingCart,
  DollarSign: DollarSign,
  Edit: Edit,
  Award: Award,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.id as string;
  const service = services.find(s => s.id === serviceId);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  if (!service) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
            <Link href="/" className="text-primary hover:underline">Go Home</Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const Icon = iconMap[service.icon] || Sparkles;
  const relatedProjects = projects.filter(p => 
    p.category === service.id || 
    (service.id === 'silicone' && p.category === 'silicone') ||
    (service.id === 'pets' && p.category === 'pets') ||
    (service.id === 'tracking' && (p.category === 'logistics' || p.category === 'tracking')) ||
    (service.id === 'business' && p.category === 'business') ||
    (service.id === 'ecommerce' && (p.category === 'healthcare' || p.category === 'silicone'))
  ).slice(0, 3);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>

          <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{service.name}</h1>
              <p className="text-lg sm:text-xl text-muted mb-6">{service.description}</p>
              
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl md:text-3xl font-bold text-gradient">{service.priceRange}</span>
              </div>

              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors">
                  Get Started <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold mb-4">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <Clock className="w-4 h-4" />
                  <span>Process: {service.process}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {relatedProjects.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="mt-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Related Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {relatedProjects.map((project) => (
                  <a key={project.id} href={project.url} target="_blank" className="block group glass rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                    <div className="h-32 bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-primary/30 group-hover:text-primary/60 transition-colors" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{project.name}</h3>
                      <p className="text-xs text-muted capitalize">{project.category}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="mt-16 p-6 sm:p-8 glass rounded-2xl text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Ready to get started?</h3>
            <p className="text-muted mb-6">Contact us today for a free consultation on your {service.name.toLowerCase()} project.</p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors text-sm sm:text-base">
                Contact Us <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}