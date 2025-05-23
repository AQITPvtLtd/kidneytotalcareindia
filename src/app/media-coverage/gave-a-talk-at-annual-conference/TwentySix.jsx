"use client";

import React from "react";
import { useState } from "react";
import { data } from "../data";
import Sidebar from "@/components/common/Sidebar";
import Image from "next/image";
const TwentySix = () => {
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
              Gave A Talk At Annual Conference Of Indian Dietitian Association
              At Mumbai On 23rd September At Hotel Sahara Star
            </h1>
            <div className="border border-lightgreen"></div>
          </div>

          <div>
            <p className="text-lg font-bold text-gray-700 mt-1">
              Gave A Talk At Annual Conference Of Indian Dietitian Association
              At Mumbai On 23rd September At Hotel Sahara Star
            </p>
          </div>
          <div className="lg:grid grid-cols-2 gap-3 mt-2">
            <Image
              src="/media-coverage/26.jpg"
              width={10000}
              height={10000}
              className=" object-cover hover:cursor-pointer hover:scale-105 duration-300"
              alt="media-coverage"
              onClick={() => openImage(`/media-coverage/26.jpg`)}
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

export default TwentySix;
