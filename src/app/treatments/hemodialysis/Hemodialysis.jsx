import React from "react";
import Image from "next/image";
import Sidebar from "@/components/common/Sidebar";
import { treatmentData } from "../data";

const Hemodialysis = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:m-16 m-8">
        <div className="lg:block hidden">
        <Sidebar data={treatmentData}/>
        </div>
        <div className="col-span-2 mx-5 inline-block">
          <div className="inline-block">
            <h1 className="text-primary font-extrabold text-3xl">
              Hemodialysis Treatments for Kidney
            </h1>
            <div className="border border-lightgreen w-full h-[2px]"></div>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-700 mt-8">
              Haemodialysis is a technique that replaces the main functions of
              the kidney, bypassing the blood through a biocompatible artificial
              filter (functioning as an artificial kidney) in which it is
              purified, returning the patient free of impurities.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-4">
              Haemodialysis is the treatment option for kidney failure that is
              done by passing it through an external filter that is in a
              dialysis machine. This filter allows toxins and excess fluid to
              leave the blood, thus replacing the function of your diseased
              kidneys.
            </p>

            <div className="p-3">
              <Image
                src="/Kidney/hemodialysis.jpg"
                height={350}
                width={350}
                alt="KidneyImg"
              />
            </div>
            <h1 className="text-primary font-extrabold text-3xl">
              Venous access
            </h1>
            <p className="text-lg font-bold text-gray-700 mt-8">
              To carry out the hemodialysis, it is necessary to have a vein of a
              large caliber (called a fistula) that will serve to puncture the 2
              needles through which the blood will come and go. It is done by a
              small surgical intervention, usually in the non-dominant arm or in
              one with better veins, in which an artery is attached to a vein
              that, over time, will thicken its wall and its caliber when
              receiving blood at a higher rate. Pressure.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-4">
              This fistula must be planned with a minimum of 3-6 months, the
              time necessary for its proper development and maturation. When
              there are bad veins or they have been exhausted by previous
              fistulas, a tube is placed between the artery and the vein of a
              special material (Goretex) and that is where it is punctured. It
              is very important that if your future dialysis option is
              hemodialysis, protect the main veins of your arms as much as
              possible for future fistulas; blood tests should be drawn from
              veins in the back of the hand and arm.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-4">
              If the renal insufficiency is acute or there has been a rapid
              worsening of chronic renal failure, it is necessary to resort to
              the placement of a temporary catheter in a thick femoral or
              jugular vein, which carries the risk of infections and thrombosis
              that can complicate the functioning of future fistulas. Its
              placement and use are immediate.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-4">
              If a temporary catheter is expected to last longer than 3-4 weeks,
              it is recommended to place a permanent catheter, which due to its
              material and its subcutaneous route, presents fewer complications
              and can be maintained much longer. Its placement is relatively
              simple and requires care by both the patient and the healthcare
              staff. In any case, the permanent catheter should never be a
              long-term option, unless it is impossible to make a fistula.
            </p>

            <h1 className="text-primary font-extrabold text-3xl mt-8">
              The dialysis filters
            </h1>
            <p className="text-lg font-bold text-gray-700 mt-1">
              The dialysis filter is the place where blood is cleared in
              hemodialysis. It is a plastic cartridge that contains thousands of
              hollow filaments through which the blood passes and which are
              surrounded by the dialysis fluid into which all the debris that
              comes out of the blood is poured. This filter is discarded
              together with the rest of the material after each session.
            </p>

            <h1 className="text-primary font-extrabold text-3xl">
              Haemodialysis modalities
            </h1>

            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Hospital</li>
              <li>Domiciliary</li>
            </ul>
            <p className="text-lg font-bold text-gray-700 mt-4">
              In both cases, the treatment is intermittent and therefore allows
              the accumulation of toxic substances and fluid between dialysis
              and dialysis, so it is necessary to maintain some restrictions of
              diet and fluids.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-4">
              The hospital hemodialysis is performed in hospital units or
              dialysis centre in Delhi, usually performed 3 times a week with an
              average duration of 4 hours, in shifts on Tuesday, Thursday and
              Saturday or Monday, Wednesday and Friday and at fixed times
              morning or afternoon. In this case, the dialysis is carried out by
              the healthcare staff, with whom the patient maintains close
              contact, as well as with the rest of the patients. The patient
              maintains a passive attitude during the treatment but must comply
              with the dietary and medication recommendations.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-4">
              The home hemodialysis, which is enhanced in the home after
              training in the hospital 1-2 months. It only goes to the Hospital
              for reviews and tests every 2-3 months. At home, there must be
              enough space for the dialysis machine and the necessary equipment,
              and there must be a trained collaborator (usually a relative) who
              must remain at home while he is on dialysis.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-4">
              Contact phone is always available 24 hours a day. This option
              allows the patient freedom of time, offers the possibility of
              being able to perform it more frequently (3 to 6 times a week),
              although of shorter duration, and facilitates the reconciliation
              of treatment with social and work life.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-4">
              By being able to do it more frequently, important accumulations of
              toxins are avoided, it is more physiological, and it requires
              fewer restrictions in the diet. Obviously, it is necessary that
              both the patient, the companion, and the home meet certain
              requirements that guarantee adequate treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hemodialysis;
