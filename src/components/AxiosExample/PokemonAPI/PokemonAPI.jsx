import axios from "axios";
import React, { useState, useEffect } from "react";

function PokemonAPI() {
  const [n, setN] = useState();
  const [w, setW] = useState();

  const handleButton = () => {
    async function getData() {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
      // document.write(res);
      console.log(res.data.name);
      console.log(res.data.weight);
      setN(res.data.name);
      setW(res.data.weight);
    }
    getData();
  };

  // useEffect(() => {
  //   async function getData() {
  //     let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`);
  //     document.write(res);
  //   }
  //   getData();
  // }, [num]);
  return (
    <>
      <h1>Pokemon </h1>
      {/* <select value={num} onChange={(e) => setNum(e.target.value)}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
      </select> */}

      <p>
        Spices Name is <span style={{ color: "red" }}>{n}</span> and It's weight
        is <span style={{color:"blue"}}>{w}</span>
      </p><br></br>
      <button
        onClick={handleButton}
        style={{ borderRadius: "0", width: "100vh", justifyContent: "center" }}
      >
        Get Pokemon Data
      </button>
    </>
  );
}

export default PokemonAPI;
