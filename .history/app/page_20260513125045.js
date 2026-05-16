import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TourPackages from "./tours/page";
import About from "./about/page";
import Contact from "./contact/page";
import WhyChooseUs from "./whychooseus/page";




export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <TourPackages/>
      <About/>
      <Contact/>
    </>
  );
}
