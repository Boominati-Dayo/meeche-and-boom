"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp, Clock, Users, ChevronRight, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Footer } from "@/components/Footer";
import { services, faqs, projects } from "@/lib/data";

const iconMap: Record<string, typeof Sparkles> = {
  Baby: Sparkles,
  Paw: Sparkles,
  MapPin: Sparkles,
  Phone: Sparkles,
  Palette: Sparkles,
  Building: Sparkles,
  ShoppingCart: Sparkles,
  DollarSign: Sparkles,
  Edit: Sparkles,
  Award: Sparkles,
};

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden pt-20 pb-12 bg-gradient-to-b from-background via-background to-secondary">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full min-h-[80vh] gap-8">
          <div className="text-center lg:text-left flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass mb-6 sm:mb-8"
            >
              <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm text-muted">Web Development & Digital Solutions</span>
            </motion.div>

            <h1 className="text-2.5rem sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1]">
              <span className="block">
                <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0, duration: 0.5 }} className="inline-block">
                  Building
                </motion.span>{" "}
              </span>
              <span className="block text-gradient">
                <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }} className="inline-block">
                  Digital
                </motion.span>{" "}
              </span>
              <span className="block">
                <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.5 }} className="inline-block">
                  Experiences
                </motion.span>
              </span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.5 }} className="text-base sm:text-lg md:text-xl text-muted max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10">
              Specializing in silicone baby stores, pet platforms, tracking systems, e-commerce & custom web solutions. Built for businesses that want results.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.5 }} className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Link href="/portfolio">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors text-sm sm:text-base">
                  View Work <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors border border-primary/30 text-sm sm:text-base">
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1.5 }} className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-muted rounded-full flex justify-center pt-1.5 sm:pt-2">
          <div className="w-0.5 sm:w-1 h-1.5 sm:h-2 bg-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: "18", label: "Projects" },
    { value: "100%", label: "Satisfaction" },
    { value: "48hrs", label: "Response" },
    { value: "SEO Ready", label: "Optimized" },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }} className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-sm sm:text-base text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const benefits = [
    { icon: Clock, label: "Fast Delivery", value: "48hrs avg" },
    { icon: Shield, label: "Secure Code", value: "100% Secure" },
    { icon: TrendingUp, label: "SEO", value: "Optimized" },
    { icon: Users, label: "Support", value: "24/7" },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              About <span className="text-gradient">BOOMINATI</span>
            </h2>
            <p className="text-muted text-base sm:text-lg mb-4">
              BOOMINATI is a digital web development brand focused on creating high-performance websites that drive real business results.
            </p>
            <p className="text-muted text-base sm:text-lg mb-6">
              Specializing in niche e-commerce platforms, logistics/tracking systems, and custom digital solutions. We're not just website builders - we're digital architects who transform businesses through strategic, conversion-optimized web experiences.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{item.value}</p>
                    <p className="text-xs text-muted">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary hover:underline">
              Learn more <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="aspect-square max-w-md mx-auto glass rounded-2xl flex items-center justify-center p-8">
              <div className="text-center">
                <Sparkles className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">BOOMINATI</h3>
                <p className="text-muted text-sm">Building Digital Experiences</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-xl mx-auto">
            A selection of our recent projects across different industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8">
          {projects.slice(0, 6).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/portfolio/${project.id}`} className="block group glass rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="h-32 bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-primary/30 group-hover:text-primary/60 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-xs text-muted capitalize">{project.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors text-sm sm:text-base">
              View All Projects <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1, duration: 0.5 }} className="group">
                <Link href={`/services/${service.id}`}>
                  <div className="h-full p-4 sm:p-5 md:p-6 glass rounded-xl sm:rounded-2xl hover:border-primary/50 transition-all duration-300 group-hover:glow">
                    <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 sm:w-5.5 md:w-6 h-5 sm:w-5.5 md:w-6 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">{service.name}</h3>
                    <p className="text-muted text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{service.shortDesc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-xs sm:text-sm font-medium">{service.priceRange}</span>
                      <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-secondary/20">
      <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          Client <span className="text-gradient">Testimonials</span>
        </h2>
        <p className="text-base sm:text-lg text-muted max-w-xl mx-auto">
          Don't just take my word for it
        </p>
      </motion.div>
      <TestimonialsCarousel />
    </section>
  );
}

function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Common <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-muted">
            Quick answers to help you get started
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.slice(0, 4).map((faq, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: idx * 0.1 }} className="glass rounded-xl overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-4 sm:p-5 list-none">
                  <span className="font-medium pr-4 text-sm sm:text-base">{faq.question}</span>
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base text-muted">{faq.answer}</p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/faq" className="inline-flex items-center gap-2 text-primary hover:underline">
            View all FAQs <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} className="relative max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Ready to Build Something <span className="text-gradient">Amazing?</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted mb-6 sm:mb-8">
          Let's create a website that stands out. Contact us today for a free consultation.
        </p>
        <Link href="/contact">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors text-sm sm:text-base">
            Start Your Project <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <FeaturedWork />
      <Services />
      <Testimonials />
      <FAQSection />
      <CTA />
      <Footer />
    </main>
  );
}