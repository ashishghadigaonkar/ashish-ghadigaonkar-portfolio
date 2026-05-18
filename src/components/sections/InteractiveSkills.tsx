"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Layout, Server, BrainCircuit, PieChart, Cloud } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    color: "from-cyan-400 to-blue-500",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    color: "from-green-400 to-emerald-600",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Microservices"],
  },
  {
    id: "aiml",
    title: "AI/ML",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "from-purple-400 to-pink-500",
    skills: ["Machine Learning", "NLP", "Prompt Engineering", "LLM Integration", "Feature Engineering"],
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: <PieChart className="w-6 h-6" />,
    color: "from-yellow-400 to-orange-500",
    skills: ["Power BI", "Tableau", "Pandas", "NumPy", "KPI Design", "Forecasting"],
  },
  {
    id: "cloud",
    title: "Cloud & Tools",
    icon: <Cloud className="w-6 h-6" />,
    color: "from-orange-400 to-red-500",
    skills: ["AWS", "Docker", "GitHub", "Postman"],
  },
];

export default function InteractiveSkills() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full py-32 bg-[#0a0a0a] overflow-hidden" ref={containerRef}>
      {/* Decorative background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
            The Arsenal
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            A precise combination of modern frontend aesthetics, robust backend architectures, and intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, index }: { category: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10 }}
      className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-md group relative overflow-hidden flex flex-col h-full shadow-2xl"
    >
      {/* Hover gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />
      
      <div className="relative z-10 flex-1">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${category.color} bg-opacity-10 text-white shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500`}>
          {category.icon}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
          {category.title}
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill: string, i: number) => (
            <span 
              key={i} 
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-medium group-hover:bg-white/10 group-hover:text-white transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
