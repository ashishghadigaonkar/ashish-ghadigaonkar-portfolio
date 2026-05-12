"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, GitBranch, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`relative flex items-center justify-between p-2 rounded-full transition-all duration-500 ${
            isScrolled
              ? "bg-black/40 backdrop-blur-xl border border-white/10 px-6 shadow-2xl"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
              A
            </div>
            <span className="hidden md:block font-bold text-white tracking-tighter text-xl">
              ASHISH<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-white ${
                  activeSection === link.href.substring(1) ? "text-white" : "text-slate-400"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://github.com/ashishghadigaonkar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ashishghadigaonkar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Link2 className="w-5 h-5" />
              </a>
            </div>
            <Button
              size="sm"
              className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-6"
            >
              Hire Me
            </Button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 px-6 md:hidden"
          >
            <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <hr className="border-white/5" />
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <GitBranch className="w-5 h-5 text-slate-400" />
                    <Link2 className="w-5 h-5 text-slate-400" />
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>
                  <Button size="sm" className="rounded-full bg-primary text-white">
                    Let&apos;s Talk
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
