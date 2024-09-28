import React from "react";
import { TestiData } from "../data";
import Image from "next/image";
import Sidebar from "@/components/common/Sidebar";
const TestimonialData = ({ id }) => {
  const obj = TestiData.find((item) => item.id == id);

  return (
    <div>
      <div className="lg:grid grid-cols-4 lg:lg:px-10 mt-10">
        <div className="col-span-3 lg:mx-10 mx-2">
          <div key={obj.id} className=" gap-4 items-center">
            <div className="justify-center bg-white p-6 rounded-lg shadow-inner   overflow-hidden">
              <div className="inline-block mb-4">
                <h1 className="font-bold text-2xl uppercase">{obj.name}</h1>
                <div className="border border-lightgreen"></div>
              </div>
              <p
                className="text-gray-700 text-lg"
                dangerouslySetInnerHTML={{ __html: obj.content }}
              ></p>
              {obj.image !== "" && (
                <Image
                  src={`/testimonials/${obj.image}`}
                  alt={obj.name}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              )}

              {/* <p className="text-gray-700 text-lg">{obj.image}</p> */}
              <p className="text-gray-700 text-lg">{obj.user}</p>
            </div>
          </div>
        </div>

        <div className="lg:block hidden">
          <Sidebar data={TestiData} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialData;
