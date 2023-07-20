import React, { useState } from "react"
import "./Tweet.css"

function Tweet(props) {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const { body, id } = props
  const date = new Date().toLocaleDateString() // Today's date

  return (
    <>
      <div className="card">
        <h3 className="username">
          @user{id} | on {date}
        </h3>
        <p>{body}</p>
        <div className="counter-tab">
          <div className="like">Likes: {counter}</div>
          <button onClick={increment}>+1</button>{" "}
          <button onClick={decrement}>-1</button>
        </div>
      </div>
    </>
  )
}

export default Tweet
