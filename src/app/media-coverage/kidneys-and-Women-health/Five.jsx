"use client";

import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/common/Sidebar";
import { data } from "../data";
const Five = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="overflow-x-clip">
      <div className="lg:grid grid-cols-4 lg:px-10 mt-10">
        <div className="col-span-3 mx-10">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-3xl">
              World kidney day is serious business at BLK
            </h1>
            <div className="border border-lightgreen"></div>
          </div>
          <div className="flex">
            <Image
              src="/media-coverage/5.1.jpg"
              width={1000}
              height={1000}
              className="hover:cursor-pointer mt-5 p-3 object-cover"
              onClick={() => openImage(`/media-coverage/5.1.jpg`)}
              alt="media-coverage"
            />
            <Image
              src="/media-coverage/5.2.jpg"
              width={1000}
              height={1000}
              className="hover:cursor-pointer mt-5 p-3 object-cover"
              onClick={() => openImage(`/media-coverage/5.2.jpg`)}
              alt="media-coverage"
            />
          </div>
          <div className="flex">
            <Image
              src="/media-coverage/5.3.jpg"
              width={1000}
              height={1000}
              className="hover:cursor-pointer mt-5 p-3 object-cover"
              onClick={() => openImage(`/media-coverage/5.3.jpg`)}
              alt="media-coverage"
            />
            <Image
              src="/media-coverage/5.4.jpg"
              width={1000}
              height={1000}
              className="hover:cursor-pointer mt-5 p-3 object-cover"
              onClick={() => openImage(`/media-coverage/5.4.jpg`)}
              alt="media-coverage"
            />
          </div>
        </div>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative">
              <Image
                height={10000}
                width={10000}
                src={selectedImage}
                alt="Selected"
                className="w-[500px] h-[400px]"
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
        <div className="lg:block hidden">
          <Sidebar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Five;
