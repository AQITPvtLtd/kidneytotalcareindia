import React from "react";
import Image from "next/image";
import Sidebar from "@/components/common/Sidebar";
import { data } from "../data";
const Four = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-4 lg:px-10 mt-10">
        <div className="col-span-3 mx-10">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-3xl">
              Monograph on organ transplantation in india
            </h1>
            <div className="border border-lightgreen"></div>
          </div>
          <div className="flex space-x-3">
            <Image
              src="/media-coverage/4.1.jpg"
              width={1000}
              height={1000}
              className="hover:cursor-pointer w-1/2 mt-5"
              alt="media-coverage"
            />
            <Image
              src="/media-coverage/4.2.jpg"
              width={1000}
              height={1000}
              className="hover:cursor-pointer w-1/2 mt-5"
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

export default Four;
