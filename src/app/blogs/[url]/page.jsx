import React from "react";
import DetailedBlog from "./DetailedBlog";

const page = ({ params }) => {
  const url = params.url;
  return (
    <div>
      <DetailedBlog url={url} />
    </div>
  );
};

export default page;
