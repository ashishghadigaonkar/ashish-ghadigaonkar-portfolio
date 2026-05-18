"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectsByCategory, Project } from "@/lib/data/projects";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";

export default function NetflixProjects() {
  const categories = getProjectsByCategory();

  return (
    <section className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden z-20">
      <div className="max-w-[100vw] mx-auto">
        <div className="px-8 md:px-16 mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            The Showcase
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A curated collection of scalable systems, intelligent models, and premium web experiences.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {categories.map((category, idx) => (
            <ProjectRow key={idx} category={category.category} projects={category.items} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ category, projects }: { category: string, projects: Project[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="flex flex-col relative group">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 px-8 md:px-16 flex items-center gap-2">
        {category}
        <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
      
      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-8 md:px-16 pb-12 pt-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
        {/* Empty padding at the end so last item can be scrolled fully into view */}
        <div className="min-w-[10vw] flex-shrink-0" />
      </div>
    </div>
  );
}

const getProjectGradient = (id: string) => {
  const gradients: Record<string, string> = {
    p1: "from-emerald-500/20 via-emerald-950/40 to-black",
    p2: "from-blue-500/20 via-blue-950/40 to-black",
    p3: "from-cyan-500/20 via-cyan-950/40 to-black",
    p4: "from-indigo-500/20 via-indigo-950/40 to-black",
    p5: "from-purple-500/20 via-purple-950/40 to-black",
    p6: "from-pink-500/20 via-pink-950/40 to-black",
    p7: "from-rose-500/20 via-rose-950/40 to-black",
    p8: "from-amber-500/20 via-amber-950/40 to-black",
    p9: "from-teal-500/20 via-teal-950/40 to-black",
    p10: "from-violet-500/20 via-violet-950/40 to-black",
  };
  return gradients[id] || "from-slate-800 via-slate-950 to-black";
};

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const isPlaceholder = project.thumbnail.includes("placeholder-thumb");
  const gradientClass = getProjectGradient(project.id);

  return (
    <div 
      className="relative flex-shrink-0 snap-center transition-all duration-300 z-10 hover:z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Card */}
      <motion.div 
        layoutId={`project-card-${project.id}`}
        className="w-[280px] h-[160px] md:w-[350px] md:h-[200px] rounded-md overflow-hidden relative cursor-pointer group bg-black border border-white/5"
      >
        {/* Dynamic technology gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} z-0`} />
        
        {/* Subtle grid mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0" />

        {/* Ambient glowing dot */}
        <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-primary/40 animate-pulse z-10" />

        {!isPlaceholder && !imageError && (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        )}
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20" />
        
        {/* Base Card Text Content */}
        <div className={`absolute bottom-0 left-0 p-5 z-30 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase block mb-1">
            {project.category}
          </span>
          <h4 className="text-white font-bold text-lg md:text-xl font-heading">{project.title}</h4>
        </div>
      </motion.div>

      {/* Hover Expanded Card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1.15, y: -20 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] md:w-[400px] bg-[#141414] rounded-lg shadow-2xl overflow-hidden z-50 border border-white/10"
            style={{ originY: 0.5 }}
          >
            <div className="w-full h-[180px] relative bg-black flex items-center justify-center overflow-hidden">
               <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
               
               {!isPlaceholder && !imageError && (
                 <img
                   src={project.thumbnail}
                   alt={project.title}
                   className="absolute inset-0 w-full h-full object-cover z-10"
                   onError={() => setImageError(true)}
                 />
               )}
               <div className="absolute inset-0 bg-black/40 z-20" />
               
               {/* Ambient glowing text inside the thumbnail box */}
               <div className="relative z-30 text-center px-6">
                 <span className="text-xs font-mono tracking-widest text-primary uppercase block mb-2">
                   {project.techStack.join(" // ")}
                 </span>
               </div>
            </div>
            
            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Link href={`/projects/${project.slug}`}>
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Play className="w-5 h-5 ml-1" />
                  </button>
                </Link>
                <h4 className="text-white font-bold text-xl">{project.title}</h4>
              </div>
              
              <div className="flex gap-2 text-sm">
                <span className="text-green-500 font-medium">98% Match</span>
                <span className="text-gray-400">{project.techStack.length} Techs</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-1">
                {project.techStack.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
