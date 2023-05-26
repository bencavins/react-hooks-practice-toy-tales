import React from "react";

function ToyForm({ setToys }) {

  function handleSubmit(event) {

    // prevent page refresh
    event.preventDefault()

    // grab toy info from the form
    const newToy = {
      'name': event.target.name.value,
      'image': event.target.image.value,
      'likes': 0
    }
    
    // send new toy to the server
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(resp => resp.json())
    .then(newToyData => setToys(prevToys => {
      // copy existing toys and add our new one
      return [...prevToys, newToyData]
    }))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
