//To implement type of sorting you want remove comments in Const birds.
// Please do not forget to comment other two return types

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementBird, addBird } from './store/birds/birds'
import './App.css'

function App() {
  const [birdName, setBird] = useState('')
  const birds = [...useSelector((state) => state.birds)].sort((a, b) => {
    // remove comments below  to do Sorting by name (a)
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1

    // remove comments below  to do  Sorting by view count descending(b)
    // return a.views > b.views ? 1 : -1

    //  remove comments below  to do Sorting by view count ascending(c)
    // return a.views < b.views ? 1 : -1
  })
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addBird(birdName))
    setBird('')
  }

  return (
    <div className='App'>
      <h1>Bird List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Add Bird</p>
          <input
            type='text'
            onChange={(e) => setBird(e.target.value)}
            value={birdName}
          />
        </label>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>

      <ul>
        {birds.map((bird) => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>
              Views: {bird.views}
              <button onClick={() => dispatch(incrementBird(bird.name))}>
                <span role='img' aria-label='add'>
                  ➕
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
