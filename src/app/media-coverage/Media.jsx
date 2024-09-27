import React from "react";
import Sidebar from "@/components/common/Sidebar";
import { data } from "./data";
import Link from "next/link";
const Media = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-4 px-10 mt-10 gap-5">
        {/* Main content area */}
        <div className="col-span-3">
          <div className="mb-4">
            <h1 className="font-bold text-3xl">Media Coverage</h1>
            <div className="border border-lightgreen"></div>
          </div>

          {/* Media coverage grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

        {/* Sidebar */}
        <div className="lg:block hidden">
          <Sidebar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Media;
