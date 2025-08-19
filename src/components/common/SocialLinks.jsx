"use client";
import { React, useState } from "react";
import Link from 'next/link'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
   
} from "react-icons/fa";

export default function SocialLinks() {

    return (
        <>
            {/* Sidebar */}
            <div
                className={`fixed top-1/2 right-0 transform -translate-y-1/2
                flex flex-col gap-4 justify-center items-center p-4 bg-gray-200 
                z-[9999] rounded-l-xl transition-transform duration-500
                `}
            >
                {/* Social Icons */}
                <Link href="https://www.facebook.com/TotalKidneySolutions" target="_blank" rel="noopener noreferrer"
                    className="text-white p-3 rounded-full transition-transform duration-500 bg-red-700 hover:bg-red-800 hover:scale-125">
                    <FaFacebookF />
                </Link>
                <Link href="https://www.instagram.com/prakashsunil70/" target="_blank" rel="noopener noreferrer"
                    className="text-white p-3 rounded-full transition-transform duration-500 bg-red-700 hover:bg-red-800 hover:scale-125">
                    <FaInstagram />
                </Link>
                <Link href="https://www.linkedin.com/in/sunil-prakash-50879112/" target="_blank" rel="noopener noreferrer"
                    className="text-white p-3 rounded-full transition-transform duration-500 bg-red-700 hover:bg-red-800 hover:scale-125">
                    <FaLinkedinIn />
                </Link>

                <Link href="https://www.youtube.com/@drsunilprakash9685" target="_blank" rel="noopener noreferrer"
                    className="text-white p-3 rounded-full transition-transform duration-500 bg-red-700 hover:bg-red-800 hover:scale-125">
                    <FaYoutube />
                </Link>
                
            </div>
        </>
    );
}
