import React, { ReactNode } from "react";

const VideoBackground = ({ children }: { children: ReactNode }) => {
  return (
    <section className="relative w-full h-screen">
      <video
        autoPlay
        loop
        muted
        preload="metadata"
        src="/hero.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70 z-10" />
      <div className="absolute  z-20 w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default VideoBackground;
