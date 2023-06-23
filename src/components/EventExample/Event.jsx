import React, { useState } from 'react' ;
import './Evemt.css' ;

function Event() {
  const [name, setName] = useState("click me 😉");
  const [bg, setbg] = useState("#f2f2f2");
  
  const firstClick = () => {
     setName("Ouch!! 😵") ;
     setbg("#A0C49D");
  }
  const secondClick = () => {
    setName("Ayyo!! 😤");
    setbg("#0A6EBD");
  };

  return (
    <div className="event-container">
      <button
        className="btn"
        style={{ backgroundColor: bg }}
        onClick={firstClick}
        onDoubleClick={secondClick}
      >
        {name}
      </button>
    </div>
  );
}

export default Event;