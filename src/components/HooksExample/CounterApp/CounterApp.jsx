import React, { useState } from 'react'
import './CounterApp.css' ;

function CounterApp() {
  const [count , setCount] = useState(0) ;
  // for Increment The value of the counter
  const incNum = () => {
    setCount(count + 1) ;
  }
  // for Decrement The value of the counter
  const decNum = () => {
    setCount(count - 1);
  };
  // for Reset The value of the counter
  const resetNum = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter">
        <button id="increment-btn" onClick={incNum}>
          +
        </button>
        <div id="counter-value">{count}</div>
        <button id="decrement-btn" onClick={decNum}>
          -
        </button>
      </div>
      <button id="reset" onClick={resetNum}>
        Reset
      </button>
    </div>
  );
}

export default CounterApp