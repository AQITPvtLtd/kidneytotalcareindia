import Image from "next/image";
import Link from "next/link";
import React from "react";

const Who = () => {
  return (
    <div className="bg-primary p-5 m-5 rounded-lg lg:mt-0 mt-10">
      <div className="bg-skyblue border-white border-8 rounded-lg lg:grid grid-cols-2">
        <div className="lg:flex items-center lg:pl-10 p-4 lg:p-0">
          <div>
            <h1 className="text-4xl text-primary font-bold pb-3">
              Who is Dr. Sunil Prakash?
            </h1>
            <p className="text-lg leading-relaxed font-semibold">
              Dr. Sunil Prakash is a highly accomplished and respected kidney
              specialist in Delhi, India. He holds an impressive educational
              background, having completed his MBBS and MD in Internal Medicine
              from prestigious medical institutions. Dr. Prakash further
              specialized in Nephrology and obtained a DM degree from AIIMS,
              Delhi, making him an expert in the field of kidney-related
              diseases and disorders.
            </p>
            <div className="flex mt-4">
              <div className="bg-primary text-white px-4 py-2 font-semibold rounded-lg">
                <Link href="/about">More About Us</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/who/who.png"
            width={1000}
            height={1000}
            className="w-full"
            alt="who"
          />
        </div>
      </div>
    </div>
  );
};

export default Who;
