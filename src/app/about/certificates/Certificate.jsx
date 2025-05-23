"use client"; // Ensures this component is treated as a client component

import React, { useState } from "react";
import { cert } from "@/data/certificate";
import Sidebar from "../../../components/common/Sidebar";
import Image from "next/image";
import { data } from "../data";
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
    <div className="lg:mt-24 mt-10 overflow-x-clip">
      <div className="lg:grid grid-cols-12 gap-4 lg:px-10 mt-10 z-50">
        <div className="col-span-8">
          <div className="mb-5">
            <h1 className="text-primary font-extrabold text-3xl m-2">
              Certificates
            </h1>
            <div className="border border-lightgreen w-full h-[2px] mx-2"></div>
          </div>
          <div className="lg:grid grid-cols-4 gap-5">
            {cert.map((item) => (
              <div key={item.id} className="m-2">
                <Image
                  width={500}
                  height={500}
                  src={`/certificates/${item.image}`}
                  alt={`Certificate ${item.id}`}
                  className="cursor-pointer lg:w-48 w-screen mb-3 lg:h-48 object-fill border-8 border-blue-800"
                  onClick={() =>
                    handleImageClick(`/certificates/${item.image}`)
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4 mt-14 lg:block hidden">
          <Sidebar data={data} />
        </div>
      </div>

      {/* Modal for displaying selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[100]" // Increased z-index
          onClick={handleCloseModal}
        >
          <div className="relative z-[101]">
            <Image
              src={selectedImage}
              alt="Selected Certificate"
              className="z-[101] object-cover"
              height={450}
              width={450}
            />

            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black rounded-full px-3 py-1 z-[101]"
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
