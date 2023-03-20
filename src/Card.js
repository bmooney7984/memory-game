import './Card.css'
import { useState } from 'react'

function Card(props) {
  function handleClick() {
    if (props.clicked) {
      props.clearClicks()
      props.updateBest()
      props.resetScore()      
    } else {
      props.recordClick(props.id)
      props.scoreUp()
    }

    props.shuffle()
  }

  return (
    <div className="card" onClick={handleClick}>
      <h2>{props.title}</h2>
      <img src={props.image}></img>
      <p>{props.text}</p>
    </div>
  )
}

export { Card }
