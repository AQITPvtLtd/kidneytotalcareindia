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
    <div className="lg:p-10 overflow-x-clip">
      <div className="my-7">
        <h1 className="text-5xl font-bold text-center">Latest Blog</h1>
        <p className="text-center text-xl">Read our latest blog.</p>
      </div>
      {blog.map((b) => (
        <Link
          key={b.id}
          href={`/blogs/${b.id}/${b.url}`}
          className="lg:flex lg:border-2 mb-4 hover:scale-105 duration-300 hover:shadow-lg"
          alt="blogimage"
        >
          <Image
            src={`/blogs/${b.image}`}
            width={1000}
            height={1000}
            className="lg:w-[200px] h-[150px] object-cover"
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
