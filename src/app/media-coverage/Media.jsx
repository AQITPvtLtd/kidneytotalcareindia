import React from "react";
import Sidebar from "@/components/common/Sidebar";
import { data } from "./data";
import Link from "next/link";
const Media = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-4 px-10 mt-10">
        <div className="col-span-3 mx-5">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-3xl">Media Coverage</h1>
            <div className="border border-lightgreen"></div>
          </div>
          <div className="grid grid-cols-3 gap-3 ">
            {data.map((d) => (
              <Link
                key={d.id}
                href={`/media-coverage/${d.link}`}
                className="px-5 hover:scale-105 duration-300 bg-primary text-white rounded-md py-2"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-14">
          <Sidebar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Media;
