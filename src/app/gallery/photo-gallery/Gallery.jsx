"use client";
import { galleryPhoto } from "@/data/gallery";
import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/common/Sidebar";
import Link from "next/link";
import { data } from "../data";
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="">
      {/* <div className="relative">
        <Image
          src=""
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-cyan-600 opacity-70 z-10"></div>
        <h1 className="absolute inset-0 z-20 flex items-center justify-center text-white font-serif text-center text-6xl font-bold my-4">

        </h1>
      </div> */}

      <div className="relative">
        <Image
          src="/gallery/backgroundImg.jpg"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-cyan-600 opacity-70 z-10"></div>
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-[10] flex items-center justify-center">
          Photo Gallery
        </h1>
      </div>

      <div className="lg:grid grid-cols-3 lg:px-10 mt-10 z-50">
        <div className="col-span-2">
          <div className="lg:grid grid-cols-3">
            {galleryPhoto.map((item) => (
              <div key={item.id} className="m-2">
                <Image
                  width={1000}
                  height={1000}
                  src={`/gallery/${item.image}`}
                  alt={`gallery ${item.id}`}
                  className="cursor-pointer h-[200px] border-8 border-blue-800 object-center"
                  onClick={() => openImage(`/gallery/${item.image}`)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 lg:block hidden">
          {/* Sidebar (Replaced) */}
          <div className="lg:block hidden">
            {data.map((item) => (
              <Link key={item.id} href={item.link}>
                <div className="flex items-start gap-2 bg-red-800 text-white p-3 rounded-sm mb-2 cursor-pointer hover:bg-red-900 transition">
                  {/* <div>  <Check size={16} className="mt-1" /></div> */}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative">
            <Image
              width={500}
              height={500}
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[90vh] object-contain"
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

export default Gallery;
