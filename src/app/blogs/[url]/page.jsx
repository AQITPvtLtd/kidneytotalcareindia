import DetailedBlog from "./DetailedBlog";

const Page = async ({ params }) => {
  const { url } = await params;

  return (
    <div>
      <DetailedBlog url={url} />
    </div>
  );
};

export default Page;
