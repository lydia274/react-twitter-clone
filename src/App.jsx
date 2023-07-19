import "./App.css"
import Tweet from "./Tweet"
import { useState, useEffect } from "react"
import axios from "axios"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function App() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const tweets = response.data
        setTweets(tweets)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <h1>Twitter Clone</h1>
      <Row xs={1} md={3} className="g-4">
        {tweets.map((tweet) => (
          <Col key={tweet.id}>
            <Tweet body={tweet.body} id={tweet.id} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default App
