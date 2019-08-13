import React, { useEffect, useState } from "react"
import "./App.css"

import Charts from "./compoenents/charts"
import List from "./compoenents/list"
import Search from "./compoenents/search"

function App() {
  const [data, setData] = useState(false)
  const fetchData = ({ token, search }) => {
    fetch(
      `places?search=${search}` + (token ? `&next_page_token=${token}` : "")
    )
      .then(response => response.json())
      .then(newData => {
        setData(newData)

        if (newData.next_page_token) {
          // fetchData(newData.next_page_token)
        }
      })
  }
  useEffect(() => {
    fetchData({ search: "Jena restaurant" })
  }, [])

  const dispatchSearch = search => {
    fetchData({ search })
  }

  return (
    <div className="App">
      <Search dispatchSearch={dispatchSearch} />

      <Charts data={data.results} />
    </div>
  )
}

export default App
