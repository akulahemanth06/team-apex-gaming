import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ContentSection from "@/components/sections/ContentSection";
import HeroSection from "@/components/sections/HeroSection";
import MatchesSection from "@/components/sections/MatchesSection";
import RosterSection from "@/components/sections/RosterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <RosterSection />
        <MatchesSection />
        <ContentSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
