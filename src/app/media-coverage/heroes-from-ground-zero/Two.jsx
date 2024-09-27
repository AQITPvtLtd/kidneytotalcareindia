"use client";

import Sidebar from "@/components/common/Sidebar";
import React, { useState } from "react";
import { data } from "../data";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
const Two = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-4 px-10 mt-10">
        <div className="col-span-3 mx-10">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-3xl">Heroes from ground zero</h1>
            <div className="border border-lightgreen"></div>
          </div>
          <div className="flex font-bold">
            <FaExternalLinkAlt className="mt-1 mr-1" />
            Click on the image to view the full article
          </div>
          <Link
            href="https://timesofindia.indiatimes.com/india/voices-from-the-ground-zero/articleshow/79974593.cms"
            target="__blank"
          >
            <Image
              src="/media-coverage/2.jpg"
              width={1000}
              height={1000}
              className="hover:cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <Sidebar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Two;
