import React from "react";

function ToyCard(props) {
  function handleDeleteClick(event) {
    fetch(`http://localhost:3001/toys/${props.id}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .catch(error => console.log(error))
    
    props.setToys(prev => {
      return prev.filter(toy => {
        return toy.id !== props.id
      })
    })
  }

  function handleLikeClick(event) {
    fetch(`http://localhost:3001/toys/${props.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes: props.likes + 1})
    })
      .then(resp => resp.json())
      .then(updated => {
        props.setToys(prev => prev.map(toy => {
          if (toy.id === props.id) {
            return updated
          } else {
            return toy
          }
        }))
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img
        src={props.image}
        alt={props.name}
        className="toy-avatar"
      />
      <p>{props.likes} Likes </p>
      <button 
        className="like-btn"
        onClick={handleLikeClick}>Like {"<3"}</button>
      <button 
        className="del-btn"
        onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
