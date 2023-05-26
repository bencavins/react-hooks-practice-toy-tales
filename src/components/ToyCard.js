import React from "react";

function ToyCard({ id, name, image, likes, setToys }) {

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(data => setToys(prevToys => {
      return prevToys.filter(toy => toy.id !== id)
    }))
  }

  function handleLike() {
    const newLikes = likes + 1
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        'likes': newLikes
      })
    })
    .then(resp => resp.json())
    .then(editedToy => setToys(prevToys => {
      return prevToys.map(toy => {
        if (toy.id === id) {
          // replace with editedToy
          return editedToy
        } else {
          // copy the old toy
          return toy
        }
      })
    }))
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
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
