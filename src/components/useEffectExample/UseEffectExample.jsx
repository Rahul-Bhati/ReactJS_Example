import React, { useEffect, useState } from "react";

function UseEffectExample() {
  // Always called when ever page is updated or render called
  // useEffect(() => {
  //   alert("Always called when render called.");
  // });

  const [num,setNum] = useState(0) ;

  // called when num state changed
  useEffect(() => {
    alert(num)
  },[num]);

  return (
    <>
        <button style={{width:'10%'}} onClick={() => setNum(num+1)}>click me {num}</button>

    </>
  );
}

export default UseEffectExample