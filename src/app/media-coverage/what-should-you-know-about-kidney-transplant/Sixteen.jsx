import React from "react";
import Image from "next/image";
import { data } from "../data";
import Sidebar from "@/components/common/Sidebar";
const Sixteen = () => {
  return (
    <div>
      <div className="grid grid-cols-4 px-10 mt-10">
        <div className="col-span-3 mx-10">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-2xl uppercase">
              What Should You know about Kidney Transplant
            </h1>
            <div className="border border-lightgreen"></div>
          </div>
          <div className="">
            <Image
              src="/media-coverage/15.jpg"
              width={10000}
              height={10000}
              className=" object-cover"
              alt="media-coverage"
            />
          </div>
        </div>
        <div>
          <Sidebar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Sixteen;
