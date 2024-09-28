import React from "react";
import Image from "next/image";
import { data } from "../data";
import Sidebar from "@/components/common/Sidebar";
const Eighteen = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-4 lg:px-10 mt-10">
        <div className="col-span-3 mx-10">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-2xl uppercase">
              Sugar and high bloodpressure are predators of kidney
            </h1>
            <div className="border border-lightgreen"></div>
          </div>
          <div className="">
            <Image
              src="/media-coverage/18.jpg"
              width={10000}
              height={10000}
              className=" object-cover"
              alt="media-coverage"
            />
          </div>
        </div>
        <div className="lg:block hidden">
          <Sidebar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Eighteen;
