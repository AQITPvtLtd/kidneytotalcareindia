import React from "react";
import { data } from "./data";
import Link from "next/link";
const Media = () => {
  return (
    <div>
      <div className="lg:px-20 mt-10 mx-5 gap-2">
        {/* Main content area */}

        <div className="mb-4">
          <h1 className="font-bold text-3xl">Media Coverage</h1>
          <div className="border border-lightgreen"></div>
        </div>

        {/* Media coverage grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-2 lg:pb-10 pb-5">
          {data.map((d) => (
            <Link
              key={d.id}
              href={`${d.link}`}
              className="px-5 hover:scale-105 duration-300 bg-primary text-white rounded-md py-2"
            >
              {d.name}
            </Link>
          ))}
        </div>

        {/* Sidebar */}
        {/* <div className="lg:block hidden px-10">
          <Sidebar data={data} />
        </div> */}
      </div>
    </div>
  );
};

export default Media;
