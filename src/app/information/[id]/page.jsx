import React from "react";
import InformationData from "./InformationData";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <InformationData id={id} />
    </div>
  );
};

export default page;
