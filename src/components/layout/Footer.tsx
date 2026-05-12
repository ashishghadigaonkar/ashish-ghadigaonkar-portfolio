"use client";

import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, X, ChevronUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-20 w-full px-6 flex flex-col items-center bg-[#050816] overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white font-bold text-2xl group-hover:rotate-12 transition-transform">
                A
              </div>
              <span className="font-bold text-white tracking-tighter text-2xl">
                ASHISH<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Building the future with code and intelligence. Let&apos;s connect and create
              something impactful together.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                Quick Links
              </h4>
              <a href="#about" className="text-slate-400 hover:text-primary text-sm transition-colors">
                About
              </a>
              <a href="#skills" className="text-slate-400 hover:text-primary text-sm transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-slate-400 hover:text-primary text-sm transition-colors">
                Projects
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Social</h4>
              <a
                href="https://github.com/ashishghadigaonkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary text-sm transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ashishghadigaonkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary text-sm transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://dev.to/ashish_ghadigaonkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary text-sm transition-colors"
              >
                Dev.to
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contact</h4>
              <a
                href="mailto:ashishghadigaonkar85@gmail.com"
                className="text-slate-400 hover:text-primary text-sm transition-colors"
              >
                Email
              </a>
              <span className="text-slate-400 text-sm">Mumbai, India</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>© 2026 Ashish Ghadigaonkar.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 animate-pulse mx-1" /> in India
            </span>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/ashishghadigaonkar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <GitBranch className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ashishghadigaonkar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Link2 className="w-5 h-5" />
            </a>
            <a
              href="mailto:ashishghadigaonkar85@gmail.com"
              aria-label="Email"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://dev.to/ashish_ghadigaonkar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dev.to"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-primary/50 transition-all"
          >
            <span className="text-xs font-bold uppercase tracking-widest pl-2">Back to top</span>
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
