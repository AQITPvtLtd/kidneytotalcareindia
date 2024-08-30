const TagButton = ({ href = "#0", text }) => {
  return (
    <a
      href={href}
      className="bg-gray-light mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm duration-300 bg-primary text-white dark:bg-[#2C303B] "
    >
      {text}
    </a>
  );
};

export default TagButton;
