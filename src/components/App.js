import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // GET all toy data from server and save in state
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(toyArray => setToys(toyArray))
  }, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm setToys={setToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} />
    </>
  );
}

export default App;
