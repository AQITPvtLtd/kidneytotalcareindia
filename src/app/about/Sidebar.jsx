import React from "react";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Sidebar = ({ data }) => {
  return (
    <div>
      <div className="text-lg">
        {data.map((d) => (
          <div
            key={d.id}
            className="bg-blue-600 text-white px-3 py-2 mb-2 hover:translate-x-3 duration-500"
          >
            <Link href={`/about/${d.link}`} className="flex">
              <IoMdCheckmarkCircleOutline className="mt-1 mr-1" />
              {d.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
