import React from "react";
import TestimonialData from "./TestimonialData";
import { TestiData } from "../data";

// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
  // Match slug from the dataset link
  const content = TestiData.find(
    (item) => item.link.split("/").pop() === params.link
  );

  if (!content) {
    return {
      title: "Testimonial Not Found",
      description: "No testimonial found for the given link.",
      keywords: [],
    };
  }

  return {
    title: content.meta_title,
    description: content.meta_desc,
    keywords: content.keyword,
  };
}

const Page = ({ params }) => {
  return (
    <div>
      <TestimonialData link={params.link} />
    </div>
  );
};

export default Page;
