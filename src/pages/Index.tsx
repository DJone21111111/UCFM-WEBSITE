import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import GiveSection from "@/components/GiveSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <VideoSection />
        <GallerySection />
        <ContactSection />
        <GiveSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
