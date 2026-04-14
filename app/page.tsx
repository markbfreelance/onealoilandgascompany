import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./home/hero-section";
import AboutSection from "./home/about-section";
import ServicesSection from "./home/services-section";
import LegacySection from "./home/legacy-section";
import ImageBreak from "./home/image-break";
import OwnerRelationsSection from "./home/owner-relations-section";
import ContactSection from "./home/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LegacySection />
        <ImageBreak />
        <OwnerRelationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
