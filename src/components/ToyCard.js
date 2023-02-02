import React from "react";

function ToyCard({toy, setToys}) {

  function handleClickLike(event) {
    // Sent PATCH request
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes: toy.likes+1})
    })
      .then(resp => console.log(resp))

    // Update DOM
    setToys(prevToys => prevToys.map(prevToy => {
      if (prevToy.id === toy.id) {
        return {...prevToy, likes: prevToy.likes+1}
      } else {
        return prevToy
      }
    }))
  }

  function handleClickDelete(event) {
    // Send DELETE request
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE'
    })
      .then(resp => console.log(resp))

    // Delete toy from front end
    setToys(prevToys => prevToys.filter(prevToy => {
      return prevToy.id !== toy.id
    }))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleClickLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleClickDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
