"use client";

import React, { useState } from "react";
import Sidebar from "@/components/common/Sidebar";
import { data } from "../data";
import Image from "next/image";
const Six = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <div className="lg:grid grid-cols-4 px-10 mt-10">
        <div className="col-span-3 mx-10">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-3xl">
              First Ever Kidney Transplant in Tanzania
            </h1>
            <div className="border border-lightgreen"></div>
          </div>
          <div>
            Dear All,
            <br /> Wish to share the coverage we have received today for our
            ‘First Ever Kidney Transplant in Tanzania, performed by the medical
            experts of BLK Centre for Renal Sciences and Kidney Transplant.{" "}
            <br />{" "}
            <span className="font-bold">
              Dr. H.S. Bhatyal – Sr. Consultant, Urology, Andrology & Renal
              Transplant
            </span>{" "}
            had performed the transplant surgery on a 30 year old native of
            Tanzania. Post-op care and management was administered by Dr. Sunil
            Prakash – Sr. Consultant & Director, Nephrology & Renal Transplant
            Services and{" "}
            <span className="font-bold">
              Dr. Rajesh Pande – Director and Senior Consultant
            </span>{" "}
            , BLK Centre for Critical Care. <br />
            The case was shared with media and had garnered us coverage in print
            and online publications.
          </div>
          <div className="lg:grid grid-cols-2">
            <Image
              src="/media-coverage/tanzania-01.jpg"
              width={10000}
              height={10000}
              className="hover:cursor-pointer mt-5 p-3 object-cover"
              onClick={() => openImage(`/media-coverage/tanzania-01.jpg`)}
            />
            <Image
              src="/media-coverage/tanzania-02.jpg"
              width={1000}
              height={1000}
              className="hover:cursor-pointer mt-5 p-3 object-cover"
              onClick={() => openImage(`/media-coverage/tanzania-02.jpg`)}
            />
            <Image
              src="/media-coverage/tanzania-03.jpg"
              width={1000}
              height={1000}
              className="hover:cursor-pointer mt-5 p-3 object-cover"
              onClick={() => openImage(`/media-coverage/tanzania-03.jpg`)}
            />
            <Image
              src="/media-coverage/tanzania-04.jpg"
              width={1000}
              height={1000}
              className="hover:cursor-pointer mt-5 p-3 object-cover"
              onClick={() => openImage(`/media-coverage/tanzania-04.jpg`)}
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
        <div>
          <Sidebar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Six;
