import React from "react";

const Sresult = (props) => {
  const img = `https://source.unsplash.com/200x200/?${props.srch}`;
  return (
    <>
      <img src={img} alt="image" />
    </>
  );
};

export default Sresult;
