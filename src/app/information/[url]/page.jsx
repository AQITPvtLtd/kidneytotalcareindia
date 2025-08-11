import React from "react";
import InformationData from "./InformationData";
import { Infodata } from "../data";

export async function generateMetadata({ params }) {
  const content = Infodata.find(
    (item) => item.url.split("/").pop() === params.url
  );

  if (!content) {
    return {
      title: "Not Found",
      description: "",
      keywords: [],
    };
  }

  return {
    title: content.meta_title,
    description: content.meta_desc,
    keywords: content.keyword,
  };
}

const page = ({ params }) => {
  const url = params.url;
  return (
    <div>
      <InformationData url={url} />
    </div>
  );
};

export default page;
