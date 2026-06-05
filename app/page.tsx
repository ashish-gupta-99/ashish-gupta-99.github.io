import SpaceBackground from "./components/SpaceBackground";
// import RotatingGear from "./components/RotatingGear";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import TechStackSolarSystem from "./components/TechStackSolarSystem";
// import CurrentlyLearning from "./components/CurrentlyLearning";
import ProjectsSection from "./components/ProjectsSection";
import HelpSection from "./components/HelpSection";
import SeekingVentures from "./components/SeekingVentures";
import AchievementsSection from "./components/AchievementsSection";
import QuoteSection from "./components/QuoteSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      {/* Space Background */}
      <SpaceBackground />

      {/* Rotating Gears - Commented out for future use
      <RotatingGear position="left" opposite />
      <RotatingGear position="right" />
      */}

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <TechStackSolarSystem />
        {/* <CurrentlyLearning /> */}
        <ProjectsSection />
        <HelpSection />
        <SeekingVentures />
        <AchievementsSection />
        <QuoteSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-(--foreground-secondary) border-t border-(--border-color)">
        <p className="text-sm px-6 leading-relaxed">
          © {new Date().getFullYear()} Ashish Gupta. Built with Next.js, React,
          and TypeScript.
        </p>
      </footer>
    </>
  );
}
