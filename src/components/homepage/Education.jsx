import Image from "next/image";
import React from "react";
import { education } from "@/data/education";
const Education = () => {
  return (
    <div className="relative my-10">
      {/* Background Image */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/education/education-bg-2.png"
          fill
          className="object-cover"
          alt="Education background"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary bg-opacity-20"></div>
      </div>

      {/* Text Content on top of the image */}
      <div className="relative z-10 -mt-[250px] sm:-mt-[300px] md:-mt-[400px] lg:-mt-[500px] flex flex-col justify-center items-center text-white">
        <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl text-black bg-white py-2 px-3 rounded-md shadow-lg">
          EDUCATION / QUALIFICATIONS
        </h1>

        {/* Education Details */}
        <div className="lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-4 mt-10">
          {education.slice(0, 4).map((e) => (
            <div
              key={e.id}
              className={`border p-5 bg-${e.color} bg-opacity-90 text-white rounded-md shadow-md`}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-center opacity-70 font-bold font-serif">
                {e.year}
              </h2>
              <h1 className="font-semibold text-center mt-3 text-xl sm:text-2xl">
                {e.edu}
              </h1>
              <p className="mt-2 text-center text-sm sm:text-base">
                {e.college}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:grid grid-cols-1 mt-8 gap-5">
          {education.slice(4, 5).map((e) => (
            <div
              key={e.id}
              className={`border p-5 bg-${e.color} bg-opacity-90 text-white rounded-md shadow-md`}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-center opacity-70 font-bold font-serif">
                {e.year}
              </h2>
              <h1 className="font-semibold text-center mt-3 text-xl sm:text-2xl">
                {e.edu}
              </h1>
              <p className="mt-2 text-center text-sm sm:text-base">
                {e.college}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
