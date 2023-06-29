import React, { useState } from "react";
import "./FormExample.css";

function FormExample2() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [fullName, setFullName] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };
  const updateLname = (event) => {
    setLname(event.target.value);
  };
  const onSubmits = (event) => {
    event.preventDefault() ;
    setFullName(name+" "+lname);
  };
  return (
    <div className="main">
      <div class="center">
      <form onSubmit={onSubmits}>
            <h1>Hello, {fullName}</h1>
            <div class="inputbox">
            <input
                type="text"
                required="required"
                onChange={updateName}
                value={name}
            />
            <span>First Name</span>
            </div>
            <div class="inputbox">
            <input
                type="text"
                required="required"
                onChange={updateLname}
                value={lname}
            />
            <span>Last Name</span>
            </div>
            <div class="inputbox">
            <input type="submit" />
            </div>
      </form>
      </div>
    </div>
  );
}

export default FormExample2;
