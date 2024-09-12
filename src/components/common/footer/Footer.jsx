"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="lg:relative text-white bg-primary">
      <Image
        src="/footer/footerbg.png"
        width={10000}
        height={10000}
        className="w-full object-cover h-[390px] hidden lg:block"
      />
      <footer className="items-center text-surface lg:absolute lg:inset-0">
        <div className="border text-gray-600 mt-5 mx-5"></div>

        <div className="container py-20 pl-10 pt-6 mt-[50px] lg:mt-[14px]">
          <div className="lg:grid grid-cols-4">
            {/* logo */}
            <div>
              <Link href="/" className="">
                <Image
                  src="/logo/logo.png"
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-[250px] mb-4 bg-white p-2"
                />
              </Link>
              <p className="leading-normal text-white">
                Are you looking for the best nephrologist in Delhi? Look no
                further because Dr. Sunil Prakash is here to provide you with
                exceptional care and expertise.
              </p>
              <div className="flex gap-4 items-center mt-3">
                <Link
                  target="__blank"
                  href={
                    "https://www.facebook.com/profile.php?id=61559397785328"
                  }
                  className="hover:text-secondary"
                >
                  <FaFacebook size={20} />
                </Link>
                <Link
                  target="__blank"
                  href={"https://www.instagram.com/treatglobe/"}
                  className="hover:text-secondary"
                >
                  <FaInstagram size={20} />
                </Link>
                <Link
                  target="__blank"
                  href={
                    "https://www.linkedin.com/company/treat-glob/?viewAsMember=true"
                  }
                  className="hover:text-secondary"
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link
                  target="__blank"
                  href={"https://www.youtube.com/@TreatGlobe"}
                  className="hover:text-secondary"
                >
                  <FaYoutube size={20} />
                </Link>
                <Link
                  target="__blank"
                  href={"https://t.me/treatglobe"}
                  className="hover:text-secondary"
                >
                  <FaTelegramPlane size={20} />
                </Link>
              </div>
            </div>
            <div className="lg:flex justify-center mt-6">
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">Quick Links</h5>

                <ul className="mb-0 list-none leading-loose">
                  <li>
                    <Link href="/" className="hover:text-darkgreen">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-darkgreen">
                      Treatments
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles" className="hover:text-darkgreen">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-darkgreen">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:flex justify-center mt-6">
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">Treatments</h5>

                <ul className="mb-0 list-none leading-loose">
                  <li>
                    <Link href="/" className="hover:text-blue">
                      Renal Replacement Therapy
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-blue">
                      Kidney Transplantation
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-blue">
                      Dialysis
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-blue">
                      Slowing of kidney disease by diet
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* address */}
            <div className="lg:flex justify-center mt-6 lg:ml-5">
              <div className="mb-6">
                <ul className="mb-0 list-none leading-loose">
                  <li className="leading-normal">
                    <h5 className="mb-2.5 font-bold uppercase">Address</h5>
                    <Link
                      target="__blank"
                      href="https://maps.app.goo.gl/LPTCjhdCZBdtzp8m6"
                      className="hover:text-blue"
                    >
                      C -132 Top Floor Sarvodaya Enclave N.Delhi-110049
                    </Link>
                  </li>
                  <li className="mt-3 leading-normal">
                    <Link href="tel:+91 98186 47557">
                      <h5 className="mb-2.5 font-bold uppercase">Address</h5>
                      <div className="hover:text-blue">+91 98186 47557</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Copyright section --> */}
        <div className="w-full bg-lightgreen text-white p-2 text-center">
          © 2024 Copyright:
          <Link
            className="text-white font-semibold"
            href="https://www.tekbooster.com"
          >
            TekBooster
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
