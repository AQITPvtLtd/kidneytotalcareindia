import React from "react";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TestiData } from "./data";

const Testimonials = () => {
  return (
    <div className="lg:grid grid-cols-12 items-center justify-evenly gap-10 mt-5">
      <div className="col-start-2 col-span-5">
        {TestiData.slice(0, 14).map((d) => (
          <div
            key={d.id}
            className="bg-blue-600 text-white px-3 py-2 mb-2 hover:translate-x-3 duration-500"
          >
            <Link href={`/happyPatient/testimonials//${d.id}`}>
              <div className="flex">
                <IoMdCheckmarkCircleOutline className="mt-1 mr-1" />
                {d.title}
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="col-span-5">
        {TestiData.slice(14, 28).map((d) => (
          <div
            key={d.id}
            className="bg-blue-600 text-white px-3 py-2 mb-2 hover:translate-x-3 duration-500"
          >
            <Link href={`/happyPatient/testimonials/${d.id}`}>
              <div className="flex">
                <IoMdCheckmarkCircleOutline className="mt-1 mr-1" />
                {d.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
