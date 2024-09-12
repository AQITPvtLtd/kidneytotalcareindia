import Image from "next/image";
import React from "react";

const Education = () => {
  const education = [
    {
      id: 1,
      year: 1981,
      edu: "M.B.B.S",
      college: "G.S.V.M. Medical College, L.L.R. Hospital, Kanpur",
      color: "primary",
    },
    {
      id: 2,
      year: 1985,
      edu: "M.D. (Ind Med.)",
      college: "G.S.V.M. Medical College, L.L.R. Hospital, Kanpur",
      color: "lightgreen",
    },
    {
      id: 3,
      year: 1995,
      edu: "D.M. (Nephrology)",
      college: "All India Institute of Medical Sciences",
      color: "primary",
    },
    {
      id: 4,
      year: 2000,
      edu: "Fellow ISPD",
      college:
        "Toronto Western Hospital, University Network Hospital, Toronto Canada",
      color: "lightgreen",
    },
    {
      id: 5,
      year: 2002,
      edu: "F.I.S.N (USA)",
      college: "University of Columbia, Missouri, USA",
      color: "primary",
    },
  ];
  return (
    <div className="relative my-5">
      {/* Background Image */}
      <Image
        src="/education/education-bg-2.png"
        width={1000}
        height={1000}
        className="w-full object-cover h-[500px]"
        alt="Education background"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-20"></div>

      {/* Text Content on top of the image */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white">
        <h1 className="text-center font-bold text-4xl text-black bg-white py-2 px-1 rounded-md">
          EDUCATION / QUALIFICATIONS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-4 mt-6">
          {education.slice(0, 4).map((e) => (
            <div
              key={e.id}
              className={`border p-3 bg-${e.color} bg-opacity-90 text-white rounded-md`}
            >
              <h2 className="text-6xl text-center opacity-70 font-bold font-serif">
                {e.year}
              </h2>
              <h1 className="font-semibold text-center mt-3 text-2xl">
                {e.edu}
              </h1>
              <p className="mt-2 text-center">{e.college}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 mt-5 gap-5">
          {education.slice(4, 5).map((e) => (
            <div
              key={e.id}
              className={`border p-3 bg-${e.color} bg-opacity-90 text-white rounded-md`}
            >
              <h2 className="text-6xl text-center opacity-70 font-bold font-serif">
                {e.year}
              </h2>
              <h1 className="font-semibold text-center mt-3 text-2xl">
                {e.edu}
              </h1>
              <p className="mt-2 text-center">{e.college}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
