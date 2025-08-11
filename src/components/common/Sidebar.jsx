import React from "react";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Sidebar = ({ data }) => {
  return (
    <div className="text-lg">
      {data.map((d) => (
        <Link
          key={d.id}
          href={`/${d.url}`} // use d.url directly since it already has "information/"
          className="block bg-lightgreen rounded-sm text-white px-3 py-2 mb-1 hover:translate-x-3 duration-500"
        >
          <div className="flex items-center">
            <IoMdCheckmarkCircleOutline className="mr-2" />
            <span>{d.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
