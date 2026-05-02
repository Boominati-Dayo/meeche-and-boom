"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp, Palette, ShoppingCart, DollarSign, Baby, PawPrint, MapPin, Phone, Building, Edit, Award } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { services } from "@/lib/data";

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

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <Link href="/portfolio">
        <div className="h-full p-4 sm:p-5 md:p-6 glass rounded-xl sm:rounded-2xl hover:border-primary/50 transition-all duration-300 group-hover:glow">
          <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-5 sm:w-5.5 md:w-6 h-5 sm:w-5.5 md:w-6 text-primary" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">{service.name}</h3>
          <p className="text-muted text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{service.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-primary text-xs sm:text-sm font-medium">{service.priceRange}</span>
            <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: "50+", label: "Projects" },
    { value: "100%", label: "Satisfaction" },
    { value: "48hrs", label: "Response" },
    { value: "SEO", label: "Rank #1" },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-1 sm:mb-2">{stat.value}</p>
              <p className="text-xs sm:text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        className="relative max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Ready to Build Something <span className="text-gradient">Amazing?</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted mb-6 sm:mb-8">
          Let&apos;s create a website that stands out. Contact us today for a free consultation.
        </p>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors text-sm sm:text-base"
          >
            Start Your Project <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />

      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-xl md:max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}