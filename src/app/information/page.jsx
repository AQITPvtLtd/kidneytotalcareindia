import React from "react";
import Information from "./Information";


export const metadata = {
  title: "Patient Information – Kidney Health, Dialysis & Transplant by Dr. Sunil Prakash",
  description:
    "Learn about kidney health, dialysis, transplantation, renal replacement therapy, CKD care tips, and diet guidance from Dr. Sunil Prakash, expert nephrologist in Delhi.",
  keywords: [
    "kidney health information",
    "kidney functions",
    "dialysis types",
    "kidney transplantation",
    "CKD patient care",
    "renal replacement therapy",
    "kidney disease diagnosis",
    "kidney diet tips",
    "nephrologist in Delhi",
    "kidney treatment guidance",
  ],
};

const page = () => {
  return (
    <div>
      <Information />
    </div>
  );
};

export default page;
