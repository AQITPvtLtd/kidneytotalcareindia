import React from "react";
import { LiaAwardSolid } from "react-icons/lia";
const TrainingAbroad = ({ awards }) => {
  return (
    <div>
      <div className="lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-y-6 gap-x-6 mt-5 lg:px-16">
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
            <div className="relative z-10 text-black font-bold lg:text-justify">
              {a.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingAbroad;
