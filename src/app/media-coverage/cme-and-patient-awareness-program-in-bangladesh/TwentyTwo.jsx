"use client";

import React, { useState } from "react";
import Image from "next/image";
import { data } from "../data";
import Sidebar from "@/components/common/Sidebar";
const TwentyTwo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <div className="grid grid-cols-4 px-10 mt-10">
        <div className="col-span-3 mx-10">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-2xl uppercase">
              CME and Patient Awareness Program in Bangladesh
            </h1>
            <div className="border border-lightgreen"></div>
          </div>
          <div className="lg:grid grid-cols-2 gap-3">
            <Image
              src="/media-coverage/22.1.jpg"
              width={10000}
              height={10000}
              className=" object-cover hover:cursor-pointer hover:scale-105 duration-300"
              alt="media-coverage"
              onClick={() => openImage(`/media-coverage/22.1.jpg`)}
            />
            <Image
              src="/media-coverage/22.2.jpg"
              width={10000}
              height={10000}
              className=" object-cover hover:cursor-pointer hover:scale-105 duration-300"
              alt="media-coverage"
              onClick={() => openImage(`/media-coverage/22.2.jpg`)}
            />
          </div>
        </div>
        <div>
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
              className="w-auto h-screen/2"
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

export default TwentyTwo;
