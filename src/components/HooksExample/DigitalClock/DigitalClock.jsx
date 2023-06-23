import React, { useState } from 'react' ;
import './DigitalClock.css' ;

function DigitalClock() { 
  const [time, setTime] = useState(new Date().toLocaleTimeString()) ;

  setInterval(() => {
     setTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <>
     <div className="App">
          <h1 className='clock'>{time}</h1>
     </div>
    </>
  )
}

export default DigitalClock