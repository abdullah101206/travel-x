import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TourPackages from "./tours/page";
import About from "./about/page";
import 
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <TourPackages/>
      <About/>
    </>
  );
}
