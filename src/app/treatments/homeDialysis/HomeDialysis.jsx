import React from "react";
import Image from "next/image";
import Sidebar from "@/components/common/Sidebar";
import { treatmentData } from "../data";
const HomeDialysis = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:m-16 m-8">
        <div className="lg:block hidden">
        <Sidebar data={treatmentData}/>  
        </div>
        <div className="col-span-2 mx-5 inline-block">
          <div className="inline-block">
            <h1 className="text-primary font-extrabold text-3xl">
              Home Dialysis Treatments
            </h1>
            <div className="border border-lightgreen w-full h-[2px]"></div>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-700 mt-8">
              Peritoneal dialysis is a very simple technique that is performed
              daily at the patient’s home, there are two types: Continuous
              Ambulatory Peritoneal Dialysis (CAPD) or manual and Automatic
              Peritoneal Dialysis (APD) with machine or cycler.
            </p>
          </div>

          <div>
            <h1 className="text-primary font-extrabold text-3xl">
              What is peritoneal dialysis?
            </h1>
            <div className="p-3">
              <Image
                src="/Kidney/homeDialysis.jpg"
                height={350}
                width={350}
                alt="KidneyImg"
              />
            </div>
            <p className="text-lg font-bold text-gray-700 mt-4">
              It is dialysis performed daily by the patient at home after a
              period of learning. It only requires a sufficient space to store
              the material and a suitable and well-ventilated place to perform
              the technique, which can be the room itself.
            </p>
            <p className="text-lg font-bold text-gray-700 mt-4">
              It is recommended that there be no animals at home.
            </p>
          </div>

          <div>
            <h1 className="text-primary font-extrabold text-3xl mt-8">
              Access peritoneal dialysis:
            </h1>

            <p className="text-lg font-bold text-gray-700 mt-2">
              The peritoneal fluid is introduced into the peritoneal cavity
              through a soft silicone catheter or tube, which is placed through
              a small surgical incision in the abdomen at least one month before
              use.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-2">
              This catheter is hidden under clothing and does not interfere with
              any type of activity. It only requires some simple cleaning care
              that is learned in the training phase.
            </p>

            <h1 className="text-primary font-extrabold text-3xl mt-8">
              The training:
            </h1>
            <p className="text-lg font-bold text-gray-700 mt-2">
              It begins when a month after the placement of the catheter. It is
              performed in the Peritoneal Dialysis Unit by the nurse responsible
              for their training. It consists of learning a few simple steps
              perfectly ordered so that during the change of dialysis fluid you
              maintain at all times the cleaning measures necessary to avoid
              infections.
            </p>
            <p className="text-lg font-bold text-gray-700 mt-2">
              It is not necessary to have any health knowledge and it can be
              done at any age. The duration of the training will be adapted to
              your needs.
            </p>
          </div>

          <div>
            <h1 className="text-primary font-extrabold text-3xl mt-8">
              Types of peritoneal dialysis:
            </h1>
            <h1 className="text-primary font-extrabold text-xl mt-1">
              There are two types of peritoneal dialysis:
            </h1>

            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>
                Continuous Ambulatory Peritoneal Dialysis (CAPD) or Manual.
              </li>
              <li>
                Automatic Peritoneal Dialysis (DPA), with machine or cycler.
              </li>
            </ul>
            <ol className="list-decimal list-inside text-gray-700 mt-2">
              <li>
                In the CAPD (manual) peritoneal fluid changes are made 3-4 times
                a day. The schedule of exchanges is approximate, depending on
                the routine and unforeseen that may arise, recommending that at
                least the permanence of the liquid is a minimum of 4 hours and a
                maximum of 8 hours.
              </li>
              <li>
                In the DPA (cycler) the periodic changes are made by a machine
                called a cycler during the night while you are sleeping. The
                last fluid change is the one that remains throughout the day in
                the abdomen until night when the cycler empties the abdomen just
                connect.
              </li>
            </ol>

            <h1 className="text-primary font-semibold text-2xl mt-1">
              Regardless of whether you dialyze with a cycler, you must first
              perform manual dialysis training in order to continue dialysis in
              case of machine failure, power outages or weekend trips, etc.
            </h1>

            <h1 className="text-primary font-semibold text-2xl mt-1">
              The DPA (cycler) is especially indicated when you want to maintain
              work activity without interference.
            </h1>
          </div>

          <div>
            <h1 className="text-primary font-extrabold text-3xl mt-8">
              Advantages and disadvantages of peritoneal dialysis:
            </h1>

            <div>
              <h1 className="text-primary font-extrabold text-xl mt-1">
                Advantage:
              </h1>

              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  It is a continuous treatment that is done throughout the day,
                  mimicking your own kidneys, not leading to accumulation of
                  toxins or water in the body.
                </li>
                <li>
                  It is done at home and only goes to the hospital for tests and
                  reviews (more or less every 3 months).
                </li>
                <li>
                  As it is done by a catheter located in the abdomen, it is not
                  necessary to puncture the veins repeatedly.
                </li>
                <li>
                  It is a simple technique applicable at any age, which allows a
                  flexible schedule, which gives autonomy and allows you to
                  reconcile your work and social life.
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-primary font-extrabold text-xl mt-1">
                Disadvantages:
              </h1>

              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  You are the one who performs the treatment, except in
                  exceptional cases, and therefore requires active involvement
                  in it.
                </li>
                <li>
                  The presence of the catheter in the abdomen, which on the
                  other hand does not interfere with any activity, may be
                  uncomfortable or unsightly.
                </li>
                <li>
                  At home, you need an adequate and conditioned space to carry
                  out the treatment and store the material.
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-primary font-extrabold text-xl mt-4">
                Storage of material:
              </h1>
              <h1 className="text-primary font-semibold text-2xl mt-1">
                The material is received once a month for what is needed:
              </h1>

              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>A sufficient and conditioned space.</li>
                <li>Avoid extreme temperatures and away from humidity</li>
                <li>
                  It must be kept in closed boxes to avoid breakage or
                  deterioration.
                </li>
                <li>
                  Sort bags according to your glucose concentration, it
                  facilitates control of stocks, expiration and helps you avoid
                  mistakes.
                </li>
              </ul>
            </div>
            <p className="text-lg font-bold text-gray-700 mt-2">
              You can make short trips (less than 7 days) carrying your own
              material. If the duration is longer, your usual provider will
              provide your treatment at your vacation place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDialysis;
