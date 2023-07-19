import React, { useState } from "react"
import { Card } from "react-bootstrap"

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
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>User {id}</Card.Header>
        <Card.Body>
          <Card.Title>on {date}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <h6>Likes: {counter}</h6>
          <button onClick={increment}>+1</button>{" "}
          <button onClick={decrement}>-1</button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Tweet
