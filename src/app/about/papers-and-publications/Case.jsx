import React from "react";
import Sidebar from "../Sidebar";
import { papers } from "./papersData";
const Case = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-4 lg:px-10 my-10 gap-5">
        {/* Main content area */}
        <div className="col-span-3">
          <div className="mb-4 lg:mx-0 mx-5">
            <h1 className="font-bold text-3xl">Papers and Publications</h1>
            <div className="border border-lightgreen"></div>
          </div>

          {/* Media coverage grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-2 mx-5 lg:mx-0">
            {papers.map((d) => (
              <div
                key={d.id}
                className="px-5 hover:scale-105 duration-300 bg-primary text-white rounded-md py-4"
              >
                {d.content}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:block hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Case;
