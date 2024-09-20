import React from "react";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Sidebar = () => {
  return (
    <div>
      <div className="text-lg">
        <div className="bg-blue-600 text-white px-3 py-2 mb-2 hover:translate-x-3 duration-500">
          <Link href="/about/dr-sunil-prakash" className="flex">
            <IoMdCheckmarkCircleOutline className="mt-1 mr-1" />
            About Dr. Sunil Prakash
          </Link>
        </div>
        <div className="bg-blue-600 text-white px-3 py-2 mb-2 hover:translate-x-3 duration-500">
          <Link href="/about/certificates" className="flex">
            <IoMdCheckmarkCircleOutline className="mt-1 mr-1" />
            Certificates
          </Link>
        </div>
        <div className="bg-blue-600 text-white px-3 py-2 mb-2 hover:translate-x-3 duration-500">
          <Link href="/about/case-studies" className="flex">
            <IoMdCheckmarkCircleOutline className="mt-1 mr-1" />
            Case Studies
          </Link>
        </div>
        <div className="bg-blue-600 text-white px-3 py-2 mb-2 hover:translate-x-3 duration-500">
          <Link href="/about/editor-dns-newsletter" className="flex">
            <IoMdCheckmarkCircleOutline className="mt-1 mr-1" />
            Editor DNS NewsLetter
          </Link>
        </div>
        <div className="bg-blue-600 text-white px-3 py-2  hover:translate-x-3 duration-500">
          <Link
            href="/about/countries-visited-for-fellowship-cmes"
            className="flex"
          >
            <IoMdCheckmarkCircleOutline className="mt-1 mr-1" />
            Countries Visited for fellowship & CMEs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
