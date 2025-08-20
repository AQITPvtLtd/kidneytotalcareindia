import React from "react";
import { TestiData } from "./data";
import Link from "next/link";
import { Check } from "lucide-react"; // tick icon (lucide-react)

const Testimonials = () => {
  return (
    <div>
      {/* Heading */}
      <div className="inline-block lg:px-10 px-5 pt-10">
        <h1 className="font-bold text-2xl uppercase">Patient Reviews</h1>
        <div className="border-b-2 border-red-700 w-50 mt-1"></div>
      </div>

      {/* Two Columns */}
      <div className="lg:grid grid-cols-2 gap-5 px-10">
        {/* Left Column */}
        <div className="lg:p-10 px-5 pt-5">
          {TestiData.slice(0, 14).map((item) => (
            <Link key={item.id} href={item.link}>
              <div className="flex items-start gap-2 bg-red-800 text-white p-3 rounded-sm mb-2 cursor-pointer hover:bg-red-900 transition">
                <div><Check size={16} className="mt-1" /></div>
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Column */}
        <div className="lg:p-10 px-5 pt-5">
          {TestiData.slice(14).map((item) => (
            <Link key={item.id} href={item.link}>
              <div className="flex items-start gap-2 bg-red-800 text-white p-3 rounded-sm mb-2 cursor-pointer hover:bg-red-900 transition">
                <div><Check size={16} className="mt-1" /></div>
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
