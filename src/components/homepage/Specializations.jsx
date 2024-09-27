import React from "react";

const Specializations = () => {
  return (
    <div className="mb-10">
      <div className="mt-14 mb-7">
        <h1 className="text-3xl font-bold text-center">
          Dr. Sunil Prakash&apos;s Specializations
        </h1>
        <p className="text-center text-xl">
          Dr. Sunil Prakash specializes in the diagnosis and treatment of
          various kidney-related conditions, including:
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-x-3 mx-5 lg:mx-20">
        <div className="bg-primary shadow-md shadow-primary text-white border-skyblue border-2 px-4 py-4 text-center mb-3">
          Chronic Kidney Disease (CKD)
        </div>
        <div className="bg-primary text-white shadow-md shadow-primary border-skyblue border-2 px-4 py-4 mb-3 text-center">
          Diabetes Mellitus
        </div>
        <div className="bg-primary text-white shadow-md shadow-primary border-skyblue border-2 px-4 py-4 mb-3 text-center">
          Acute Kidney Injury (AKI)
        </div>
        <div className="bg-primary text-white shadow-md shadow-primary border-skyblue border-2 px-4 py-4 mb-3 text-center">
          Polycystic Kidney Disease (PKD)
        </div>
        <div className="bg-primary text-white shadow-md shadow-primary border-skyblue border-2 px-4 py-4 text-center mb-3">
          Glomerulonephritis
        </div>
        <div className="bg-primary text-white shadow-md shadow-primary border-skyblue border-2 px-4 py-4 mb-3 text-center">
          Nephrotic Syndrome
        </div>
        <div className="bg-primary text-white shadow-md shadow-primary border-skyblue border-2 px-4 py-4 mb-3 text-center">
          Hypertension
        </div>
        <div className="bg-primary text-white shadow-md shadow-primary border-skyblue border-2 px-4 py-4 text-center mb-3">
          Kidney Stones
        </div>
        <div className="bg-primary text-white shadow-md shadow-primary border-skyblue border-2 px-4 py-4 text-center mb-3">
          Prostate Enlargement
        </div>
        <div className="bg-primary text-white shadow-md shadow-primary border-skyblue border-2 px-4 py-4 mb-3 text-center">
          Hemodialysis
        </div>
        <div className="bg-primary text-white shadow-md shadow-primary border-skyblue border-2 px-4 py-4 mb-3 text-center">
          Peritoneal Dialysis
        </div>
        <div className="bg-primary text-white shadow-md shadow-primary border-skyblue border-2 px-4 py-4 mb-3 text-center">
          Home Dialysis
        </div>
        <div className="bg-primary text-white shadow-md shadow-primary border-skyblue border-2 px-4 py-4 mb-3 text-center">
          Renal Transplantation
        </div>
      </div>
    </div>
  );
};

export default Specializations;
