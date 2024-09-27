import React from "react";
import Image from "next/image";
import { treatmentData } from "../data";
import Sidebar from "@/components/common/Sidebar";
const Kidney = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:m-16 m-8">
        <div className="lg:block hidden">
          <Sidebar data={treatmentData} />
        </div>
        <div className="col-span-2 mx-5 inline-block">
          <div className="inline-block">
            <h1 className="text-primary font-extrabold text-3xl">
              Kidney Transplantation
            </h1>
            <div className="border border-lightgreen w-full h-[2px]"></div>
          </div>
          <div>
            <h1 className="text-primary font-extrabold text-3xl mt-4">
              General aspects of surgery
            </h1>

            <p className="text-lg font-bold text-gray-700">
              A kidney transplant in Delhi is an operation to put a healthy
              kidney (from a donor) inside the body. There are two types of
              donors:
            </p>
            <ul className="list-disc list-inside text-gray-700 ">
              <li>
                <strong> Live donors: </strong> A living donor can be a
                relative, a friend, a co-worker or any other person who is
                willing to give a kidney to someone who needs it. A person only
                needs a healthy kidney to live.
              </li>
              <li>
                <strong> Dead donors:</strong> A dead donor is someone who has
                recently died.
              </li>
            </ul>

            <p className="text-lg font-bold text-gray-700 mt-4">
              You may need to have tests to see if the donated kidney is
              compatible with your type of tissue and blood type. Good tissue
              compatibility reduces the chances of your body rejecting the new
              kidney. They will also evaluate you to make sure you do not have
              significant heart or lung disease or other diseases, such as
              cancer, that could reduce your life expectancy.
            </p>

            <div className="p-3">
              {" "}
              <Image
                src="/Kidney/kidney.png"
                height={350}
                width={350}
                alt="KidneyImg"
              />
            </div>
            <p className="text-lg font-bold text-gray-700 mt-4">
              You may need to have tests to see if the donated kidney is
              compatible with your type of tissue and blood type. Good tissue
              compatibility reduces the chances of your body rejecting the new
              kidney. They will also evaluate you to make sure you do not have
              significant heart or lung disease or other diseases, such as
              cancer, that could reduce your life expectancy.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-4">
              You may need to have tests to see if the donated kidney is
              compatible with your type of tissue and blood type. Good tissue
              compatibility reduces the chances of your body rejecting the new
              kidney. They will also evaluate you to make sure you do not have
              significant heart or lung disease or other diseases, such as
              cancer, that could reduce your life expectancy.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-4">
              Kidney transplant surgery usually lasts about 3 hours. During the
              surgery, you will place the donated kidney in the lower abdomen,
              connect the blood vessels of the donated kidney to the arteries
              and veins of your body, and connect the kidney ureter donated to
              the bladder. The blood can then flow through the new kidney and
              the kidney will begin to filter and eliminate waste and produce
              urine.
            </p>

            <p className="text-lg font-bold text-gray-700 mt-4">
              The new kidney usually starts working immediately. In most cases,
              diseased or damaged kidneys are not removed unless you have a
              severe kidney infection (pyelonephritis), kidney cancer, nephrotic
              syndrome, or extremely large polycystic kidneys.
            </p>
          </div>

          <div>
            <h1 className="text-primary font-extrabold text-3xl mt-4">
              What to expect after surgery?
            </h1>

            <p className="text-lg font-bold text-gray-700 ">
              You will have to stay in the hospital for several days after
              receiving the new kidney. In some cases, it may take time for the
              new kidney to produce urine. Therefore, you may have to undergo
              dialysis and take medications, such as diuretics, to help the new
              kidney remove excess water and salt from the body.
            </p>
            <p className="text-lg font-bold text-gray-700 mt-4">
              After the surgery, you will have to take medications to suppress
              the immune system. These medications are used to help prevent the
              body from rejecting the new kidney. You should take these
              medications for the rest of your life.
            </p>
            <p className="text-lg font-bold text-gray-700 mt-4">
              During the first weeks or months after surgery, your body may try
              to reject the new kidney. This is called acute rejection and
              occurs in about 1 in 10 people in the first year after transplant.
              Most of the time, acute rejection can be treated with medications
              to prevent rejection (immunosuppressants).
            </p>
            <p className="text-lg font-bold text-gray-700 mt-4">
              Chronic rejection (also known as the chronic failure of
              allotransplantation) is a gradual and progressive process of loss
              of renal function and can occur many months to several years after
              surgery. The specialists do not fully understand the cause of
              chronic rejection. There is no treatment for chronic rejection.
              Most people return to dialysis or receive a new transplant.
            </p>
          </div>

          <div>
            <h1 className="text-primary font-extrabold text-3xl mt-4">
              Why is it done?
            </h1>

            <p className="text-lg font-bold text-gray-700 ">
              Kidney transplant in Delhi is done so that a healthy kidney
              (kidney of a donor) can do what your sick kidney can no longer do.
              Kidney transplant is used when you have severe chronic kidney
              disease (kidney failure) that cannot be reversed with any other
              treatment method. You will not be able to have this surgery if you
              have an active infection, another life-threatening illness such as
              cancer, or severe heart or lung disease.
            </p>

            <h1 className="text-primary font-extrabold text-3xl mt-4">
              Effectiveness
            </h1>

            <p className="text-lg font-bold text-gray-700 ">
              If you have severe chronic kidney disease and opt for a kidney
              transplant, you may be able to live longer than if you choose to
              treat your kidney disease with dialysis only.
            </p>
            <p className="text-lg font-bold text-gray-700 mt-4">
              In the past, transplants using a kidney from a first-degree
              relative, such as their father, mother, brother or sister, were
              the most successful. But thanks to modern medicines to prevent
              rejection, the kidneys of people who are not related to you also
              work well. Transplants from living donors or from dead donors can
              be successful.
            </p>

            <h1 className="text-primary font-extrabold text-3xl mt-4">Risks</h1>
            <p className="text-lg font-bold text-gray-700 ">
              The risks of having a kidney transplant include:
            </p>
            <ul className="list-disc list-inside text-gray-700 ">
              <li>Rejection of the new kidney.</li>
              <li>Serious infection</li>
              <li>Bleeding</li>
              <li>Reaction to the anesthesia used for surgery.</li>
              <li>Failure of the donated kidney.</li>
            </ul>
          </div>

          <div>
            <h1 className="text-primary font-extrabold text-3xl mt-4">
              To think
            </h1>
            <p className="text-lg font-bold text-gray-700 ">
              A kidney transplant may be a better treatment for you than
              dialysis since survival rates are better after transplant. You can
              also live a more normal life because you will not have to undergo
              dialysis. Although a kidney transplant is an expensive procedure,
              it can be less expensive than long-term dialysis treatments.
            </p>
            <p className="text-lg font-bold text-gray-700 mt-4">
              There is often a long wait before receiving a kidney from a donor.
              And there is no guarantee that the transplant will be successful.
              There are fewer complications in people who are good candidates
              for surgery and who do not have other serious medical conditions
              that can limit their life expectancies, such as unstable coronary
              artery disease or cancer.
            </p>
            <p className="text-lg font-bold text-gray-700 mt-4">
              Not all people can have a kidney transplant. In general, you will
              not be able to have a kidney transplant if you have an active
              infection or other life-threatening illness, such as cancer, or
              severe heart or lung disease.
            </p>
            <p className="text-lg font-bold text-gray-700 mt-4">
              After having a kidney transplant, you will need to take
              medications that suppress the immune system (anti-rejection drugs
              or immunosuppressants) to help prevent the body from rejecting the
              new kidney. You should take these medications for the rest of your
              life. Since these medications weaken the immune system, you will
              be at increased risk of serious infections. There is also the
              possibility that your body still rejects the new kidney, even if
              you take these medications. If this happens, you will have to
              start dialysis and may have to wait for another kidney transplant.
            </p>
            <p className="text-lg font-bold text-gray-700 mt-4">
              Immunosuppressants also increase the risk of other diseases, such
              as skin cancer and lymphoma. You will have an increased risk of
              diabetes, high blood pressure, heart disease, cataracts, and liver
              inflammation (cirrhosis) if you take these medications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kidney;
