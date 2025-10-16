"use client";
import React, { useEffect, useRef } from "react";
import { video } from "@/data/youtubeVideos";
import Image from "next/image";

const ReviewVideo = () => {
  const players = useRef([]);

  useEffect(() => {
    // Load YouTube API script once
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    // When API ready, initialize players
    window.onYouTubeIframeAPIReady = () => {
      video
        .slice()
        .sort((a, b) => b.id - a.id)
        .forEach((item, index) => {
          players.current[index] = new window.YT.Player(`player-${item.id}`, {
            events: {
              onStateChange: (event) => handleStateChange(event, index),
            },
          });
        });
    };
  }, []);

  // Stop all other videos when one starts playing
  const handleStateChange = (event, currentIndex) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      players.current.forEach((player, i) => {
        if (i !== currentIndex && player?.stopVideo) {
          player.stopVideo();
        }
      });
    }
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative">
        <Image
          src="/youtube/bg.avif"
          width={1000}
          height={1000}
          className="w-full h-[250px] object-cover"
          alt="Contact Image"
        />
        <h1 className="text-white font-serif text-center text-5xl md:text-6xl font-bold absolute inset-0 flex items-center justify-center">
          Video Reviews
        </h1>
      </div>

      {/* Video Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-20 px-4">
        {video
          .slice()
          .sort((a, b) => b.id - a.id)
          .map((item) => (
            <div
              key={item.id}
              className="relative w-full h-0 pb-[56.25%] mb-6"
            >
              <iframe
                id={`player-${item.id}`}
                src={`${item.link.replace(
                  "youtu.be",
                  "www.youtube.com/embed"
                )}?enablejsapi=1`}
                frameBorder="0"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl border-4 border-[#ff0000]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewVideo;
