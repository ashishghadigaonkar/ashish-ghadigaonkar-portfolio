import { getProjectBySlug, projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch as Github } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectCaseStudy(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Parallax Area */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/80 to-[#0a0a0a] z-10" />
        <div className="absolute inset-0 bg-primary/20 blur-[200px] z-0" />
        
        {/* Nav overlay */}
        <div className="absolute top-0 w-full p-8 z-50 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Showcase</span>
          </Link>
        </div>

        <div className="relative z-20 text-center max-w-4xl px-4 mt-20">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">{project.title}</h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
            {project.shortDescription}
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            {project.caseStudy.liveDemoUrl && (
              <a href={project.caseStudy.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {project.caseStudy.githubUrl && (
              <a href={project.caseStudy.githubUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full font-medium flex items-center gap-2 hover:bg-white/20 transition-colors">
                <Github className="w-4 h-4" /> Source Code
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-20">
        <div className="space-y-32">
          {/* Problem & Idea */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4">The Problem</h2>
              <p className="text-xl text-gray-300 leading-relaxed">{project.caseStudy.problem}</p>
            </div>
            <div>
              <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4">The Idea</h2>
              <p className="text-xl text-gray-300 leading-relaxed">{project.caseStudy.idea}</p>
            </div>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.2em] mb-4 text-center">The Solution</h2>
            <div className="text-3xl md:text-5xl font-heading font-medium leading-tight text-center max-w-3xl mx-auto">
              {project.caseStudy.solution}
            </div>
          </div>

          {/* Architecture & Challenges */}
          <div className="grid md:grid-cols-2 gap-16 border-t border-white/10 pt-20">
            <div>
              <h3 className="text-2xl font-bold mb-6">Architecture</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{project.caseStudy.architecture}</p>
              <ul className="mt-8 space-y-4">
                {project.caseStudy.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Challenges</h3>
              <div className="p-8 bg-[#111] rounded-2xl border border-white/5">
                <p className="text-gray-400 text-lg leading-relaxed italic">
                  "{project.caseStudy.challenges}"
                </p>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 mt-12">Future Scope</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{project.caseStudy.futureScope}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="w-full py-12 text-center border-t border-white/5 mt-20">
         <p className="text-gray-600 uppercase tracking-widest text-sm">Ashish Ghadigaonkar // {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
