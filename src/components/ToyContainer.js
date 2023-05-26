import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  return (
    <div id="toy-collection">
      {toys.map(toy => <ToyCard key={toy.id} {...toy} setToys={setToys} />)}
      {/* {toys.map(toy => <ToyCard name={toy.name} image={toy.image} likes={toy.likes} />)} */}
    </div>
  );
}

export default ToyContainer;
