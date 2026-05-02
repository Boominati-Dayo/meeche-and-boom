"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, Zap, Shield, Award, Clock, Globe, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const values = [
  { icon: Zap, title: "Fast Delivery", description: "Projects delivered on time, every time. Average 2-4 weeks turnaround." },
  { icon: Shield, title: "Secure Code", description: "Enterprise-grade security practices to protect your data and users." },
  { icon: Award, title: "Premium Quality", description: "Meticulous attention to detail in every line of code." },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock support for peace of mind." },
  { icon: Globe, title: "Global Reach", description: "Websites optimized for international audiences and SEO." },
];

export default function AboutPage() {
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
            className="text-center mb-16"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">BOOMINATI</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Crafting premium digital experiences since 2020
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Who I Am</h2>
              <p className="text-muted leading-relaxed">
                BOOMINATI is a premium web development brand dedicated to crafting exceptional digital experiences. 
                With years of experience in the industry, I specialize in creating stunning, functional websites that help 
                businesses stand out in the digital landscape.
              </p>
              <p className="text-muted leading-relaxed">
                My expertise spans across multiple industries including silicone baby websites, pet breeder platforms, 
                tracking and logistics systems, e-commerce solutions, and banking platforms. Each project is approached 
                with meticulous attention to detail and a focus on delivering results.
              </p>
              <p className="text-muted leading-relaxed">
                What sets BOOMINATI apart is the commitment to quality, transparency, and client satisfaction. 
                I believe in building long-term relationships with clients through exceptional service and results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">What I Do</h2>
              <ul className="space-y-4">
                {[
                  "Custom website development with modern technologies",
                  "E-commerce solutions with secure payments",
                  "Real-time tracking and logistics systems",
                  "SEO optimization for maximum visibility",
                  "Responsive design for all devices",
                  "Ongoing maintenance and support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-12">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="p-6 glass rounded-2xl text-center"
                >
                  <value.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-20 p-12 glass rounded-2xl text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Let&apos;s create something amazing. Contact me today for a free consultation on your project.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}