import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TourPackages from "./tours/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <TourPackages/>
    </>
  );
}
