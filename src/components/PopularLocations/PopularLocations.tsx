import SectionHeading from "@/ui/SectionHeading";
import React from "react";

import Delhi from "../../../public/assets/delhi.jpg";
import Paris from "../../../public/assets/paris.jpg";
import Berlin from "../../../public/assets/berlin.jpg";
import Dubai from "../../../public/assets/dubai.jpg";
import Card from "../Card";

export const data = [
  {
    image: Delhi,
    city: "Delphi",
    numOfPlaces: 73,
  },
  {
    image: Berlin,
    city: "Berlin",
    numOfPlaces: 33,
  },
  {
    image: Paris,
    city: "Paris",
    numOfPlaces: 93,
  },
  {
    image: Dubai,
    city: "Dubai",
    numOfPlaces: 63,
  },
];

const PopularLocations = () => {
  return (
    <div className="h-full my-36 w-[70%] sm:w-[82%] xl:w-[90%] mx-auto">
      <SectionHeading
        title="Popular Locations"
        description="Explore the most loved destinations around the world, handpicked for unforgettable travel experiences"
      />
      <div className="flex items-center justify-center xl:justify-start gap-8 flex-wrap">
        {data.map((place, id) => (
          <Card key={id} place={place} variant="location" />
        ))}
      </div>
    </div>
  );
};

export default PopularLocations;
