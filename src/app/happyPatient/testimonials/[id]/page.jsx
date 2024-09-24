import React from "react";
import TestimonialData from "./TestimonialData";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <TestimonialData id={id} />
    </div>
  );
};

export default page;
