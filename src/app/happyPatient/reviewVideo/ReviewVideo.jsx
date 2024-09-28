import React from "react";
import { video } from "@/data/youtubeVideos"; // Make sure to adjust the import to the correct path
import Image from "next/image";
const ReviewVideo = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src="/youtube/bg.avif"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        {/* <div className="absolute inset-0 bg-red-600 opacity-70 z-10"></div> */}
        <h1 className="text-white font-serif text-center text-6xl font-bold my-4 absolute inset-0 flex items-center justify-center">
          Video Reviews
        </h1>
      </div>
      <div className="mt-10">
        <div className="lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:lg:px-10 px-4">
          {video.map((item) => (
            <div key={item.id} className="relative w-full h-0 pb-[56.25%] mb-6">
              <iframe
                title={`Review Video ${item.id}`}
                src={item.link.replace("youtu.be", "www.youtube.com/embed")}
                frameBorder="0"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl border-4 border-spacing-3 border-[#ff0000]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewVideo;
