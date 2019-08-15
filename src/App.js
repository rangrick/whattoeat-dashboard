import React, { useEffect, useState } from "react"
import "./App.css"

import Charts from "./components/charts"
import Randomize from "./components/randomize"

function App() {
  const [data, setData] = useState(false)
  const fetchData = () => {
    fetch("placesCached")
      .then(response => response.json())
      .then(newData => {
        setData(newData)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Randomize data={data} />
      {/* <Charts data={data} /> */}
    </div>
  )
}

export default App
