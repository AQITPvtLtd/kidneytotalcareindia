"use client";

import React, { useState } from "react";
import Image from "next/image";
import { data } from "../data";
import Sidebar from "@/components/common/Sidebar";

const TwentryThree = () => {
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
              When biological mother refused,mother in law gave kidney to
              daughter in law
            </h1>
            <div className="border border-lightgreen"></div>
          </div>
          <div className="lg:grid grid-cols-2 gap-3">
            <Image
              src="/media-coverage/23.1.jpg"
              width={10000}
              height={10000}
              className=" object-cover hover:cursor-pointer hover:scale-105 duration-300"
              alt="media-coverage"
              onClick={() => openImage(`/media-coverage/23.1.jpg`)}
            />
            <Image
              src="/media-coverage/23.2.jpg"
              width={10000}
              height={10000}
              className=" object-cover hover:cursor-pointer hover:scale-105 duration-300"
              alt="media-coverage"
              onClick={() => openImage(`/media-coverage/23.2.jpg`)}
            />
            <Image
              src="/media-coverage/23.3.jpg"
              width={10000}
              height={10000}
              className=" object-cover hover:cursor-pointer hover:scale-105 duration-300"
              alt="media-coverage"
              onClick={() => openImage(`/media-coverage/23.3.jpg`)}
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

export default TwentryThree;
