import React from "react";
import VideoBackground from "../VideoBackground";

const Hero = () => {
  return (
    <VideoBackground>
      <h1 className="mb-4 text-5xl font-bold uppercase tracking-widest">
        Explore the World
      </h1>
      <p className="text-xl">
        Find the perfect stay for your next adventure. Compare prices, read
        reviews, and book your dream hotel in minutes
      </p>
    </VideoBackground>
  );
};

export default Hero;
