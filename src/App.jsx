import "./App.css"
import Tweet from "./Tweet"
import { useState, useEffect } from "react"
import axios from "axios"

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
      <div className="main">
        <h1>Twitter Clone</h1>
        <div className="t-container">
          {tweets.map((tweet) => (
            <div key={tweet.id}>
              <Tweet body={tweet.body} id={tweet.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
