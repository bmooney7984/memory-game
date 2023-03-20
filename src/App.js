import logo from './logo.svg';
import './App.css';
import { Card } from './Card.js'
import { useState } from 'react'
import { useEffect } from 'react'

import lake from './images/the-lake.jpg'
import scythe from './images/the-scythe.jpg'
import veldt from './images/the-veldt.jpg'
import wind from './images/the-wind.jpg'
import balloons from './images/the-fire-balloons.jpg'
import rain from './images/the-long-rain.jpg'
import fog from './images/the-fog-horn.webp'
import upstairs from './images/the-man-upstairs.jpg'
import screaming from './images/the-screaming-woman.jpg'
import waits from './images/the-one-who-waits.jpg'
import game from './images/the-big-black-and-white-game.jpg'
import fruit from './images/the-fruit-at-the-bottom-of-the-bowl.jpg'

function App() {
  const storyList = [
    {id: 0, title: "The Lake", image: lake, text: '"Hurry, man, open it!” I cried. “I better not do that,” he said. Then perhaps he saw the way my face must have looked.'},
    {id: 1, title: "The Scythe", image: scythe, text: "It was instinct. Illogical as lightning striking and not hurting. Each day the grain must be cut. It had to be cut. Why? Well, it just did, that was all."},
    {id: 2, title: "The Veldt", image: veldt, text: "Too much of anything isn’t good for anyone. And it was clearly indicated that the children had been spending a little too much time on Africa. That sun. He could feel it on his neck, still, like a hot paw. And the lions. And the smell of blood."},
    {id: 3, title: "The Wind", image: wind, text: '"A hot wind suddenly whipped salt and sand into our eyes and nostrils, and he turned to me with a strange, haunted look. The substance of the winds, he said, is too thin for human eyes. Their written language is too difficult for human minds, and their spoken language mostly too faint for human ears. Not for my ears, though."'},
    {id: 4, title: "The Fire Balloons", image: balloons, text: '"We have left sin behind, Father Peregrine, and it is burned like the leaves in the autumn, and it is gone like the soiled snow of an evil winter, and it is gone like the sexual flowers of a red-and-yellow spring, and it is gone like the panting nights of hottest summer, and our season is temperate and our clime is rich in thought.”'},
    {id: 5, title: "The Long Rain", image: rain, text: "The rain hit his face. He covered his face with his hands. The rain hit his neck. He turned over on his stomach in the mud, on the rubbery plants, and the rain hit his back and hit his legs. Suddenly he leaped up and began to brush the water from himself. A thousand hands were touching him and he no longer wanted to be touched."},
    {id: 6, title: "The Fog Horn", image: fog, text: "A cry came across a million years of water and mist. A cry so anguished and alone that it shuddered in my head and my body."},
    {id: 7, title: "The Man Upstairs", image: upstairs, text: "He stood looking up at the stranger. This room was no longer the same, but changed indefinably because this man, quick as a lightning bolt, had shed his light about it."},
    {id: 8, title: "The Screaming Woman", image: screaming, text: '“Mama,” I said. “Don’t stand there with the ice cream,” said Mama. “But, Mama,” I said. “Put it in the icebox,” she said. “Listen, Mama, there’s a Screaming Woman in the empty lot.” “And wash your hands,” said Mama. “She was screaming and screaming…” “Let’s see, now, salt and pepper,” said Mama, far away.'},
    {id: 9, title: "The One Who Waits", image: waits, text: '“Captain, you’d better get in out of the sun, you don’t look too well, sir.” “Yes,” I say. “Help,” I say. “What, sir?” “I didn’t say anything.” “You said ‘Help,’ sir.” “Did I, Matthews, did I?”'},
    {id: 10, title: "The Big Black and White Game", image: game, text: "I guess everybody saw what was happening. They saw how the white men looked like senators in sun suits. And they admired the graceful unawareness of the colored men. And, as is always the case, that admiration turned to envy, to jealousy, to irritation."},
    {id: 11, title: "The Fruit at the Bottom of the Bowl", image: fruit, text:'"Where are you going now?" "The table." "You polished the table." "The bowl, the fruit bowl!" "You polished the fruit bowl." "The fruit!" "You polished the fruit." "Not the fruit at the bottom of the bowl!"'}
  ]

  const [storyOrder, setStoryOrder] = useState(storyList)
  const [clicked, setClicked] = useState([false, false, false, false, false, false, false, false, false, false, false, false])
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  useEffect(shuffle, [])

  function scoreUp() {
    setCurrentScore(currentScore + 1)
  }

  function clearClicks() {
    setClicked([false, false, false, false, false, false, false, false, false, false, false, false])
  }

  function recordClick(id) {
    setClicked(clicked.map(function(boolean, index) {
      if (index == id) {
        return true
      } else {
        return boolean
      }
    }))
  }

  function updateBest() {
    if (currentScore > bestScore) {
      setBestScore(currentScore)
    }
  }

  function resetScore() {
    setCurrentScore(0)
  }

  function shuffle() {
    const newOrder = []
    let leftovers = Array.from(storyList)

    while (leftovers.length > 0) {
      const index = Math.floor(Math.random() * leftovers.length)
      const chosen = leftovers.splice(index, 1)[0]
      newOrder.push(chosen)
    }

    setStoryOrder(newOrder)
  }

  return (
    <div className="app">
      <div className="header">
        <div>
          <h1>"The" Ray Bradbury Memory Game</h1>
          <p>Don't click on the same one twice</p>
        </div>
        <div className="scores">
          <p>Current score: {currentScore}</p>
          <p>Best score: {bestScore}</p>
        </div>
      </div>
      <div className="container">
        {storyOrder.map(function(story) {
          return <Card key={story.id} id={story.id} title={story.title} image={story.image} text={story.text} clicked={clicked[story.id]} shuffle={shuffle} scoreUp={scoreUp} clearClicks={clearClicks} recordClick={recordClick} updateBest={updateBest} resetScore={resetScore} />
        })}
      </div>
    </div>
  );
}

export default App;
