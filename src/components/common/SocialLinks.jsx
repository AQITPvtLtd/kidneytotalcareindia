"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaTimes,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLinks() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sidebar */}
            <div
                className={`fixed top-1/2 right-0 transform -translate-y-1/2
        flex flex-col gap-4 justify-center items-center p-4 bg-gray-200 
        z-40 rounded-l-xl transition-transform duration-500
        ${isOpen ? "translate-x-0" : "translate-x-[120%]"}`}
            >
                {/* Facebook */}
                <div className="group relative transition-transform duration-500 hover:scale-125">
                    <Link
                        href="https://www.facebook.com/TotalKidneySolutions"
                        role="button"
                        target="_blank"
                    >
                        <FaFacebookF className="text-[#1877F2]" size={24} />
                    </Link>
                </div>

                {/* Instagram */}
                <div className="group relative w-max cursor-pointer transition-transform duration-500 hover:scale-125">
                    <Link
                        href="https://www.instagram.com/prakashsunil70/"
                        role="button"
                        target="_blank"
                    >
                        <FaInstagram className="text-[#E4405F]" size={24} />
                    </Link>
                </div>

                {/* LinkedIn */}
                <div className="group relative w-max cursor-pointer transition-transform duration-500 hover:scale-125">
                    <Link
                        href="https://www.linkedin.com/in/sunil-prakash-50879112/"
                        role="button"
                        target="_blank"
                    >
                        <FaLinkedinIn className="text-[#0A66C2]" size={24} />
                    </Link>
                </div>

                {/* YouTube */}
                <div className="group relative w-max cursor-pointer transition-transform duration-500 hover:scale-125">
                    <Link
                        href="https://www.youtube.com/@drsunilprakash9685"
                        role="button"
                        target="_blank"
                    >
                        <FaYoutube className="text-[#FF0000]" size={26} />
                    </Link>
                </div>

                {/* Google Map */}
                <div className="group relative w-max transition-transform duration-500 hover:scale-125">
                    <Link
                        href="https://maps.app.goo.gl/URjGdgDXAs25gTMt5"
                        role="button"
                        target="_blank"
                    >
                        <FcGoogle size={28} />
                    </Link>
                </div>

                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="mt-4 bg-red-600 text-white p-3 rounded-full shadow-lg cursor-pointer"
                >
                    <FaTimes />
                </button>
            </div>

            {/* Open Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed top-1/2 right-0 transform -translate-y-1/2 cursor-pointer
          bg-lightgreen pl-1 pt-1 pb-1 rounded-l-xl shadow-lg z-50"
                >
                    <Image src="/iconbar/iconsidebar.png" width={40} height={40} alt="" />
                </button>
            )}
        </>
    );
}
