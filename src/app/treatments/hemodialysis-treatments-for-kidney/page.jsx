import React from "react";
import Hemodialysis from "./Hemodialysis";

export const metadata = {
  title: "Hemodialysis Treatments for Kidney Failure – Hospital & Home Options",
  description:
    "Understand hemodialysis treatments for kidney failure, including hospital and home-based dialysis, fistula access, dialysis filters, and how the process replaces kidney function.",
  keywords: [
    "hemodialysis treatments",
    "kidney failure dialysis",
    "dialysis filter",
    "vascular access for dialysis",
    "arteriovenous fistula",
    "temporary dialysis catheter",
    "home hemodialysis",
    "hospital dialysis",
    "dialysis procedure",
    "hemodialysis machine",
  ],
};

const page = () => {
  return (
    <div>
      <Hemodialysis />
    </div>
  );
};

export default page;
