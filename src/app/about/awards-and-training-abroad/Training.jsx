import React from "react";
import TrainingAbroad from "@/components/common/TrainingAbroad";
import Sidebar from "../Sidebar";
import { awards } from "@/data/training";
const Training = () => {
  return (
    <div className="lg:grid grid-cols-4 lg:px-10 my-10 gap-5">
      <div className="col-span-3">
        <h1 className="text-center font-bold text-4xl text-black bg-white py-2 px-1 rounded-md">
          AWARDS AND TRAINING ABROAD
        </h1>
        <TrainingAbroad awards={awards} />
      </div>
      
      <div className="mt-10 hidden lg:block lg:px-6">
        <div className="sticky top-44">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Training;
