import React from "react";
import Sidebar from "../Sidebar";
import Experience from "@/components/homepage/Experience";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const Editor = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-4 lg:m-16 m-4">
        <div className="lg:block hidden">
          <Sidebar />
        </div>
        <div className="col-span-3 lg:-mt-14">
          <Experience />
          <div>
            <div className="inline-block my-4">
              <h1 className="font-bold text-2xl uppercase">
                Examiner/Teaching Experience
              </h1>
              <div className="border border-lightgreen"></div>
            </div>
            <table>
              <tbody>
                <tr>
                  <td className="align-top">
                    <IoMdArrowDroprightCircle className="text-lightgreen mt-1" />
                  </td>
                  <td>
                    Guiding dissertation of two DNB (medicine) students every
                    year from 1995 onwards.
                  </td>
                </tr>
                <tr>
                  <td className="align-top">
                    <IoMdArrowDroprightCircle className="text-lightgreen mt-1" />
                  </td>
                  <td>
                    Actively involved in Post graduate teaching program of DNB
                    students, Residents, and Interns.
                  </td>
                </tr>
                <tr>
                  <td className="align-top">
                    <IoMdArrowDroprightCircle className="text-lightgreen mt-1" />
                  </td>
                  <td>
                    Have been a DNB medicine examiner and accreditation
                    inspector.
                  </td>
                </tr>
                <tr>
                  <td className="align-top">
                    <IoMdArrowDroprightCircle className="text-lightgreen mt-1" />
                  </td>
                  <td>
                    BLK Hospital got the approval for starting DNB (Nephrology)
                    training program from March 2017. I am the teacher and guide
                    for DNB Nephrology Candidates.
                  </td>
                </tr>
                <tr>
                  <td className="align-top">
                    <IoMdArrowDroprightCircle className="text-lightgreen mt-1" />
                  </td>
                  <td>
                    Running regular DNB (Nephrology) classes involving case
                    presentation, Journal clubs, bedside rounds. Hands-on
                    training to registrars and DNB students in doing kidney
                    biopsies and vascular accesses.
                  </td>
                </tr>
                <tr>
                  <td className="align-top">
                    <IoMdArrowDroprightCircle className="text-lightgreen mt-1" />
                  </td>
                  <td>DNB Nephrology examiner since 2022.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-10">
            <div className="inline-block mb-3">
              <h1 className="font-bold text-2xl uppercase">
                SURGICAL EXPERIENCE
              </h1>
              <div className="border border-lightgreen"></div>
            </div>
            <table>
              <tbody>
                <tr>
                  <td className="align-top">
                    <IoMdArrowDroprightCircle className="text-lightgreen mt-1" />
                  </td>
                  <td>
                    All vascular accesses like AV Fistula on Radial and Brachial
                    Artery as well as AV Shunts.
                  </td>
                </tr>
                <tr>
                  <td className="align-top">
                    <IoMdArrowDroprightCircle className="text-lightgreen mt-1" />
                  </td>
                  <td>
                    Additionally, Central Venous Catheters like Subclavian,
                    Internal Jugular, and Femoral cannulations are independently
                    done by the Nephrology Team.
                  </td>
                </tr>
                <tr>
                  <td className="align-top">
                    <IoMdArrowDroprightCircle className="text-lightgreen mt-1" />
                  </td>
                  <td>
                    We are putting Internal Jugular Permacaths for long-term
                    dialysis access.
                  </td>
                </tr>
                <tr>
                  <td className="align-top">
                    <IoMdArrowDroprightCircle className="text-lightgreen mt-1" />
                  </td>
                  <td>
                    All native kidney biopsies and transplant graft biopsies are
                    done by us.
                  </td>
                </tr>
                <tr>
                  <td className="align-top">
                    <IoMdArrowDroprightCircle className="text-lightgreen mt-1" />
                  </td>
                  <td>
                    CAPD Tenchkoff Catheter insertion is done under local
                    anesthesia.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
