import React, {useState} from "react";

function ToyForm({setToys}) {
  const blankForm = {
    name: '',
    image: ''
  }
  const [toyForm, setToyForm] = useState(blankForm)

  function handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toyForm)
    })
      .then(resp => resp.json())
      .then(newToy => setToys(toys => [...toys, newToy]))
    setToyForm(blankForm)
  }

  function handleFormChange(event) {
    const {name, value} = event.target
    const newFormData = {...toyForm, [name]: value}
    setToyForm(newFormData)
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
          value={toyForm.name}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyForm.image}
          onChange={handleFormChange}
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
