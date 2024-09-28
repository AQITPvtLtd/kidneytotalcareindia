"use client";

import Sidebar from "@/components/common/Sidebar";
import React, { useState } from "react";
import { data } from "../data";
import Image from "next/image";
const One = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <div className="lg:grid grid-cols-4 lg:lg:px-10 mt-10">
        <div className="col-span-3 mx-10">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-3xl">
              Is Covid-19 Vaccine Safe for Kidney Disease Patients?
            </h1>
            <div className="border border-lightgreen"></div>
          </div>
          <Image
            src="/media-coverage/1.jpg"
            width={1000}
            height={1000}
            onClick={() => openImage(`/media-coverage/1.jpg`)}
            className="hover:cursor-pointer"
          />
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
              className="w-full h-full"
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

export default One;
