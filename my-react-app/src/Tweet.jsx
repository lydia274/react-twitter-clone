import React from "react"
import { useState } from "react"

function Tweet(props) {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }

  const text = props.text
  const author = props.author
  const date = props.date
  return (
    <div>
      <h1>{text}</h1>
      <p>
        by {author} on {date}
      </p>
      <h6>Likes: {counter}</h6> <button onClick={increment}>+1</button>{" "}
      <button onClick={decrement}>-1</button>
    </div>
  )
}

export default Tweet
