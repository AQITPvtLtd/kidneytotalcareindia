import React from "react";
import { Infodata } from "./data";
import Sidebar from "@/components/common/Sidebar";
const Information = () => {
  return (
    <div>
      <div className="inline-block lg:px-10 pt-10">
        <h1 className="font-bold text-2xl uppercase">Patient Information</h1>
        <div className="border border-lightgreen"></div>
      </div>
      <div className="lg:grid grid-cols-2">
        <div className="lg:p-10 px-5 pt-5">
          <Sidebar data={Infodata.slice(0, 5)} />
        </div>
        <div className="lg:p-10 px-5">
          <Sidebar data={Infodata.slice(5)} />
        </div>
      </div>
    </div>
  );
};

export default Information;
