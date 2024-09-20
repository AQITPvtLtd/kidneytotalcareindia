import React from "react";
import Sidebar from "../Sidebar";
import ReactCountryFlag from "react-country-flag";
import { data } from "../data";

const Countires = () => {
  const country = [
    {
      id: 1,
      country: "Japan",
      year: "(1990)",
      content:
        "For training in advanced management of critical care illnesses at national medical centre, Toyama-cho, Tokyo",
      icon: "JP",
      color: "blue",
    },
    {
      id: 2,
      country: "Australia",
      year: "(1997)",
      content:
        "Sydney for training at St Georg hospital, kogarrah Sydney , Australia",
      icon: "AU",
      color: "red",
    },
    {
      id: 3,
      country: "Argentina",
      year: "(1999)",
      content:
        "Attended and presented original research paper in IInd World congress of Nephrology at Buenos Aires Argentina 1999",
      icon: "AR",
      color: "blue",
    },
    {
      id: 4,
      country: "Canada",
      year: "",
      content:
        "Toronto Western hospital Toronto for Jan to june 2000 for award of fellowship of International Society of peritoneal Dialysis.",
      icon: "CA",
      color: "red",
    },
    {
      id: 5,
      country: "USA",
      year: "(2000)",
      content:
        "University of Columbia, Missouri USA, for award of Fellowship of International society of nephrology in 2002",
      icon: "US",
      color: "blue",
    },
    {
      id: 6,
      country: "U.K.",
      year: "(2002)",
      content:
        "Presented best paper in preventive nephrology at European Society of parenteral and enteral Nutrition at Glasgow , UK and won cash award of 500 Euros in 2002",
      icon: "GB",
      color: "red",
    },
    {
      id: 7,
      country: "Pattaya Thailand",
      year: "(2003)",
      content:
        "presented state of the art talk in dietary manipulation in APCN 2003",
      icon: "TH",
      color: "blue",
    },
    {
      id: 7,
      country: "Germany",
      year: "(2003)",
      content:
        "Presented original paper in blood pressure management in World congress of Nephrology, Berlin, Germany in 2003.",
      icon: "DE",
      color: "red",
    },
    {
      id: 8,
      country: "Thailand",
      year: "(2004)",
      content:
        "Invited guest speaker in Annual conference of royal Society of Thailand 2004",
      icon: "TH",
      color: "blue",
    },
    {
      id: 9,
      country: "Malaysia",
      year: "(2004)",
      content:
        "Invited guest speaker in Malaysian Physician’s congress at Kuala Lumpur, Malaysia 2004",
      icon: "MY",
      color: "red",
    },
    {
      id: 10,
      country: "The Netherlands",
      year: "(2004)",
      content:
        "Awarded cash award for original paper in newer techniques of CAPD catheter insertion in International Society of Peritoneal Dialysis in Amsterdam Holland in 2004",
      icon: "NL",
      color: "blue",
    },
    {
      id: 11,
      country: "Spain",
      year: "(2007)",
      content:
        "Attended annual conference of European Renal Association-In Barcelona 2007",
      icon: "ES",
      color: "red",
    },
    {
      id: 12,
      country: "Japan ",
      year: "(2007)",
      content:
        "presented research paper in Asian society of Peritoneal dialysis in Hiroshima in 2007",
      icon: "JP",
      color: "blue",
    },
    {
      id: 13,
      country: "Singapore",
      year: "(2008)",
      content:
        "Attended workshop in Newer dialysis modalities in Singapore in 2008",
      icon: "SG",
      color: "red",
    },
    {
      id: 14,
      country: "Italy",
      year: "(2009)",
      content: "Attended Word congress of Nephrology in Milan, Italy 2009.",
      icon: "IT",
      color: "blue",
    },
    {
      id: 15,
      country: "China ",
      year: "(2009)",
      content:
        "Invited as guest speaker and faculty in ketosteril symposium in Beijing China in 2009",
      icon: "CN",
      color: "red",
    },
    {
      id: 16,
      country: "USA",
      year: "(2010)",
      content:
        "2010 American society of Nephrology meeting- Nov 2010 called renal week held in Denver Colorado USA.",
      icon: "US",
      color: "blue",
    },
    {
      id: 17,
      country: "Prague",
      year: "(2011)",
      content:
        "2011 ERA -EDTA annual conference in Prague ,Czech republic in May 26 to 30 2011",
      icon: "CZ",
      color: "red",
    },
    {
      id: 18,
      country: "USA",
      year: "(2012)",
      content:
        "2012 Annual congress of American Transplant Congress at Boston massachussits USA June1 to june 5 2012.",
      icon: "US",
      color: "blue",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 mt-4 mx-10">
        <div className="col-span-2">
          <div className="inline-block">
            <h1 className="text-primary font-extrabold text-3xl">
              Countries Visited for followship & CMES
            </h1>
            <div className="border border-lightgreen w-full h-[2px]"></div>
            <div className="grid grid-cols-3 gap-5 m-5">
              {country.map((d) => (
                <div
                  key={d.id}
                  className={`${
                    d.color === "blue" ? "bg-primary" : "bg-lightgreen"
                  }  rounded-lg shadow-md text-white px-5 py-2`}
                >
                  <div className="flex">
                    <ReactCountryFlag
                      countryCode={d.icon}
                      svg
                      className="mr-2"
                      style={{
                        fontSize: "2em",
                        lineHeight: "2em",
                      }}
                    />
                    <div className="text-2xl">
                      {d.country}
                      {d.year}
                    </div>
                  </div>

                  <div>{d.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14">
          <Sidebar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Countires;
