import React from "react";
import Sidebar from "@/components/common/Sidebar";
import { data } from "./data";
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
              <div className="px-5 bg-primary text-white rounded-md py-2">
                {d.name}
              </div>
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
