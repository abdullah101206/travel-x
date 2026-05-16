import Hero from "./components/Hero";
import TourPackages from "./tours/page";
import About from "./about/page";
import Contact from "./contact/page";
import WhyChooseUs from "./whychooseus/page";
import FAQ from "./FAQ/page";
import Testimonials from "./testimonials/page";

export default function Home() {
  return (
    <>
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
