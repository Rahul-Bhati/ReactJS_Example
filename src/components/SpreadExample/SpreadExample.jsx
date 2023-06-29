import React, { useState } from "react";
import "./SpreadExample.css";

function SpreadExample() {
  // Spread example
  // use 1. in array
  //  const ar1 = ["rahul","bhati"] ;
  //  const ar2 = ["nohar","rajasthan"] ;
  //  const ar3 = [...ar1,...ar2] ;
  //  console.log(ar3);

  // use 2. Array Destructuring
  //  const ar1 = ["rahul", "bhati"];
  //  const [fname,lname] = [...ar1] ;
  //  console.log(fname+" "+lname);

  //  const ar1 = ["rahul", "bhati","nohar","rajasthan"];
  //  const [fname,...remaining] = ar1 ;
  //  console.log(fname+" "+remaining);

  // use 3. in Object
  // let ob1 = {
  //   name : "rahul", lname: "bhati",
  // }
  // let ob2 = {
  //   ...ob1, city : "nohar", district : "hanumangarh",
  // }
  // console.log(ob2);

  const [fullName, setFullName] = useState({fname:'',lname:''});

  // sabhi input fields k liye sirf ekk hi method call krege
  const update = (event) => {
    // const name = event.target.name;
    // const val = event.target.value;

    const {name,val} = event.target ;

    // useState() m previous value bhi pass hoti h jise set function use kr sakte h
    setFullName((prevVal) => {
      return {
        ...prevVal,
        [name] : val ,
      }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("submit") ;
  };
  return (
    <div className="main">
      <div class="center">
        <form onSubmit={onSubmits}>
          <h1>
            Hello, {fullName.fname} {fullName.lname}
          </h1>
          <div class="inputbox">
            <input
              type="text"
              required="required"
              onChange={update}
              name="fname"
              value={fullName.fname}
            />
            <span>First Name</span>
          </div>
          <div class="inputbox">
            <input
              type="text"
              required="required"
              name="lname"
              onChange={update}
              value={fullName.lname}
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

export default SpreadExample;
