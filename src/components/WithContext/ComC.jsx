import React, { useContext } from "react";
import { firtName, lastName } from "./WithUseContext";

function ComC() {
  const fname = useContext(firtName);
  const lname = useContext(lastName);
  return (
    <>
          <h1>{fname + " " + lname}</h1>
    </>
  );
}

export default ComC;
