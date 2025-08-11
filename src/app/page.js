import React from "react";
import Banner from "@/components/homepage/Banner";
import Who from "@/components/homepage/Who";
import Features from "@/components/homepage/Features";
import Specializations from "@/components/homepage/Specializations";
import Treatments from "@/components/homepage/Treatments";
import FAQs from "@/components/homepage/FAQs";
import Blogs from "@/components/homepage/Blogs";
import Education from "@/components/homepage/Education";
import Awards from "@/components/homepage/Awards";
import Review from "@/components/homepage/Review";
import Experience from "@/components/homepage/Experience";

export const metadata = {
  title: "Dr. Sunil Prakash – Best Nephrologist in Delhi for Expert Kidney Care",
  description:
    "Looking for the best nephrologist in Delhi? Consult Dr. Sunil Prakash for expert kidney care backed by 40 years of experience and a proven track record in nephrology.",
  keywords: [
    "Dr. Sunil Prakash",
    "best nephrologist in Delhi",
    "kidney specialist in Delhi",
    "top nephrologist Delhi",
    "experienced kidney doctor",
    "dialysis expert Delhi",
    "kidney care specialist",
    "nephrology expert India",
    "senior nephrologist Delhi",
    "best kidney doctor in Delhi",
  ],
};

const page = () => {
  return (
    <div>
      <Banner />
      <Who />
      <Education />
      <Awards />
      <Features />
      <Experience />
      <Specializations />
      <Treatments />
      <Review />
      <FAQs />
      <Blogs />
    </div>
  );
};

export default page;
