import React from "react";
import { TestiData } from "../data";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";
const TestimonialData = ({ id }) => {
  const obj = TestiData.find((item) => item.id == id);

  return (
    <div>
      <div className="lg:grid grid-cols-12">
        <div className="col-start-2 col-span-6">
          <div key={obj.id} className=" gap-4 items-center">
            <div className="justify-center bg-white p-6 rounded-lg shadow-inner   overflow-hidden">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {obj.title}
              </h1>
              <p
                className="text-gray-700 text-lg"
                dangerouslySetInnerHTML={{ __html: obj.content }}
              ></p>
              {obj.image !== ""  && <Image
                src={`/testimonials/${obj.image}`}
                alt={obj.name}
                width={500}
                height={500}
                className="rounded-lg"
              />}
              

              {/* <p className="text-gray-700 text-lg">{obj.image}</p> */}
              <p
                className="text-gray-700 text-lg"
              >{obj.name}</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 mt-5 lg:block hidden">
          {TestiData.map((d) => (
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
      </div>
    </div>
  );
};

export default TestimonialData;
