import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer(props) {
  return (
    <div id="toy-collection">
      {props.toys.map(toy => {
        return <ToyCard
                 key={toy.id}
                 {...toy}
                 setToys={props.setToys} />
      })}
    </div>
  );
}

export default ToyContainer;
