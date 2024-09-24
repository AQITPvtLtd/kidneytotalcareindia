"use client"
import React from "react";
import Image from "next/image";
import Sidebar from "@/app/about/Sidebar";
import { useState } from "react";
import { awards } from "@/data/award";
const Awards = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="mt-[50px]">
      <div className="relative">
        <Image
          src="/awards/award.avif"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-cyan-600 opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Awards
        </h1>
      </div>

      <div className="lg:grid grid-cols-12 px-10 mt-10 z-50">
        <div className="col-span-8">
          <div className="flex flex-wrap gap-5">
            {awards.map((item) => (
              <div key={item.id} className="m-2">
                <img
                  src={`/awards/${item.image}`}
                  alt={`awards ${item.id}`}
                  className="cursor-pointer w-48 h-48 object-fill border-8 border-blue-800"
                  onClick={() => openImage(`/awards/${item.image}`)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4">
          <Sidebar />
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-[150vw] max-h-[150vh] object-contain"
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
    </div>
  );
};

export default Awards;
