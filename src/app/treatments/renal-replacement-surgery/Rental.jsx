import React from "react";
import Sidebar from "../Sidebar";

const Rental = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:m-16 m-8">
        <div className="lg:block hidden">
          <Sidebar />
        </div>
        <div className="col-span-2 mx-5 inline-block">
          <div className="inline-block">
            <h1 className="text-primary font-extrabold text-3xl">
              Renal Replacement Therapy
            </h1>
            <div className="border border-lightgreen w-full h-[2px]"></div>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-700 mt-8">
              The goal of the kidneys is to eliminate toxins from the body, and
              when these organs stop working properly, you must resort to renal
              replacement therapies for this work, and there are three options:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>
                First is Haemodialysis, which removes toxins through the blood.
              </li>
              <li>
                Second is called Peritoneal dialysis, which does so through the
                peritoneum of the abdominal cavity.
              </li>
              <li>
                Third is kidney transplantation, which removes toxins through a
                kidney of another person (donor), placed in the body with kidney
                failure.
              </li>
            </ul>

            <p className="text-lg font-bold text-gray-700 mt-8">
              Of the three, the transplant is the one that provides the best
              quality of life to the patient, however, it does not last forever,
              a transplant from a donor (deceased) … is an organ that has a
              limit of functionality. .. statistically the functionality of that
              organ is from 8 to 10 years, then it will need something else
              again; the transplant of a living donor, of a relative, for
              example, has a greater functionality … of 20 or 25 years, then, if
              it is a young person, he will still need to go back to some of the
              renal replacement therapies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rental;
