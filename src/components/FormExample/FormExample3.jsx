import React, { useState } from "react";
import "./FormExample.css";

function FormExample3() {
  const [fullName, setFullName] = useState({
    fname:'',lname:'',
  });

  // sabhi input fields k liye sirf ekk hi method call krege
  const update = (event) => {
    const name = event.target.name ;
    const val = event.target.value ;

    // useState() m previous value bhi pass hoti h jise set function use kr sakte h
    setFullName((prevVal) => {
      if(name === 'fname') {
        return {
          fname : val, lname:prevVal.lname
        }
      }
      else if(name === 'lname') {
        return {
          fname: prevVal.fname,
          lname: val,
        };
      }
    })
  };
  
  const onSubmits = (event) => {
    event.preventDefault() ;
  };
  return (
    <div className="main">
      <div class="center">
      <form onSubmit={onSubmits}>
            <h1>Hello, {fullName.fname} {fullName.lname}</h1>
            <div class="inputbox">
            <input
                type="text"
                required="required"
                onChange={update}
                name = 'fname'
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

export default FormExample3;
