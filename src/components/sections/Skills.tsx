"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Database, 
  BrainCircuit, 
  Cloud, 
  PieChart,
  Server,
  TerminalSquare
} from "lucide-react";

const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Microservices", "API Integration"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    id: "aiml",
    title: "AI/ML",
    icon: <BrainCircuit className="w-5 h-5" />,
    skills: ["Machine Learning", "NLP", "Feature Engineering", "Anomaly Detection", "Prompt Engineering", "LLM Integration", "RAG (Basic)", "Model Evaluation", "Data Preprocessing"],
  },
  {
    id: "analytics",
    title: "Data Analytics & BI",
    icon: <PieChart className="w-5 h-5" />,
    skills: ["Power BI", "Tableau", "Pandas", "NumPy", "EDA", "KPI Design", "Forecasting", "RFM Analysis", "CLV Modeling", "Data Visualization", "Power Query", "DAX"],
  },
  {
    id: "cloud",
    title: "Cloud & Tools",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["AWS", "Docker", "Git", "GitHub", "Postman", "Bitbucket", "Jupyter Notebook"],
  },
  {
    id: "corecs",
    title: "Core CS",
    icon: <TerminalSquare className="w-5 h-5" />,
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "System Design Basics"],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="relative py-24 w-full px-6 flex flex-col items-center bg-slate-950/50">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-4"
          >
            My Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white font-heading"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h3>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === category.id
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {skillCategories.find(c => c.id === activeTab)?.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <span className="relative z-10 text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                  
                  {/* Skill Pulse Dot */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:animate-ping transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Marquee (Bonus Effect) */}
        <div className="mt-24 overflow-hidden py-10 opacity-30 select-none pointer-events-none">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-20 px-10">
                {skillCategories.flatMap(c => c.skills).map((skill, j) => (
                  <span key={j} className="text-4xl md:text-6xl font-black text-transparent stroke-white stroke-1 uppercase tracking-tighter" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
