import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="overflow-x-clip">
      <div className="lg:grid grid-cols-2">
        <div className="">
          <Image
            src="/doctor/dr-sunil-prakash.png"
            width={800}
            height={800}
            className=""
            alt="dr-sunil-prakash"
          />
        </div>
        <div className="bg-primary lg:m-8 mx-2 rounded-xl">
          <div className="bg-skyblue border-white border-8 h-full p-5 rounded-xl font-thin translate-x-7 translate-y-7">
            <h1 className="lg:text-4xl text-3xl text-primary font-bold pb-3">
              Dr. Sunil Prakash: The Best Nephrologist in Delhi
            </h1>
            <h2 className="lg:text-2xl text-xl text-lightgreen font-semibold leading-relaxed">
              Expert Kidney Care: Consult with the Best Nephrologist in Delhi
              for Top-notch Treatment
            </h2>
            <h3 className=" leading-relaxed font-semibold">
              Are you looking for the best nephrologist in Delhi? Look no
              further because Dr. Sunil Prakash is here to provide you with
              exceptional care and expertise. With 40 years of experience in the
              field of nephrology, Dr. Prakash has established himself as a
              renowned medical professional known for his commitment to patient
              care and successful treatment outcomes.
            </h3>
            <div className="mt-5">
              <Link
                href="/about-us/dr-sunil-prakash"
                className="bg-lightgreen text-white font-semibold py-2 px-3 rounded-md"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="bg-lightgreen text-white font-semibold py-2 px-3 rounded-md ml-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
