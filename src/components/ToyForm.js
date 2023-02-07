import React from "react";

function ToyForm(props) {
  function handleSubmit(event) {
    event.preventDefault()
    const newToy = {
      name: event.target.name.value,
      image: event.target.image.value
    }
    
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(newToy)
    })
      .then(resp => resp.json())
      .catch(error => console.log(error))
    
    props.setToys(prev => [...prev, newToy])
  }

  return (
    <div className="container">
      <form 
        className="add-toy-form" 
        onSubmit={handleSubmit}>
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
