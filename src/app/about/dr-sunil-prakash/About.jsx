import Experience from "@/components/homepage/Experience";
import Image from "next/image";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { education } from "@/data/education";
import Sidebar from "../Sidebar";

const About = () => {
  return (
    <div>
      <div className="">
        <div className="lg:grid grid-cols-12 items-center flex flex-col-reverse">
          <div className="col-start-2 col-span-6">
            <div className="flex items-center">
              <div className="lg:px-0 px-6 lg:py-0 py-3 lg:pl-0 pl-10">
                <h1 className="text-primary font-extrabold lg:text-6xl text-4xl">
                  Dr. Sunil Prakash
                </h1>

                <p className="lg:text-2xl text-xl font-semibold text-lightgreen lg:pt-5">
                  Vice Chairman and Head Of department Nephrology and Renal
                  sciences & Kidney transplant
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="pt-3">
              <Image
                src="/doctor/dr5.png"
                className="lg:p-0 px-5"
                width={400}
                height={400}
                alt="about-doctor w-[200px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grid grid-cols-3 m-10">
        <div className="col-span-2">
          <table className="table-auto w-full text-left">
            <tbody className=" leading-relaxed text-lg font-sans">
              <tr>
                <td className="flex justify-end mt-1">
                  <GiCheckMark className="text-green-700" />
                </td>
                <td>
                  Vice Chairman and Head Of department Nephrology and Renal
                  sciences & Kidney transplant at B.L. Kapoor Super Speciality
                  Hospital, New Delhi (since January 2012)
                </td>
              </tr>
              <tr>
                <td className="flex justify-end mt-1">
                  <GiCheckMark className="text-green-700" />
                </td>
                <td className="">
                  Certified and experienced nephrologist, highly regarded in
                  Delhi NCR and India
                </td>
              </tr>
              <tr>
                <td className="flex justify-end mt-1">
                  <GiCheckMark className="text-green-700" />
                </td>
                <td className="">
                  Over 3 decades of experience in kidney transplantation and
                  care of CKD and dialysis patients
                </td>
              </tr>
              <tr>
                <td className="flex justify-end mt-1">
                  <GiCheckMark className="text-green-700" />
                </td>
                <td className="">
                  Expertise in early diagnosis and prevention of kidney diseases
                </td>
              </tr>
              <tr>
                <td className="flex justify-end mt-1">
                  <GiCheckMark className="text-green-700" />
                </td>
                <td className="">
                  Leads a team providing comprehensive kidney care across India
                  and abroad
                </td>
              </tr>
              <tr>
                <td className="flex justify-end mt-1">
                  <GiCheckMark className="text-green-700" />
                </td>
                <td className="">
                  Heading Nephrology and Renal Transplant Department at BLK
                  Super Speciality Hospital, a 650-bed quaternary care facility
                  near Rajendra Place Metro Station, New Delhi
                </td>
              </tr>
            </tbody>
          </table>
          <Experience />
          {/* education */}
        </div>
        <div className="lg:block hidden">
          <Sidebar />
        </div>
      </div>

      <div className="my-10">
        {/* Text Content on top of the image */}
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl text-black bg-white py-2 px-3 rounded-md shadow-lg">
            EDUCATION / QUALIFICATIONS
          </h1>

          {/* Education Details */}
          <div className="lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:mx-4 mt-10 lg:px-10 px-3">
            {education.map((e) => (
              <div
                key={e.id}
                className={`border p-5 bg-${e.color} bg-opacity-90 text-white rounded-md shadow-md`}
              >
                <h2 className="text-4xl sm:text-4xl md:text-5xl text-center opacity-70 font-bold font-serif">
                  {e.year}
                </h2>
                <h1 className="font-semibold text-center mt-3 text-xl sm:text-2xl">
                  {e.edu}
                </h1>
                <p className="mt-2 text-center text-sm sm:text-base">
                  {e.college}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
