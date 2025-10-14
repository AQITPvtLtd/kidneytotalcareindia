"use client";

import React, { useState, useEffect } from "react";
import { cert } from "@/data/certificate";
import Sidebar from "../Sidebar";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const Certificate = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Open modal
  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  // Navigate left
  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev > 0 ? prev - 1 : cert.length - 1
    );
  };

  // Navigate right
  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev < cert.length - 1 ? prev + 1 : 0
    );
  };

  // Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev(e);
      if (e.key === "ArrowRight") handleNext(e);
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="overflow-x-clip bg-gray-50 py-10">
      <div className="lg:grid grid-cols-12 gap-6 lg:px-12 px-4">
        {/* Left Section */}
        <div className="col-span-8">
          <div className="mb-8 text-center lg:text-left">
            <h1 className="text-[#084cfc] font-extrabold text-3xl mb-2">
              Certificates
            </h1>
            <div className="w-24 h-[3px] bg-[#00a4e9] mx-auto lg:mx-0 rounded-full"></div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cert.map((item, index) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.03] cursor-pointer border border-gray-200"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  width={500}
                  height={500}
                  src={`/certificates/${item.image}`}
                  alt={`Certificate ${item.id}`}
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-4 mt-32 hidden lg:block lg:px-6">
          <div className="sticky top-44">
            <Sidebar />
          </div>
        </div>

      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[100]"
          onClick={handleCloseModal}
        >
          <div className="relative z-[101] max-w-[90vw] max-h-[90vh]">
            <Image
              src={`/certificates/${cert[selectedIndex].image}`}
              alt={`Certificate ${cert[selectedIndex].id}`}
              height={600}
              width={600}
              className="rounded-xl shadow-2xl border-4 border-white object-contain"
            />

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-3xl bg-black bg-opacity-60 rounded-full px-3 py-1 hover:bg-opacity-80 transition"
              onClick={handleCloseModal}
            >
              <FaTimes />
            </button>

            {/* Left Arrow */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-60 rounded-full p-3 hover:bg-opacity-80 transition"
              onClick={handlePrev}
            >
              <FaChevronLeft />
            </button>

            {/* Right Arrow */}
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-60 rounded-full p-3 hover:bg-opacity-80 transition"
              onClick={handleNext}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
