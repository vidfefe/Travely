import BestHotels from "../components/BestHotels/BestHotels";
import Hero from "../components/Hero/Hero";
import PopularLocations from "../components/PopularLocations/PopularLocations";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularLocations />
      <BestHotels />
    </>
  );
}
