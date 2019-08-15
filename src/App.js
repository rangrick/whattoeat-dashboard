import React, { useEffect, useState } from "react"
import "./App.css"

import Charts from "./compoenents/charts"

function App() {
  const [data, setData] = useState(false)
  const fetchData = ({ search }) => {
    fetch("placesCached")
      .then(response => response.json())
      .then(newData => {
        console.log(newData)
        setData(newData)
      })
  }
  useEffect(() => {
    fetchData({ search: "Jena restaurant" })
  }, [])

  return (
    <div className="App">
      <Randomize />
      <Charts data={data} />
    </div>
  )
}

export default App
