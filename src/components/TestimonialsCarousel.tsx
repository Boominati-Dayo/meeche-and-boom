"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Sparkles, Quote } from "lucide-react";
import { useInView } from "framer-motion";
import { testimonials } from "@/lib/data";

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const t = testimonials[currentIndex];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="relative max-w-4xl mx-auto px-4"
    >
      <div className="absolute top-0 left-4 text-primary/20 -translate-y-4">
        <Quote className="w-16 h-16" />
      </div>

      <div className="relative overflow-hidden min-h-[280px] flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full text-center px-8"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
              "{t.quote}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted">{t.company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="p-2 glass rounded-full hover:bg-primary/20 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "w-8 bg-primary" : "bg-muted"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 glass rounded-full hover:bg-primary/20 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}