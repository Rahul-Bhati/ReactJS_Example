import React ,{ useState } from 'react'
import './FormExample.css'

function FormExample() {
  const [name,setName] = useState('');
  const [fullName, setFullName] = useState("");

  const updateName = (event) => {
     setName(event.target.value) ;
  };
  const onSubmit = () => {
     setFullName(name);
  };
  return (
    <div class="center">
      <h1>Hello, {fullName}</h1>
      <div class="inputbox">
        <input type="text" required="required" onChange={updateName} value={name}/>
        {/* 
          <input type="text" required="required" value=""/> 
          // value attr likhne per input field m hum kuch nhi likh sakte h kyoki ye "Controlled Componrnt" h jo react se controll hota h.
          Controlled Components :=> An input form element whose value controlled by react
               mutable state h jise useState() se change kr sakte h.

          Solution :-
          <input type="text" required="required" defaultValue=""/>  // defaultValue likhne per hum likh sakte h.
          Ya value likho hi mat.

          Per sabse accha h ki onChange() event ka use krna h kyoki input field m use krte h.

          "Single Source of Truth" hota h. matlb value={name} jo change ho rha h ko dikhata h jab him val enter krte h input input field m
         */}
        <span>Name</span>
      </div>
      <div class="inputbox">
        <input type="button" value="submit" onClick={onSubmit}/>
      </div>
    </div>
  );
}

export default FormExample