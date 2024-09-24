import React from "react";
import { Infodata } from "./data";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Information = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-12 items-center justify-evenly gap-10 mt-5">
        <div className="col-start-2 col-span-5">
          {Infodata.slice(0, 5).map((d) => (
            <div
              key={d.id}
              className="bg-blue-600 text-white px-3 py-2 mb-2 hover:translate-x-3 duration-500"
            >
              <Link href={`/information/${d.id}`}>
                <div className="flex">
                  <AiOutlineDoubleRight className="mt-1 mr-1" />

                  {/* <IoMdCheckmarkCircleOutline className="mt-1 mr-1" /> */}
                  {d.title}
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="col-span-5">
          {Infodata.slice(5, 10).map((d) => (
            <div
              key={d.id}
              className="bg-blue-600 text-white px-3 py-2 mb-2 hover:translate-x-3 duration-500"
            >
              <Link href={`/information/${d.id}`}>
                <div className="flex">
                  {/* <IoMdCheckmarkCircleOutline className="mt-1 mr-1" /> */}
                  <AiOutlineDoubleRight className="mt-1 mr-1" />
                  {d.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
