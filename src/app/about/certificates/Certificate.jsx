"use client"; // Ensures this component is treated as a client component

import React, { useEffect, useState } from "react";
import { cert } from "@/data/certificate";
import Sidebar from "../Sidebar";
import Image from "next/image";
const Certificate = () => {
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

      <div className="lg:grid grid-cols-12 px-10 mt-10">
        <div className="col-span-8">
          <div className="flex flex-wrap gap-5">
            {cert.map((item) => (
              <div key={item.id} className="m-2">
                <img
                  src={`/certificates/${item.image}`}
                  alt={`Certificate ${item.id}`}
                  className="cursor-pointer w-48 h-48 object-cover border-8 border-blue-800"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
