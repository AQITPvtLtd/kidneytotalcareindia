import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "../data";
import Sidebar from "@/components/common/Sidebar";
import { FaExternalLinkAlt } from "react-icons/fa";
const Seven = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-4 px-10 mt-10">
        <div className="col-span-3 mx-10">
          <div className="inline-block mb-4">
            <h1 className="font-bold text-3xl">
              Radio Program on 106.40 AIR FM Gold
            </h1>
            <div className="border border-lightgreen"></div>
          </div>
          <div className="">
            <Link
              target="__blank"
              className="hover:underline hover:text-primary font-bold flex"
              href="https://www.facebook.com/blksuperspecialityhospital/videos/1408013329265574/"
            >
              <FaExternalLinkAlt className="mt-1 mr-1" />
              Click to view the whole video
            </Link>
            <Image
              src="/media-coverage/7.jpg"
              width={10000}
              height={10000}
              className="hover:cursor-pointer object-cover"
              alt="media-coverage"
            />
          </div>
        </div>
        <div>
          <Sidebar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Seven;
