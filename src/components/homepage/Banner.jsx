import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="">
          <Image
            src="/doctor/dr-sunil-prakash.png"
            width={800}
            height={800}
            className=""
          />
        </div>
        <div className="bg-primary m-10 rounded-xl">
          <div className="bg-skyblue border-white border-8 h-full p-5 rounded-xl font-thin translate-x-7 translate-y-7">
            <h1 className="text-4xl text-primary font-bold pb-3">
              Dr. Sunil Prakash: The Best Nephrologist in Delhi
            </h1>
            <h2 className="text-2xl text-lightgreen font-semibold leading-relaxed">
              Expert Kidney Care: Consult with the Best Nephrologist in Delhi
              for Top-notch Treatment
            </h2>
            <h3 className="text-lg leading-relaxed font-semibold">
              Are you looking for the best nephrologist in Delhi? Look no
              further because Dr. Sunil Prakash is here to provide you with
              exceptional care and expertise. With 40 years of experience in the
              field of nephrology, Dr. Prakash has established himself as a
              renowned medical professional known for his commitment to patient
              care and successful treatment outcomes.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
