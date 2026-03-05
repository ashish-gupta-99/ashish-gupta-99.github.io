import SpaceBackground from "./components/SpaceBackground";
import RotatingGear from "./components/RotatingGear";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TechStackSolarSystem from "./components/TechStackSolarSystem";
import CurrentlyLearning from "./components/CurrentlyLearning";
import SeekingVentures from "./components/SeekingVentures";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import QuoteSection from "./components/QuoteSection";

export default function Home() {
  return (
    <>
      {/* Space Background */}
      <SpaceBackground />

      {/* Rotating Gears */}
      <RotatingGear position="left" opposite />
      <RotatingGear position="right" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <TechStackSolarSystem />
        <CurrentlyLearning />
        <SeekingVentures />
        <ProjectsSection />
        <AchievementsSection />
        <QuoteSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-(--foreground-secondary) border-t border-(--border-color)">
        <p className="text-sm">
          © {new Date().getFullYear()} Ashish Gupta. Built with Next.js, React,
          and TypeScript.
        </p>
      </footer>
    </>
  );
}
