"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="inline-block"
    >
      {text}{" "}
    </motion.span>
  );
}

function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ 
        x: cursorXSpring, 
        y: cursorYSpring,
        translateX: 0,
        translateY: 0
      }}
    />
  );
}

function FloatingShape({ delay, className }: { delay: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: [0.1, 0.3, 0.1], scale: 1, rotate: 360 } : {}}
      transition={{ 
        duration: 20, 
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
      className={className}
    />
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20 px-3 sm:px-4 md:pt-24 lg:pt-28 pb-12">
      <Cursor />
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <FloatingShape delay={0} className="absolute top-16 sm:top-20 left-2 sm:left-10 w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 bg-primary/10 rounded-full blur-3xl" />
        <FloatingShape delay={2} className="absolute bottom-16 sm:bottom-20 right-2 sm:right-10 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:w-80 lg:h-96 bg-primary/5 rounded-full blur-3xl" />
        <FloatingShape delay={4} className="absolute top-1/2 left-1/2 w-24 sm:w-32 md:w-40 lg:w-48 h-24 sm:h-32 md:h-40 lg:h-48 bg-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass mb-6 sm:mb-8"
          >
            <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm text-muted">Premium Web Development</span>
          </motion.div>

          <h1 className="text-2.5rem sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1]">
            <span className="block">
              <AnimatedText text="Crafting" delay={0} />
            </span>
            <span className="block text-gradient">
              <AnimatedText text="Digital" delay={0.2} />
            </span>
            <span className="block">
              <AnimatedText text="Experiences" delay={0.4} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
          >
            Expert in silicone baby websites, pet platforms, tracking systems, e-commerce & premium digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4"
          >
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background rounded-full font-semibold hover:bg-primary-light transition-colors text-sm sm:text-base"
              >
                View My Work <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors border border-primary/30 text-sm sm:text-base"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20"
          >
            {[
              { icon: Zap, label: "Fast Delivery", value: "48hrs avg" },
              { icon: Shield, label: "Secure Code", value: "100% Secure" },
              { icon: TrendingUp, label: "SEO Optimized", value: "Rank #1" },
              { icon: Sparkles, label: "Premium Design", value: "Unique" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 mx-auto mb-1.5 sm:mb-2 text-primary" />
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-gradient">{item.value}</p>
                <p className="text-xs sm:text-sm text-muted">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-muted rounded-full flex justify-center pt-1.5 sm:pt-2"
        >
          <div className="w-0.5 sm:w-1 h-1.5 sm:h-2 bg-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}