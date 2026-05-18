import Preloader from "@/components/visuals/Preloader";
import CustomCursor from "@/components/visuals/CustomCursor";
import Background from "@/components/visuals/Background";
import CinematicHero from "@/components/sections/CinematicHero";
import StorytellingJourney from "@/components/sections/StorytellingJourney";
import Experience from "@/components/sections/Experience";
import NetflixProjects from "@/components/sections/NetflixProjects";
import BusinessImpactMetrics from "@/components/sections/BusinessImpactMetrics";
import InteractiveSkills from "@/components/sections/InteractiveSkills";
import Recognitions from "@/components/sections/Recognitions";
import NowBuilding from "@/components/sections/NowBuilding";
import CinematicFooter from "@/components/layout/CinematicFooter";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0a0a0a]">
      <Preloader />
      <CustomCursor />
      <Background />
      <Navbar />
      
      <div className="relative z-10 flex flex-col">
        <CinematicHero />
        <StorytellingJourney />
        <Experience />
        <BusinessImpactMetrics />
        <NetflixProjects />
        <NowBuilding />
        <InteractiveSkills />
        <Recognitions />
        <CinematicFooter />
      </div>
    </main>
  );
}
