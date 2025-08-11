import React from "react";
import Image from "next/image";
import Sidebar from "../Sidebar";

const KidneyFailure = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:m-16 m-8">
        <div className="lg:block hidden">
          <Sidebar />
        </div>
        <div className="col-span-2 mx-5 inline-block">
          <div className="inline-block">
            <h1 className="text-primary font-extrabold text-3xl">
              Kidney Failure Treatments
            </h1>
            <div className="border border-lightgreen w-full h-[2px]"></div>
          </div>
          <div>
            <h1 className="text-primary font-extrabold text-3xl mt-2">
              The treatment will depend on the degree of chronic kidney disease.
            </h1>
            <p className="text-lg font-bold text-gray-700 mt-8">
              In early stages it is important:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Control blood pressure</li>
              <li>Monitor sugar, especially in people with diabetes</li>
              <li>Reduce the weight</li>
              <li>Control blood lipid levels</li>
              <li>
                Monitor the intake of protein, salt, liquids, potassium and
                phosphorus to avoid overloading the impaired function of the
                kidney.
              </li>
            </ul>

            <p className="text-lg font-bold text-gray-700 mt-8">
              If the disease progresses and reaches the situation of terminal
              renal failure or stage 5, a substitute treatment should be
              considered: kidney transplant or dialysis or opt for conservative
              medical treatment.
            </p>

            <div className="p-3">
              <Image
                src="/kidney/kidneyfailure.jpg"
                height={350}
                width={350}
                alt="KidneyImg"
              />
            </div>

            <h1 className="text-primary font-extrabold text-3xl mt-2">
              Substitute treatment of Chronic Renal Failure
            </h1>
            <p className="text-lg font-bold text-gray-700 mt-1">
              At all times the patient is the one who, together with the best
              nephrologist in Delhi, decides how to manage their illness. The
              choice of one modality or another must be made after receiving
              detailed information on each of the options, with the aim of
              making the treatment as best as possible adapted to the patient’s
              lifestyle, preferences and health status.
            </p>
            <p className="text-lg font-bold text-gray-700 mt-1">
              The first decision is to choose a treatment that performs some of
              the renal functions (renal replacement therapy) or a treatment
              that manages the symptoms of kidney disease (conservative
              treatment).
            </p>

            <h1 className="text-primary font-extrabold text-3xl mt-8">
              Kidney transplant
            </h1>
            <p className="text-lg font-bold text-gray-700 mt-2">
              Kidney transplantation involves receiving a kidney that will make
              it possible to replace the functions that have been lost due to
              kidney failure.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-2">
              There are two types of kidney transplant in Delhi depending on the
              origin of the donor’s kidney:
            </p>

            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>
                <strong> The kidney transplant from a living donor:</strong> In
                this case, the donors are usually relatives of the sick person:
                spouse, parents, siblings or someone close to the family. The
                advantage of this type of transplant is that it can be performed
                when the kidney disease is already highly evolved without
                needing even dialysis.
              </li>
              <li>
                <strong> Kidney transplant from cadaver donor:</strong> In this
                case the donor is deceased, and the recipient can hardly be
                transplanted before having dialysis for a certain period of
                time, whose duration will depend on the clinical characteristics
                of the patient, the blood group and age. The patient is included
                in a waiting list for a transplant, so that, at the time that a
                donation occurs, he can receive the kidney most suited to his
                characteristics.
              </li>
            </ul>

            <p className="text-lg font-bold text-gray-700 mt-2">
              Before performing the transplant, an exhaustive study of the
              patient with chronic kidney disease is performed to rule out
              medical situations that discourage it. Keep in mind that 45 people
              out of 100 (45%) cannot undergo a kidney transplant for medical
              reasons.
            </p>
            <p className="text-lg font-bold text-gray-700 mt-2">
              Before performing the transplant, an exhaustive study of the
              patient with chronic kidney disease is performed to rule out
              medical situations that discourage it. Keep in mind that 45 people
              out of 100 (45%) cannot undergo a kidney transplant for medical
              reasons.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-2">
              Patients with chronic kidney disease are included in a waiting
              list for transplants, during which period they must decide what
              type of dialysis they want to undergo hemodialysis or peritoneal
              dialysis.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-2">
              Approximately 33 people out of every 100 who undergo dialysis are
              on the waiting list for a transplant. Of those 33 people, around
              15 will receive the transplant.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-2">
              After renal transplantation, the patient must strictly follow a
              lifelong treatment to avoid rejection of the kidney
              (immunosuppressants) and make periodic visits to kidney specialist
              in Delhi to ensure the proper functioning of the kidney and adjust
              the medication. according to the results of the analyses.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-2">
              Sometimes, the transplanted kidney does not fulfill its function.
              On average, approximately 50 out of 100 people (50%) who have
              received a kidney from a cadaveric donor, the transplanted organ
              works for 15 years. In about 60 people out of every 100 (60%) who
              have received a kidney from a living donor, the transplanted
              kidney works an average of 15 years. People who suffer a
              transplanted kidney failure should decide between receiving
              another transplant, undergoing dialysis or conservative treatment.
            </p>

            <h1 className="text-primary font-extrabold text-3xl mt-8">
              Dialysis
            </h1>

            <p className="text-lg font-bold text-gray-700 mt-1">
              The dialysis is a procedure used to replace part of the function
              of the kidneys. The patient receiving dialysis should combine it
              with other medications that suppress the functions of the kidney
              such as erythropoietin and vitamin D.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-1">
              There are two types of dialysis (hemodialysis and peritoneal
              dialysis) that the patient should choose freely if there is no
              absolute contraindication for one modality or another.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-1">
              The dialysis (in whatever form) is a treatment that should be done
              for life, unless renal function is restored, rare, or when
              accessing a successful kidney transplant situation.
            </p>

            <h1 className="text-primary font-extrabold text-3xl mt-2">
              Conservative treatment of Chronic Renal Failure
            </h1>

            <p className="text-lg font-bold text-gray-700 mt-1">
              Conservative treatment is a plan used to treat the symptoms of
              end-stage renal disease with drugs, changes in lifestyle and other
              treatments.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-1">
              That is, in this type of treatment, renal function is not
              replaced, dialysis is not done, and the patient’s damaged kidneys
              continue to deteriorate. In this way, the treatment allows the
              kidneys to continue functioning as long as the kidney disease
              allows.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-1">
              The decision to opt for conservative treatment must be a decision
              agreed with the person and the family.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-1">
              People who are offered conservative treatment, instead of a
              substitute treatment, have other medical problems or a delicate
              state of health such as being elderly, suffering from other
              serious or severely disabling diseases that offer a poor prognosis
              or have a life expectancy not very long.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-1">
              It is possible that in these circumstances these people consider
              insufficient the benefits of dialysis for the management of their
              disease compared to the effort involved.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-1">
              Numerous studies show that in patients with these characteristics,
              dialysis does not improve the prognosis, and with a conservative
              treatment they can improve their quality of life in the sense of
              having a greater control of hospital admissions; the number of
              emergency visits due to complications is reduced and invasive
              procedures with venous punctures or catheter placements are not
              performed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidneyFailure;
