import React from "react";
import TrainingAbroad from "@/components/common/TrainingAbroad";
import { awards } from "@/data/training";
const Training = () => {
  return (
    <div className="my-5">
      <h1 className="text-center font-bold text-4xl text-black bg-white py-2 px-1 rounded-md">
        AWARDS AND TRAINING ABROAD
      </h1>
      <TrainingAbroad awards={awards} />
    </div>
  );
};

export default Training;
