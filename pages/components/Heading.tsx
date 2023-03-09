import React from "react";

interface Props {
  title: string;
  size: string;
}

const Heading: React.FC<Props> = ({ title, size }) => {
  return (
    <>
      <h2 className={`${size} text-center font-bold`}>{title}</h2>
    </>
  );
};

export default Heading;
