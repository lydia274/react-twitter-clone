import React from "react"

function Tweet(props) {
  const text = props.text
  const author = props.author
  const date = props.date
  return (
    <div>
      <h1>{text}</h1>
      <p>
        by {author} on {date}
      </p>
    </div>
  )
}

export default Tweet
