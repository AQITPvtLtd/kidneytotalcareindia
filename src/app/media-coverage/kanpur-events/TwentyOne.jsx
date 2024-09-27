"use client";

import React, { useState } from "react";
import Image from "next/image";
import { data } from "../data";
import Sidebar from "@/components/common/Sidebar";
const TwentyOne = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  const events = [
    {
      id: 1,
      img: "21.1.jpg",
    },
    {
      id: 2,
      img: "21.2.jpg",
    },
    {
      id: 3,
      img: "21.3.jpg",
    },
    {
      id: 4,
      img: "21.4.jpg",
    },
    {
      id: 5,
      img: "21.5.jpg",
    },
    {
      id: 6,
      img: "21.6.jpg",
    },
    {
      id: 7,
      img: "21.7.jpg",
    },
    {
      id: 8,
      img: "21.8.jpg",
    },
    {
      id: 9,
      img: "21.9.jpg",
    },
    {
      id: 10,
      img: "21.10.jpg",
    },
    {
      id: 11,
      img: "21.11.jpg",
    },
    {
      id: 12,
      img: "21.12.jpg",
    },
    {
      id: 13,
      img: "21.13.jpg",
    },
    {
      id: 14,
      img: "21.14.jpg",
    },
    {
      id: 15,
      img: "21.15.jpg",
    },
    {
      id: 16,
      img: "21.16.jpg",
    },
    {
      id: 17,
      img: "21.17.jpg",
    },
    {
      id: 18,
      img: "21.18.jpg",
    },
    {
      id: 19,
      img: "21.19.jpg",
    },
    {
      id: 20,
      img: "21.20.jpg",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-4 px-10 my-10">
        <div className="col-span-3 mx-10">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-2xl uppercase">Kanpur Event</h1>
            <div className="border border-lightgreen"></div>
          </div>
          <div className="grid-cols-3 lg:grid gap-3">
            {events.map((e) => (
              <div key={e.id}>
                <Image
                  src={`/media-coverage/${e.img}`}
                  width={10000}
                  height={10000}
                  className=" object-cover w-[300px] h-[300px] border-4 border-primary hover:scale-105 duration-300"
                  alt="media-coverage"
                  onClick={() => openImage(`/media-coverage/${e.img}`)}
                />
              </div>
            ))}
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
              className="w-auto h-screen"
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

export default TwentyOne;
