import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img,setImg] = useState("");

  const SetImage = (e) => {
     setImg(e.target.value) ;
     console.log(e.target.value);
  }

  return (
    <>
      <div
        style={{
          width: "50%",
          height: "auto",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
        }}
      >
        <input
          type="text"
          placeholder="search anything"
          style={{
            margin: "30px 0",
            padding: "5px 10px",
            borderRadius: "5px",
            fontFamily: "monospace",
            border: "2px solid black",
          }}
          value={img}
          onChange={SetImage}
        />
      </div>
      <div
        style={{
          width: "50%",
          height: "auto",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
        }}
      >
        {img === "" ? null : <Sresult srch={img} />}
      </div>
    </>
  );
};

export default Search;
