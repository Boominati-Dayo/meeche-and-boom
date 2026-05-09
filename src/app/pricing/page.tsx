"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { pricingPackages } from "@/lib/data";

function PricingCard({ pkg, index }: { pkg: typeof pricingPackages[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative ${pkg.popular ? 'lg:-mt-4' : ''} z-0`}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-background text-sm font-medium rounded-full z-50">
          Most Popular
        </div>
      )}
      <div className={`h-full p-8 glass rounded-2xl ${pkg.popular ? 'border-primary glow' : ''} relative z-10`}>
        <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
        <p className="text-4xl font-bold text-gradient mb-2">{pkg.price}</p>
        <p className="text-muted text-sm mb-6">{pkg.description}</p>
        
        <ul className="space-y-3 mb-8">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-full font-semibold transition-colors ${
              pkg.popular
                ? 'bg-primary text-background hover:bg-primary-light'
                : 'glass hover:bg-white/10'
            }`}
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function PricingPage() {
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
              Simple <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Choose the package that fits your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <PricingCard key={pkg.name} pkg={pkg} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 p-8 glass rounded-2xl text-center"
          >
            <h3 className="text-xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted mb-6">
              Every business is unique. Contact me for a custom quote tailored to your specific requirements.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors"
              >
                Request Custom Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}