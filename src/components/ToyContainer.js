import React, {useState, useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({setToys, toys}) {
  

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(resp => resp.json())
      .then(data => setToys(data))
  }, [])

  return (
    <div id="toy-collection">
      {toys.map(toy => <ToyCard toy={toy} key={toy.id} setToys={setToys} />)}
    </div>
  );
}

export default ToyContainer;
