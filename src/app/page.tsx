import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Recognitions from "@/components/sections/Recognitions";
import Contact from "@/components/sections/Contact";
import Preloader from "@/components/visuals/Preloader";
import CustomCursor from "@/components/visuals/CustomCursor";
import Background from "@/components/visuals/Background";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#050816]">
      <Preloader />
      <CustomCursor />
      <Background />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Recognitions />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
