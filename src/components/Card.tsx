import { formatCurrency } from "@/utils/formatCurrency";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

type HotelPlace = {
  name: string;
  image: StaticImageData;
  price: number;
  category: string;
  location: string;
  reviews: number;
};

type LocationPlace = {
  city: string;
  image: StaticImageData;
  numOfPlaces: number;
};

type CardProps =
  | { variant: "hotel"; place: HotelPlace }
  | { variant: "location"; place: LocationPlace };

const Card = ({ place, variant }: CardProps) => {
  return (
    <Link
      href={variant === "hotel" ? "/details" : "/search"}
      className="h-[400px] w-[350px] flex flex-wrap rounded-xl overflow-hidden shadow-md group"
    >
      <div className="w-full h-2/3 relative overflow-hidden">
        <Image
          src={place.image}
          alt={variant === "hotel" ? place.name : place.city}
          className="h-full w-full rounded-t-xl object-cover transition-all duration-200 group-hover:scale-105"
        />
        <div className="absolute right-0 bottom-0 bg-rose-500 rounded-tl-xl p-2 font-semibold">
          {variant === "hotel" ? place.location : place.city}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2 w-full">
        {variant === "hotel" ? (
          <>
            <h3 className="text-blue-950 text-2xl font-semibold">
              {place.name}
            </h3>

            <div className="flex items-center justify-between">
              <span className="text-gray-700">
                {formatCurrency(place.price)} per night
              </span>
              <span className="flex items-center gap-1 text-white bg-blue-950 rounded-full p-2">
                <AiFillStar />
                <span className="font-semibold">
                  {place.reviews.toFixed(1)}
                </span>
              </span>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-blue-950 text-2xl font-semibold">
              {place.numOfPlaces} Places to stay
            </h3>
            <p className="text-gray-700">
              Discover the best hotel or apartment for your adventurous journey
            </p>
          </>
        )}
      </div>
    </Link>
  );
};

export default Card;
