import React from "react";
import { TestiData } from "./data";
import Link from "next/link";
import { Check } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10 px-5">
        <h1 className="text-3xl font-extrabold text-gray-900 uppercase tracking-wide">
          Patient Reviews
        </h1>
        <div className="mt-3 flex justify-center">
          <span className="inline-block w-20 h-1 bg-red-700 rounded-full"></span>
        </div>
        <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          Hear what our patients have to say about their experiences and treatments.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-16">
        {TestiData.map((item) => (
          <Link key={item.id} href={item.link}>
            <div
              className="flex justify-start items-center gap-3 
                         bg-gradient-to-r from-red-700 to-red-800 text-white 
                         p-5 rounded-lg shadow-md hover:shadow-xl 
                         hover:scale-[1.02] transition-all duration-300 
                         cursor-pointer h-24 sm:h-28 md:h-30 lg:h-32"
            >
              <div className="bg-white/20 rounded-full p-1.5">
                <Check size={18} className="text-white" />
              </div>
              <span className="text-sm md:text-base font-medium leading-snug line-clamp-2">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
