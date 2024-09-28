import React from "react";
import { Infodata } from "../data";
import Sidebar from "@/components/common/Sidebar";
import Image from "next/image";
const InformationData = ({ id }) => {
  const obj = Infodata.find((item) => item.id == id);
  return (
    <div>
      <div className="lg:grid grid-cols-4  lg:lg:px-10 mt-10">
        <div className=" col-span-3 lg:mx-10">
          <div className=" gap-4 items-center">
            <div className="justify-center bg-white p-6 rounded-lg overflow-hidden">
              {/* <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {obj.title}
              </h1> */}
              <p
                className="text-gray-700 text-lg"
                dangerouslySetInnerHTML={{ __html: obj.content }}
              ></p>
              {obj.image !== "" && (
                <Image
                  src={`/information/${obj.image}`}
                  alt={obj.name}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              )}

              {/* <p className="text-gray-700 text-lg">{obj.image}</p> */}
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <Sidebar data={Infodata} />
        </div>
      </div>
    </div>
  );
};

export default InformationData;
