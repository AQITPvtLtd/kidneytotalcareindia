import React from "react";
import Image from "next/image";
import Sidebar from "@/components/common/Sidebar";
import { treatmentData } from "../data";
const Dialysis = () => {
  return (
    <div className="overflow-x-clip">
      <div className="lg:grid grid-cols-3 lg:m-16 m-8">

        <div className="col-span-2 mx-5 inline-block">
          <div className="inline-block">
            <h1 className="text-primary font-extrabold text-3xl">Dialysis</h1>
            <div className="border border-lightgreen w-full h-[2px]"></div>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-700 mt-8">
              When the kidneys are healthy, they cleanse their blood. They also
              produce hormones that keep your bones strong and your blood
              healthy. When the kidneys fail, treatment is needed to replace the
              work they performed. Unless you receive a kidney transplant, you
              will need a treatment called dialysis.
            </p>
            <div className="p-3">
              <Image
                src="/kidney/dialysis2.jpg"
                height={350}
                width={350}
                alt="KidneyImg"
              />
            </div>
            <p className="text-lg font-bold text-gray-700 mt-4">
              Dialysis is the technique that partially replaces the function of
              the kidneys, such as the depurative and normalizing function of
              the fluid and the composition of the blood. To do this, a membrane
              is used that contacts the blood, which acts as a filter through
              which blood filtration occurs imitating what the kidneys would do.
              The functions of formation of Erythropoietin and production of
              active Vitamin D do not carry them out and therefore this
              treatment must be added.
            </p>

            <h1 className="text-primary font-extrabold text-3xl mt-8">
              There are two types of dialysis, peritoneal dialysis, and
              hemodialysis.
            </h1>

            <p className="text-lg font-bold text-gray-700 mt-2">
              <strong> The Peritoneal Dialysis </strong> is the one that is
              performed in the peritoneal cavity and uses as a filter the
              natural peritoneal membrane that surrounds the entire cavity. So
              that the purification of the blood can be carried out, a special
              liquid (dialysis fluid) that is periodically replaced is
              introduced through a soft silicone tube into the peritoneal
              cavity. It is a simple technique that is performed at home (it is
              a home dialysis option).
            </p>

            <p className="text-lg font-bold text-gray-700 mt-2">
              <strong> The Haemodialysis,</strong> it is the one that uses the
              blood of the patient, making it pass through an artificial filter
              on the outside and it is at the level of this filter where the
              depurative and normalizing function of the liquid and composition
              of the blood is performed. It is a technique that is performed
              primarily in hospital units or in{" "}
              <span className="font-semibold text-blue-400">
                {" "}
                dialysis centre in Delhi,
              </span>
              although home hemodialysis treatment is currently also being
              developed.
            </p>

            <h1 className="text-primary font-extrabold text-3xl mt-8">
              What are the differences between both types of dialysis?
            </h1>
            <p className="text-lg font-bold text-gray-700 mt-2">
              Broadly speaking, we could say that both techniques are
              superimposable in their function of partially replacing renal
              function. Peritoneal dialysis is performed at home and it is the
              patient himself who performs after a short period of guidance by
              <span className="font-semibold text-blue-400">
                {" "}
                dialysis specialist in Delhi,{" "}
              </span>{" "}
              is continuous throughout the day and therefore more physiological
              and above all, allows the patient to perform their freedom more
              freely. usual social and work activity.
            </p>
            <p className="text-lg font-bold text-gray-700 mt-2">
              Haemodialysis is usually performed in hospital units or{" "}
              <span className="font-semibold text-blue-400">
                {" "}
                dialysis centre in Delhi,
              </span>{" "}
              usually 3 times a week (in some it is daily and shorter) every
              other day and at fixed pre-established times, this often prevents
              reconciliation with the labour and social activity, in addition to
              the fact that being an intermittent technique makes it less
              physiological by more abrupt changes. Nowadays, home hemodialysis
              programs are being developed that overcome these problems.
            </p>
          </div>
        </div>

        <div className="hidden lg:block lg:px-6">
          <div className="sticky top-[165px]">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialysis;
