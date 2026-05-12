"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink, Star, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Anomatrix",
    subtitle: "Financial Anomaly Detection System",
    tech: ["Python", "Node.js", "PostgreSQL", "ML"],
    description:
      "Processed 1M+ financial transactions with real-time anomaly detection and automated reporting workflows.",
    github: "https://github.com/ashishghadigaonkar",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "GroceryShopONE",
    subtitle: "AI-Driven Management System",
    tech: ["MERN Stack", "Python", "Analytics"],
    description:
      "Multi-role access system with RFM segmentation, demand forecasting, and CLV computation.",
    github: "https://github.com/ashishghadigaonkar",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop",
  },
  {
    title: "HVAC Analytics",
    subtitle: "Chiller Optimization Platform",
    tech: ["Python", "Power BI", "Analytics"],
    description: "KPI dashboards and ROI simulation models for industrial energy optimization.",
    github: "https://github.com/ashishghadigaonkar",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "SkillCollab",
    subtitle: "Collaboration Platform",
    tech: ["MERN Stack", "Socket.io"],
    description:
      "Team collaboration with secure authentication, Kanban workflow, and project showcase.",
    github: "https://github.com/ashishghadigaonkar",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Smart Job Portal",
    subtitle: "AI-Based Recommendations",
    tech: ["MERN Stack", "NLP", "LLM"],
    description: "Resume-job matching engine improving screening efficiency by 60% using AI.",
    github: "https://github.com/ashishghadigaonkar",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "AI Interview Chatbot",
    subtitle: "NLP + LLM Assistant",
    tech: ["NLP", "LLM", "Python"],
    description:
      "AI interview assistant with high intent accuracy and real-time feedback.",
    github: "https://github.com/ashishghadigaonkar",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=2012&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 w-full px-6 flex flex-col items-center bg-slate-950/30"
    >
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white font-heading"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-40 transition-opacity z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:text-primary transition-colors cursor-pointer">
                    <Star className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs font-medium text-primary mb-4">{project.subtitle}</p>
                <p className="text-sm text-slate-400 mb-6 line-clamp-3">{project.description}</p>

                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <GitBranch className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    aria-label="Live Demo"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto text-primary hover:text-white hover:bg-primary/20 rounded-full group/btn"
                  >
                    Details{" "}
                    <Code className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/ashishghadigaonkar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-10 py-3 border border-white/10 hover:bg-white/5 text-white font-medium text-sm transition-colors"
          >
            <GitBranch className="h-5 w-5" /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
