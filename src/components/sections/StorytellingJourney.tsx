"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const chapters = [
  { id: 1, title: "CHAPTER 1", subtitle: "The Start", description: "Started coding and exploring problem solving." },
  { id: 2, title: "CHAPTER 2", subtitle: "Full Stack Development", description: "Learned React, Node.js, MongoDB, APIs, authentication systems, and scalable architecture." },
  { id: 3, title: "CHAPTER 3", subtitle: "Real-World Engineering", description: "Built production-ready systems and analytics platforms." },
  { id: 4, title: "CHAPTER 4", subtitle: "AI & Machine Learning", description: "Worked on anomaly detection, NLP systems, intelligent automation, and analytics workflows." },
  { id: 5, title: "CHAPTER 5", subtitle: "Product Thinking", description: "Started building startup-oriented platforms like SkillCollab and intelligent business systems." },
  { id: 6, title: "CHAPTER 6", subtitle: "The Future", description: "Focused on scalable AI-powered systems, automation, analytics, and impactful digital products." },
];

export default function StorytellingJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // We can add specific GSAP animations here if needed, 
    // but Framer Motion's useScroll is often cleaner for React sticky sections.
    // Let's use Framer motion for the sticky chapter reveal for a smoother React integration.
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="relative bg-background w-full" ref={containerRef}>
      <div className="py-24 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">The Journey</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="relative">
        {chapters.map((chapter, index) => (
          <JourneyChapter key={chapter.id} chapter={chapter} index={index} total={chapters.length} />
        ))}
      </div>
    </section>
  );
}

function JourneyChapter({ chapter, index, total }: { chapter: any, index: number, total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <div ref={ref} className="h-screen w-full flex items-center justify-center sticky top-0 px-4">
      <motion.div 
        style={{ opacity, scale }}
        className="max-w-3xl w-full text-center relative z-10"
      >
        <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
          {chapter.title}
        </span>
        <h3 className="text-4xl md:text-6xl font-bold text-white font-heading mb-6 tracking-tight">
          {chapter.subtitle}
        </h3>
        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
          {chapter.description}
        </p>
      </motion.div>
      
      {/* Background layer that subtly changes based on chapter */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[20vw] font-bold text-white">0{chapter.id}</span>
      </div>
    </div>
  );
}
