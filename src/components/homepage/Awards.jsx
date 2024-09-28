import React from "react";
import Link from "next/link";
import TrainingAbroad from "../common/TrainingAbroad";
import { awards } from "@/data/training";

const Awards = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl text-black bg-white py-2 px-1 rounded-md">
        AWARDS AND TRAINING ABROAD
      </h1>
      <TrainingAbroad awards={awards.slice(0, 6)} />
      <div className="flex justify-center my-5">
        <Link
          href="/about/training-abroad"
          className="bg-lightgreen text-white py-2 px-3 rounded-md"
        >
          View All Awards
        </Link>
      </div>
    </div>
  );
};

export default Awards;
