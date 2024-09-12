import Image from "next/image";
import React from "react";
import Link from "next/link";

const Treatments = () => {
  return (
    <div>
      <div className="mt-14 mb-7">
        <h1 className="text-3xl font-bold text-center">
          Treatment Offered By Best Kidney Specialist in Delhi
        </h1>
        <div className="lg:grid grid-cols-3 lg:mx-20 mx-4 gap-x-10 mt-10">
          <Link
            href="/"
            className="bg-white lg:border rounded-3xl hover:scale-105 transform duration-300 hover:bg-skyblue/20"
          >
            <Image
              src="/services/kidney-transplant.png"
              width={1000}
              height={1000}
              className="w-full rounded-tl-3xl rounded-tr-3xl"
              alt="services"
            />
            <div className="p-3 bg-primary text-white bg-opacity-70">
              <h1 className="font-bold text-xl text-center">
                Kidney Transplantation
              </h1>
            </div>
            <div className="p-3">
              <p className="leading-relaxed">
                Each year, organ and tissue donation saves many lives in India.
                At Kidney Total Care India, all patients are considered for
                transplantation, but we inform those who are not suitable for
                kidney transplantation for any reason. There are some risks
                involved in transplanting a kidney such as the donor can have
                Stocks, bleeding, blood clots, heart attack, infection,
                pneumonia or other problems, so we take intensive care while
                transplanting a kidney.
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="bg-white lg:border rounded-3xl hover:scale-105 transform duration-300 hover:bg-skyblue/20 mt-5 lg:mt-0"
          >
            <Image
              src="/services/dialysis.png"
              width={1000}
              height={1000}
              className="w-full rounded-tl-3xl rounded-tr-3xl"
              alt="services"
            />
            <div className="p-3 bg-primary text-white bg-opacity-70">
              <h1 className="font-bold text-xl text-center">Dialysis</h1>
            </div>
            <div className="p-3">
              <p className="leading-relaxed">
                In human body, kidneys are two bean-shaped organs which are
                present on each side of spine. Their function is to remove waste
                from human body and also it levels out our blood pressure plus
                keeps our bones strong. A nephrologist suggests a patient for
                dialysis, when his/her both kidneys stop functioning. The
                patients having chronic kidney disease is suggested for dialysis
                and after some time they must be advised for kidney transplant.
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="bg-white lg:border rounded-3xl hover:scale-105 transform duration-300 hover:bg-skyblue/20 mt-5 lg:mt-0"
          >
            <Image
              src="/services/home-dialysis.png"
              width={1000}
              height={1000}
              className="w-full rounded-tl-3xl rounded-tr-3xl"
              alt="home-dialysis"
            />
            <div className="p-3 bg-primary text-white bg-opacity-70">
              <h1 className="font-bold text-xl text-center">
                Home Dialysis Treatments
              </h1>
            </div>
            <div className="p-3">
              <p className="leading-relaxed">
                If you’re on dialysis, you have three main approaches first is
                Intermittent hemodialysis (IHD), second is Peritoneal dialysis
                (PD) and last one is Continuous renal replacement therapies
                (CRRT). You may go for any of the three, but many experts agree
                that home dialysis either peritoneal or hemodialysis is the best
                option for treating kidney failure. During dialysis, you can
                live full and active life. At Kidney Total Care India, we offer
                home dialysis treatment at reasonable cost in India.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
