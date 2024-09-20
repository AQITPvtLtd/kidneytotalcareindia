"use client"; // Ensures this component is treated as a client component

import React, { useState } from "react";
import { cert } from "@/data/certificate";
import Sidebar from "../Sidebar";
import Image from "next/image";

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mt-24 md:mt-10">
      <div className="relative">
        <Image
          src="/certificates/certBg.jpg"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <div className="absolute inset-0 bg-cyan-600 opacity-70 z-10"></div>
        <h1 className="font-serif text-center text-6xl font-bold my-4 absolute inset-0 z-20 flex items-center justify-center">
          Certificates
        </h1>
      </div>

      <div className="lg:grid grid-cols-12 px-10 mt-10 z-50">
        <div className="col-span-8">
          <div className="flex flex-wrap gap-5">
            {cert.map((item) => (
              <div key={item.id} className="m-2">
                <img
                  src={`/certificates/${item.image}`}
                  alt={`Certificate ${item.id}`}
                  className="cursor-pointer w-48 h-48 object-fill border-8 border-blue-800"
                  onClick={() =>
                    handleImageClick(`/certificates/${item.image}`)
                  } // Set selected image
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4">
          <Sidebar />
        </div>
      </div>

      {/* Modal for displaying selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleCloseModal}
        >
          <div className="relative z-50">
            <img
              src={selectedImage}
              alt="Selected Certificate"
              className="z-50"
              height={450}
              width={450}
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black rounded-full px-3 py-1"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
