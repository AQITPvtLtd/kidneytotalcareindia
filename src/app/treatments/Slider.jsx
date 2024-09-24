import React from "react";
import { treatmentData } from "./data";
import Link from "next/link";
const Slider = () => {
  return (
    <div>
      <div>
        <div className="text-lg">
          {treatmentData.map((d) => (
            <div
              key={d.id}
              className="bg-blue-600 text-white px-3 py-2 mb-2 hover:translate-x-3 duration-500"
            >
              <Link href={`/treatments/${d.link}`} className="flex">
                {/* <IoMdCheckmarkCircleOutline className="mt-1 mr-1" /> */}
                {d.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
