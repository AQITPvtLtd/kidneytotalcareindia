import React from "react";
import Link from "next/link";
import { LiaAwardSolid } from "react-icons/lia";

const Awards = () => {
  const awards = [
    {
      id: 1,
      content:
        "Underwent training in critical care of patients of infectious diseases from 09.01.90 to 31.03.90 at prestigious ‘National Medical Centre’ Tokyo Japan, under Colombo Plan.",
    },
    {
      id: 2,
      content:
        "Visited for training at St. George Hospital, Post Graduate Medical School, Kogarrah, Sydney, Australia in May, 1997.",
    },
    {
      id: 3,
      content:
        "Awarded General Manager Northern Railways' Best Physician's award for outstanding performance for the year 1996-97.",
    },
    {
      id: 4,
      content:
        "Awarded travel Grant by International Society of Nephrology to present papers in XIVth International Congress of Nephrology at Sydney, May 24th to 29th, 1997.",
    },
    {
      id: 5,
      content:
        "Awarded travel grant by International Society of Nephrology to present papers in XVth International Congress of Nephrology at Buenos Aires, May 2nd to May 6th 1999 to present research papers in the congress.",
    },
    {
      id: 6,
      content:
        "Awarded Scholarship from the International Society of Peritoneal Dialysis (FISPD) for 3 months training in advanced techniques in CAPD and other therapies at the Toronto Western Hospital, Toronto, Canada from March to May 2000.",
    },
  ];
  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-black bg-white py-2 px-1 rounded-md">
        AWARDS AND TRAINING ABROAD
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-y-6 gap-x-6 mt-5">
        {awards.map((a) => (
          <div
            className="border p-6 rounded-md shadow-md relative bg-white"
            key={a.id}
          >
            {/* Icon in the background */}
            <div className="absolute inset-0 flex justify-center items-center opacity-20 text-lightgreen">
              <LiaAwardSolid size={100} />
            </div>
            {/* Text content on top of the icon */}
            <div className="relative z-10 text-black font-bold">
              {a.content}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <Link
          href="/"
          className="bg-lightgreen text-white py-2 px-3 rounded-md"
        >
          View All Awards
        </Link>
      </div>
    </div>
  );
};

export default Awards;
