import React, { createContext } from 'react';
import ComC from './ComC';

const firtName = createContext() ;
const lastName = createContext() ;

function WithContext() {
  return (
    <firtName.Provider value={"Rahul"}>
     <lastName.Provider value={"Bhati"}>
          <ComC/>
     </lastName.Provider>
    </firtName.Provider>
  )
}

export default WithContext;
export { firtName ,lastName} ;


// context ko custom component ki tarah yaad kr sakte h jisme data send krne k liye provider or lene k liye consumer ka use krte h.
// context m 3 steps h
// 1. createContext() 
// 2. provider
// 3. consumer

// ek page ya file m ekk hi default export hota h baki object k rup m send hote h
// provider : 
//             value property h provider ki
//             or provider m component uske ander pass hota h

// consumer : 
//             consumer m component pass nhi hote h balki ye sirf function ko samjta h