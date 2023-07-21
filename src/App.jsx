import "./App.css"
import Tweet from "./Tweet"
import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") //consider different api source
      .then((response) => {
        const tweets = response.data
        setTweets(tweets)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  //t container to set up a responsive grid

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
