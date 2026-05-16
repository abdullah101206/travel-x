import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TourPackages from "./tours/page";
import About from "./about/page";
import Contact from "./contact/page";
import WhyChooseUs from "./whychooseus/page";
import FAQ from "./FAQ/page";
import Testimonials from "./testimonials/page";
import

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <TourPackages/>
      <About/>
      <Contact/>
      <WhyChooseUs/>
      <FAQ/>
      <Testimonials/>
    </>
  );
}
