import React, { useState } from "react";
import "./Accordion.css";
import { questions } from "./apiData";
import ShowAccordion from './ShowAccordion';

function Accordion() {
  const [data, setData] = useState(questions) ;

  return (
    <>
     <div className="body">
          <section className="main-div">
          <h1>React Basic Question Answer</h1>  
          {data.map((currEle) => {
               const { id } = currEle;
               return <ShowAccordion key={id} {...currEle} />;
          })}
          </section>
     </div>
    </>
  );
}

export default Accordion;
