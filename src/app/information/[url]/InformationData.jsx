import React from "react";
import { Infodata } from "../data";
import Sidebar from "@/components/common/Sidebar";
import Image from "next/image";

const InformationData = ({ url }) => {

  const obj = Infodata.find((item) => item.url.split("/").pop() === url);

  if (!obj) {
    return <p className="text-red-500">Information not found</p>;
  }

  return (
    <div>
      <div className="lg:grid grid-cols-4 lg:lg:px-10 mt-10">
        <div className="col-span-3 lg:mx-10">
          <div className="gap-4 items-center">
            <div className="justify-center bg-white p-6 rounded-lg overflow-hidden">
              <p
                className="text-gray-700 text-lg"
                dangerouslySetInnerHTML={{ __html: obj.content }}
              ></p>
              {obj.image && (
                <Image
                  src={`/information/${obj.image}`}
                  alt={obj.name}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
        <div className="lg:block hidden lg:px-10">
          <Sidebar data={Infodata} />
        </div>
      </div>
    </div>
  );
};

export default InformationData;
