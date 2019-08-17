import React, { useEffect, useState, Fragment } from "react"
import "./App.css"

import Charts from "./components/charts"
import Randomize from "./components/randomize"
import Search from "./components/search"

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
    <Fragment>
      <Randomize data={data} />
      <div className="content-wrapper">
        <Charts data={data} />
        <Search />
      </div>
    </Fragment>
  )
}

export default App
