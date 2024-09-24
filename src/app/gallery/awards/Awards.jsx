"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { awards } from "@/data/award";
import Sidebar from "@/components/common/Sidebar";
import { data } from "../data";

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="">
      <div className="relative">
        <Image
          src="/awards/award.avif"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-cyan-600 opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-[10] flex items-center justify-center">
          Awards
        </h1>
      </div>

      <div className="lg:grid grid-cols-3 px-10 mt-10 z-50">
        <div className="col-span-2">
          <div className="lg:grid grid-cols-3">
            {awards.map((item) => (
              <div key={item.id} className="m-2">
                <Image
                  width={1000}
                  height={1000}
                  src={`/awards/${item.image}`}
                  alt={`awards ${item.id}`}
                  className="hover:scale-105 duration-300 h-[250px] cursor-pointer object-fill border-8 border-blue-800"
                  onClick={() => openImage(`/awards/${item.image}`)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 lg:block hidden">
          <Sidebar data={data} />
        </div>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative">
              <Image
                height={1000}
                width={1000}
                src={selectedImage}
                alt="Selected"
                className="w-[400px] h-full"
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
