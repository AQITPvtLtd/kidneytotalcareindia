"use client";

import React, { useEffect, useState } from "react";
import { getBlog } from "@/services/getBlog";
import Image from "next/image";
import Moment from "react-moment";
import { FaStopwatch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
const Blogs = () => {
  const [blog, setBlog] = useState([]);
  // console.log(blog);

  useEffect(() => {
    async function getData() {
      const result = await getBlog();
      setBlog(result.result);
      // console.log(result);
    }
    getData();
  }, []);
  return (
    <div className="my-4">
      <div className="mt-14 mb-7">
        <h1 className="text-3xl font-bold text-center">Latest Blog</h1>
        <p className="text-center text-xl">
          Read our latest blog. Feel free to ask questions in comments for any
          blog you find interesting.
        </p>
      </div>
      <div className="lg:grid grid-cols-3 mx-10 gap-7">
        {blog.slice(0, 3).map((b) => (
          <Link
            href="/"
            key={b.id}
            className="hover:scale-105 border-gray-300 duration-300 lg:border rounded-md shadow-md"
          >
            <Image
              src={`/blogs/${b.image}`}
              width={1000}
              height={1000}
              className="w-full h-[200px] object-cover"
              alt="blogimage"
            />
            <h1 className="px-5 font-semibold text-center text-xl mt-3 mb-2">
              {b.name}
            </h1>
            <div className="flex justify-around">
              <div className="flex my-2">
                <FaStopwatch className="mt-0.5 mr-1 text-lightgreen" />
                <Moment format="MMMM DD, YYYY">{b.date}</Moment>
              </div>
              <div className="flex my-2">
                <FaUser className="mt-0.5 mr-1 text-lightgreen" />
                Dr Sunil Prakash
              </div>
            </div>
            <p className="p-5">{b?.short_desc}</p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center my-10 ">
        <Link
          href="/blogs"
          className="bg-lightgreen px-6 py-2 text-white rounded-md hover:scale-105 hover:shadow-md"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
