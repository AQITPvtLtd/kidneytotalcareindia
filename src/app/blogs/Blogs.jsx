"use client";

import React, { useState, useEffect } from "react";
import { getBlog } from "@/services/getBlog";
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
import { FaStopwatch, FaUser } from "react-icons/fa";

const Blogs = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function getResult() {
      const result = await getBlog();
      setBlog(result.result);
    }
    getResult();
  }, []);

  return (
    <div className="lg:p-10 px-4 overflow-x-clip bg-gray-50">
      <div className="py-5 text-center">
        <h1 className="text-4xl font-bold mb-2">Latest Blog</h1>
        <p className="text-lg text-gray-600">Read our latest blog.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blog.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 overflow-hidden border border-gray-200 flex flex-col"
          >
            <Image
              src={`/blogs/${b.image}`}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
              alt="blogimage"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{b.name}</h2>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaStopwatch className="mr-1 text-blue-500" />
                <Moment format="MMMM DD, YYYY">{b.date}</Moment>
                <span className="mx-2">|</span>
                <FaUser className="mr-1 text-blue-500" />
                Dr Sunil Prakash
              </div>
              <p className="text-gray-600 text-sm line-clamp-3 flex-grow">{b.short_desc}</p>

              <div className="my-4">
                <Link
                  href={`/blogs/${b.id}/${b.url}`}
                  className="bg-lightgreen text-white px-6 py-2 rounded-md border-2 border-lightgreen transition duration-200 ease-in-out hover:bg-white hover:text-lightgreen hover:shadow-md hover:-translate-y-0.5"
                >
                  Read More
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
