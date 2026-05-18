"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function NowBuilding() {
  const projects = [
    "SkillCollab v2.0",
    "AI-powered systems",
    "Competitive coding platform",
    "Startup-ready products",
    "Next.js 15 Architectures"
  ];

  return (
    <section className="w-full py-16 bg-[#111111] border-y border-white/5 overflow-hidden">
      <div className="flex items-center gap-6 px-4 md:px-8 mb-8">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-sm font-mono text-primary uppercase tracking-widest">
            Live Status
          </span>
        </div>
        <h2 className="text-2xl font-bold text-white">Now Building</h2>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        {/* Ticker Content */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex whitespace-nowrap"
        >
          {/* Double the list to create a seamless loop */}
          {[...projects, ...projects].map((project, index) => (
            <div 
              key={index} 
              className="flex items-center gap-8 mx-8"
            >
              <span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 opacity-50 hover:opacity-100 hover:from-white hover:to-primary transition-all duration-300 cursor-default">
                {project}
              </span>
              <span className="w-3 h-3 rounded-full bg-primary/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
