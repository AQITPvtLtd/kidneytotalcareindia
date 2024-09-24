import React from "react";
import Sidebar from "../../../components/common/Sidebar";
import { data } from "../data";

const Editor = () => {
  return (
    <div>
      <div className="grid grid-cols-3 m-16">
        <Sidebar data={data} />
        <div className="col-span-2 mx-5 inline-block">
          <h1 className="text-primary font-extrabold text-3xl">
            Editor DNS News Letter
          </h1>
          <div className="border border-lightgreen w-full h-[2px]"></div>
          <ul className=" list-decimal m-5">
            <li>DNS Newsletter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Editor;
