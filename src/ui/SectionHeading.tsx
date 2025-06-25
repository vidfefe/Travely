import React from "react";

interface SectionHeading {
  title: string;
  description: string;
}

const SectionHeading = ({ title, description }: SectionHeading) => {
  return (
    <div className="mb-4">
      <h2 className="text-3xl text-blue-950 font-bold">{title}</h2>
      <p className="mt-2 text-gray-700 font-meduim">{description}</p>
    </div>
  );
};

export default SectionHeading;
