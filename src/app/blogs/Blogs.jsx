"use client";

import React, { useState, useEffect } from "react";
import { getBlog } from "@/services/getBlog";
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
import { FaStopwatch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
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
    <div className="p-10">
      <div className="my-7">
        <h1 className="text-5xl font-bold text-center">Latest Blog</h1>
        <p className="text-center text-xl">
          Read our latest blog. Feel free to ask questions in comments for any
          blog you find interesting.
        </p>
      </div>
      {blog.map((b) => (
        <Link
          key={b.id}
          href={`/blogs/${b.url}`}
          className="flex border-2 mb-4 hover:scale-105 hover:shadow-lg"
          alt="blogimage"
        >
          <Image
            src={`/blogs/${b.image}`}
            width={1000}
            height={1000}
            className="w-[200px]"
            alt="blogimage"
          />
          <div className="p-4">
            <h1 className="text-xl font-bold ">{b.name}</h1>
            <div className="flex">
              <div className="flex my-2">
                <FaStopwatch className="mt-0.5 mr-1 text-lightgreen" />
                <Moment format="MMMM DD, YYYY">{b.date}</Moment>
              </div>
              <div className="flex my-2 ml-4">
                <FaUser className="mt-0.5 mr-1 text-lightgreen" />
                Dr Sunil Prakash
              </div>
            </div>
            <p>{b.short_desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
