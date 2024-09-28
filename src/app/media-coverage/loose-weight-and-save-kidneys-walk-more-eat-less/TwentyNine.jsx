"use client";

import React from "react";
import { useState } from "react";
import { data } from "../data";
import Sidebar from "@/components/common/Sidebar";
import Image from "next/image";
const TwentyNine = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <div className="lg:grid grid-cols-4 lg:px-10 mt-10">
        <div className="col-span-3 mx-10">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-2xl uppercase">
              Loose weight and save kidneys Walk more, eat less.
            </h1>
            <div className="border border-lightgreen"></div>
          </div>

          <div>
            <p className="text-lg font-bold text-gray-700 mt-1">
              Dear All, <br /> On the occasion of World Kidney Day, BLK Super
              Speciality Hospital and Satyaraj Foundation had organised a unique
              program on ‘Exponential Rise of Kidney Diseases in India’ at India
              Habitat Centre on 9th March, 2017. The event was led by Dr. Sunil
              Prakash, Sr. Consultant & Director –BLK Centre for Nephrology and
              Renal Transplant Services, well supported by Dr. Deep Goel,
              Director, Minimal Access, Bariatric & Surgical Gastroenterology
              and had witnessed close to 150 delegates from the medical
              fraternity. Chief Guest for the event, Shri Rajyavardhan Singh
              Rathore, Minister of State for Information and Broadcasting, spoke
              at length about the health care initiatives taken by the
              government and the need to promote awareness on Kidney ailments.
              Other eminent guests of honour included: Mrs. Rita Choudhrie,
              Chairperson, Dr. Mradul Kaushik – Director, Operations & Planning,
              BLK Super Speciality Hospital, Shri Rajiv Pratap Rudy, Dr. Bhola
              Singh, Shri. Rajiv Shukla and Shri Mohd. Kaif. A three point
              petition signed by Dr. Sunil Prakash was also presented to the
              Health Minister of India to strengthen and streamline the process
              of Cadaver Organ Donation.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-1">
              This event had garnered us coverage in the following print and
              online publications. We are also expecting few more coverages in a
              day or two.
            </p>
          </div>
          <div className="lg:grid grid-cols-2 gap-3 mt-2">
            <Image
              src="/media-coverage/29.jpg"
              width={10000}
              height={10000}
              className=" object-cover hover:cursor-pointer hover:scale-105 duration-300"
              alt="media-coverage"
              onClick={() => openImage(`/media-coverage/29.jpg`)}
            />

            <Image
              src="/media-coverage/29.1.jpg"
              width={10000}
              height={10000}
              className=" object-cover hover:cursor-pointer hover:scale-105 duration-300"
              alt="media-coverage"
              onClick={() => openImage(`/media-coverage/29.1.jpg`)}
            />

            <Image
              src="/media-coverage/29.2.jpg"
              width={10000}
              height={10000}
              className=" object-cover hover:cursor-pointer hover:scale-105 duration-300"
              alt="media-coverage"
              onClick={() => openImage(`/media-coverage/29.2.jpg`)}
            />

            <Image
              src="/media-coverage/29.3.jpg"
              width={10000}
              height={10000}
              className=" object-cover hover:cursor-pointer hover:scale-105 duration-300"
              alt="media-coverage"
              onClick={() => openImage(`/media-coverage/29.3.jpg`)}
            />

            <Image
              src="/media-coverage/29.4.jpg"
              width={10000}
              height={10000}
              className=" object-cover hover:cursor-pointer hover:scale-105 duration-300"
              alt="media-coverage"
              onClick={() => openImage(`/media-coverage/29.4.jpg`)}
            />
          </div>
        </div>
        <div className="lg:block hidden">
          <Sidebar data={data} />
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative">
            <Image
              height={1000}
              width={1000}
              src={selectedImage}
              alt="Selected"
              className="w-screen"
            />
            <button
              className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TwentyNine;
