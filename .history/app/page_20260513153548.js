import Hero from "./components/Hero";
import TourPackages from "./components/TourPackages";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />

      <TourPackages />
      <WhyChooseUs />
      <FAQ />
      <Testimonials />
      <ContactSection />
    </>
  );
}