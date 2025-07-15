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
            className="bg-lightgreen rounded-sm text-white px-3 py-2 mb-1 hover:translate-x-3 duration-500"
          >
            <Link href={`${d.link}`} className="">
              <table>
                <tr>
                  <td>
                    <IoMdCheckmarkCircleOutline className="mt-1 mr-1" />
                  </td>
                  <td> {d.name}</td>
                </tr>
              </table>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
