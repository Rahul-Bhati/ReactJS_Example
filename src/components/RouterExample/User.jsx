import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

function User() {
  // useParams exaple
  const { fname, lname } = useParams();

  // useLocation example
  const loaction = useLocation();
  // console.log(loaction)

  // ueHistory example
  const history = useNavigate();
  console.log(history);
  return (
    <>
      <div style={{ margin: "10% 20%" }}>
        <h1>User {fname + " " + lname} is Here!😉 </h1>
        {/* <p>{location.pathname}</p> */}
        {loaction.pathname === `/user/rahul/bhati` ? (
          <button
            style={{ borderRadius: "0", width: "50vh" }}
            onClick={() => alert("You are awesome 😎!")}
          >
            Click Me!
          </button>
        ) : null}{" "}
        <br></br>
        <br />
        {loaction.pathname === `/user/rahul/bhati` ? (
          <button
            style={{ borderRadius: "0", width: "50vh" }}
            onClick={() => history(-1)}
          >
            Go Back
          </button>
        ) : null}
        <br></br>
        <br />
        {loaction.pathname === `/user/rahul/bhati` ? (
          <button
            style={{ borderRadius: "0", width: "50vh" }}
            onClick={() => history("/")}
          >
            Home
          </button>
        ) : null}
      </div>
    </>
  );
}

export default User;
