import React from "react";

function ToyCard({ id, name, image, likes, setToys }) {
  function handleDelete() {
    // filter out the toy we are deleting (based on id)
    setToys(prevToys => prevToys.filter(toy => {
      return toy.id !== id
    }))

    // persist to json-sever db
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  function handleLike() {
    setToys(prevToys => prevToys.map(toy => {
      // find the toy with the matching id
      if (toy.id === id) {
        // increment likes
        toy.likes++
        return toy
      } else {
        return toy
      }
    }))

    // send update to the db
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'likes': likes + 1})
    })
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button 
        className="like-btn"
        onClick={handleLike}>Like {"<3"}</button>
      <button 
        className="del-btn"
        onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
