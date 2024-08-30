import React from "react";
import Banner from "@/components/homepage/Banner";
import Who from "@/components/homepage/Who";
import Features from "@/components/homepage/Features";
import Specializations from "@/components/homepage/Specializations";
import Treatments from "@/components/homepage/Treatments";
import FAQs from "@/components/homepage/FAQs";
import Blogs from "@/components/homepage/Blogs";

const page = () => {
  return (
    <div>
      <Banner />
      <Who />
      <Features />
      <Specializations />
      <Treatments />
      <FAQs />
      <Blogs />
    </div>
  );
};

export default page;
