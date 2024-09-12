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
