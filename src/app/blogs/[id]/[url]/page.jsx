import React from "react";
import DetailedBlog from "./DetailedBlog";

const page = ({ params }) => {
  const { id, url } = params;
  // console.log({ id, url });
  return (
    <div>
      <DetailedBlog id={id} url={url} />
    </div>
  );
};

export default page;
