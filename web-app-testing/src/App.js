import React, { useState } from 'react'
import Display from './Display'
import Dashboard from './Dashboard'
import './App.css'

function App() {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)
  const [fouls, setFouls] = useState(0)
  const [hits, setHits] = useState(0)

  const increment = (e) => {
    e.preventDefault()

    switch (e.target.innerText) {
      case 'BALL':
        setBalls(balls + 1)
        break
      case 'STRIKE':
        setStrikes(strikes + 1)
        break
      case 'FOUL':
        setFouls(fouls + 1)
        if (strikes < 2 && fouls <= 2) {
          setStrikes(strikes + 1)
        }
        break
      case 'HIT':
        setHits(hits + 1)
        break
      default:
        break
    }

    if (balls === 4 || strikes === 3 || hits === 1) {
      setBalls(0)
      setStrikes(0)
    }

  }

  return (
    <div className='App'>
      <h1>SPORTS TEAM</h1>
      <Display balls={balls} strikes={strikes} fouls={fouls} hits={hits} />
      <Dashboard increment={increment} />
    </div>
  )
}

export default App
