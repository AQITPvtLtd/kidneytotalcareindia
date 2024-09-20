import React from "react";
import Sidebar from "../Sidebar";

const Case = () => {
  return (
    <div>
      <div className="grid grid-cols-3 m-16">
        <Sidebar />
        <div className="col-span-2 mx-5 inline-block">
          <h1 className="text-primary font-extrabold text-3xl">Case Studies</h1>
          <div className="border border-lightgreen w-full h-[2px]"></div>
          <ul className=" list-decimal m-5">
            <li>
              Ascariasis as a cause of obstructive jaundice in a renal
              transplant patient
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Case;
