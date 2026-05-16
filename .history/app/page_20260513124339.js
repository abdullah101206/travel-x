import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DestinationCard from "./components/DestinationCard";
import TourPackages from "./tours/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <DestinationCard/>
    </>
  );
}
