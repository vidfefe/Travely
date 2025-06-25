import SectionHeading from "@/ui/SectionHeading";
import React from "react";
import image_1 from "../../../public/assets/hr_1.jpg";
import image_3 from "../../../public/assets/hr_3.jpg";
import image_4 from "../../../public/assets/hr_4.jpg";
import image_5 from "../../../public/assets/hr_5.jpg";
import image_6 from "../../../public/assets/hr_6.jpg";
import image_7 from "../../../public/assets/hr_7.jpg";
import image_2 from "../../../public/assets/hr_2.jpg";
import image_8 from "../../../public/assets/hr_8.jpg";
import Card from "../Card";

export const data = [
  {
    name: "Arabian Paradise",
    image: image_1,
    price: 324.5,
    category: "Luxury",
    reviews: 4.7,
    location: "Dubai, UAE",
  },
  {
    name: "Crowne Plaza",
    image: image_2,
    price: 350,
    category: "Luxury",
    reviews: 5.0,
    location: "Dubai, UAE",
  },
  {
    name: "Staybridge Suites",
    image: image_3,
    price: 312.8,
    category: "Luxury",
    reviews: 4.7,
    location: "Dubai, UAE",
  },
  {
    name: "City Inn",
    image: image_4,
    price: 325.5,
    category: "Luxury",
    reviews: 4.8,
    location: "Dubai, UAE",
  },
  {
    name: "Taj Dubai",
    image: image_5,
    price: 290.5,
    category: "Luxury",
    reviews: 4.7,
    location: "Dubai, UAE",
  },
  {
    name: "Carlton Downtown",
    image: image_6,
    price: 300,
    category: "Luxury",
    reviews: 4.7,
    location: "Dubai, UAE",
  },
  {
    name: "Jumeirah Al Faisaliah",
    image: image_7,
    price: 321,
    category: "Luxury",
    reviews: 5.0,
    location: "Dubai, UAE",
  },
  {
    name: "Radisson Blu",
    image: image_8,
    price: 325.6,
    category: "Luxury",
    reviews: 5.0,
    location: "Dubai, UAE",
  },
];

const BestHotels = () => {
  return (
    <div className="h-full my-16 w-[70%] sm:w-[82%] xl:w-[90%] mx-auto">
      <SectionHeading
        title="Best Hotels"
        description="Discover top-rated hotels with exceptional comfort, amenities, and locations tailored for your perfect stay"
      />
      <div className="flex items-center justify-center xl:justify-start gap-8 flex-wrap">
        {data.map((place, id) => (
          <Card key={id} place={place} variant="hotel" />
        ))}
      </div>
    </div>
  );
};

export default BestHotels;
