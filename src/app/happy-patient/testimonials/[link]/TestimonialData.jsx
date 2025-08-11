import React from "react";
import { TestiData } from "../data";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react"; // tick icon

const TestimonialData = ({ link }) => {
  // Match by slug
  const obj = TestiData.find(
    (item) => item.link.split("/").pop() === link
  );

  if (!obj) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-500">Testimonial not found</h1>
      </div>
    );
  }

  return (
    <div className="lg:grid grid-cols-4 lg:px-10 mt-10 gap-6">
      {/* Main Content */}
      <div className="col-span-3 lg:mx-10 mx-2">
        <div key={obj.link} className="gap-4 items-center">
          <div className="justify-center bg-white p-6 rounded-lg shadow-inner overflow-hidden">
            <div className="inline-block mb-4">
              <h1 className="font-bold text-2xl uppercase">{obj.name}</h1>
              <div className="border border-lightgreen"></div>
            </div>

            <div
              className="text-gray-700 text-lg"
              dangerouslySetInnerHTML={{ __html: obj.content }}
            />

            {obj.image && (
              <Image
                src={`/testimonials/${obj.image}`}
                alt={obj.name}
                width={500}
                height={500}
                className="rounded-lg mt-4"
              />
            )}

            {obj.user && <p className="text-gray-700 text-lg mt-3">{obj.user}</p>}
          </div>
        </div>
      </div>

      {/* Sidebar (Replaced) */}
      <div className="lg:block hidden">
        {TestiData.map((item) => (
          <Link key={item.id} href={item.link}>
            <div className="flex items-start gap-2 bg-red-800 text-white p-3 rounded-sm mb-2 cursor-pointer hover:bg-red-900 transition">
              <div>  <Check size={16} className="mt-1" /></div>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestimonialData;
