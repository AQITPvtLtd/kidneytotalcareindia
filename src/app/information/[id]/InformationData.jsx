import React from "react";
import Link from "next/link";
import { Infodata } from "../data";
import { AiOutlineDoubleRight } from "react-icons/ai";
const InformationData = ({ id }) => {
  const obj = Infodata.find((item) => item.id == id);
  return (
    <div>
      <div className="lg:grid grid-cols-12">
        <div className="col-start-2 col-span-6 lg:mt-10 mt-5">
          <div key={obj.id} className=" gap-4 items-center">
            <div className="justify-center bg-white p-6 rounded-lg overflow-hidden">
              {/* <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {obj.title}
              </h1> */}
              <p
                className="text-gray-700 text-lg"
                dangerouslySetInnerHTML={{ __html: obj.content }}
              ></p>
              {/* <Image
                src={`/information/${obj.image}`}
                alt={obj.name}
                width={500}
                height={500}
                className="rounded-lg"
              /> */}

              {/* <p className="text-gray-700 text-lg">{obj.image}</p> */}
              <p className="text-gray-700 text-lg">{obj.name}</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 mt-10 px-5">
          <h1 className="font-semibold text-3xl">Patient Information</h1>
          {Infodata.map((d) => (
            <div
              key={d.id}
              className="bg-blue-600 text-white px-3 py-2 mb-2 hover:translate-x-3 duration-500"
            >
              <Link href={`/information/${d.id}`}>
                <div className="flex">
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

export default InformationData;
