"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 max-w-7xl mx-auto gap-12 lg:gap-24 mt-20 md:mt-0">

        {/* Text Content */}
        <motion.div
          style={{ y: yText, opacity }}
          className="flex-1 flex flex-col items-center md:items-start order-2 md:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-gray-300">Available for Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white font-heading leading-[1.1] mb-4"
          >
            Ashish <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Ghadigaonkar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-4 text-lg md:text-xl text-gray-300 font-medium tracking-wide uppercase"
          >
            MERN Stack Developer <span className="text-primary mx-2">•</span> AI/ML Engineer <span className="text-primary mx-2">•</span> Product Builder
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-6 text-base md:text-lg text-gray-500 max-w-xl italic leading-relaxed"
          >
            “Building scalable digital experiences powered by intelligence, storytelling, and modern engineering.”
          </motion.p>
        </motion.div>

        {/* Profile Image with Parallax & Glassmorphism */}
        <motion.div
          style={{ y: yImage, opacity }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 order-1 md:order-2 w-full max-w-[280px] md:max-w-[400px] relative group perspective-1000"
        >
          {/* Floating animation wrapper */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110 opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

            {/* Glassmorphism Frame */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-12 preserve-3d">

              {/* Fallback styling for when image doesn't load/exist yet */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800" />

              <div className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-luminosity group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-1000 z-10">
                <Image
                  src="/ashish-ghadi (1).png"
                  alt="Ashish Ghadigaonkar"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Premium dark blending gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-20 opacity-80" />
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-medium">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
