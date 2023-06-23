import React, { useState } from 'react'
import './GetTimeApp' ;

function GetTimeApp() {
  // get time when page reload
  const [currTime, setTime] = useState(new Date().toLocaleTimeString());
  
  // get current time after clicking on button
  const getCurrTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div className="container">
      <h1>Get Time App</h1>
      <div className="counter">
        <div id="counter-value">{currTime}</div>
      </div>
      <button id="reset" onClick={getCurrTime}>GetTime</button>
    </div>
  );
}

export default GetTimeApp;