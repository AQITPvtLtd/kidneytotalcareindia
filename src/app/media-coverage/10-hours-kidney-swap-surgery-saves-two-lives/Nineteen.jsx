import React from "react";
import Image from "next/image";
import { data } from "../data";
import Sidebar from "../Sidebar";

const Nineteen = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-4 lg:px-10 mt-10">
        <div className="col-span-3 mx-10">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-2xl uppercase">
              10 Hours Kidney Swap Surgery Saves Two Lives
            </h1>
            <div className="border border-lightgreen"></div>
          </div>
          <div className="lg:grid grid-cols-2 gap-2">
            <Image
              src="/media-coverage/19.1.jpg"
              width={10000}
              height={10000}
              className=" object-cover"
              alt="media-coverage"
            />
            <Image
              src="/media-coverage/19.2.jpg"
              width={10000}
              height={10000}
              className=" object-cover"
              alt="media-coverage"
            />
            <Image
              src="/media-coverage/19.3.jpg"
              width={10000}
              height={10000}
              className=" object-cover"
              alt="media-coverage"
            />
          </div>
        </div>
        <div className="lg:block hidden px-10">
          <Sidebar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Nineteen;
