import React from "react";

interface Props {
  title: string;
  size: string;
}

const Heading: React.FC<Props> = ({ title, size = "text-2xl" }) => {
  return (
    <>
      <h2 className={`${size} font-bold`}>{title}</h2>
    </>
  );
};

export default Heading;
