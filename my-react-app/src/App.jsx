import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Tweet from "./Tweet"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>coursera - joposhniki</h1>
      <div>
        <Tweet />
      </div>
    </>
  )
}

export default App