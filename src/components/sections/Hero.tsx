"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "Data Engineer",
  "MERN Stack Developer",
  "Backend Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse-slow" />
      
      <div className="relative z-10 text-center flex flex-col items-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm"
        >
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 font-heading"
        >
          Hi, I'm <span className="text-gradient">Ashish</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 md:h-16 flex items-center justify-center mb-8"
        >
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-2xl md:text-4xl font-medium text-slate-400"
          >
            {roles[roleIndex]}
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          I build scalable applications, intelligent systems, and data-driven solutions that solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-semibold">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-white/10 hover:bg-white/5 text-white">
            <ExternalLink className="mr-2 h-4 w-4" /> View Projects
          </Button>
          <Button size="lg" variant="ghost" className="rounded-full px-8 text-slate-400 hover:text-white hover:bg-white/5">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full"
        >
          {[
            { label: "Records Processed", value: "1M+" },
            { label: "LeetCode Problems", value: "150+" },
            { label: "AWS Certified", value: "Developer" },
            { label: "Academic CGPA", value: "9.0" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-4">Scroll</span>
      </motion.div>
    </section>
  );
}
