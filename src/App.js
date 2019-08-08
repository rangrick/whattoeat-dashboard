import React, { useEffect, useState } from "react"
import "./App.css"

import Charts from "./compoenents/charts"
import List from "./compoenents/list"
function makeid() {
  var result = ""
  var characters =
    "🍇🍈🍉🍊🍋🍌🍍🥭🍎🍏🍐🍑🍒🍓🥝🍅🥥🥑🍆🥔🥕🌽🌶🥒🥬🥦🍄🥜🌰🍞🥐🥖🥨🥯🥞🧀🍖🍗🥩🥓🍔🍟🍕🌭🥪🌮🌯🥙🍳🥘🍲🥣🥗🍿🧂🥫🍱🍘🍙🍚🍛🍜🍝🍠🍢🍣🍤🍥🥮🍡🥟🥠🥡🍦🍧🍨🍩🍪🎂🍰🧁🥧🍫🍬🍭🍮🍯🍼🥛☕🍵🍶🍾🍷🍸🍹🍺🍻🥂🥃🥤🥢🍽🍴🥄"
  var charactersLength = characters.length
  for (var i = 0; i < charactersLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

function App() {
  const [data, setData] = useState(false)

  useEffect(() => {
    fetch("places")
      .then(response => response.json())
      .then(data => setData(data))

    document.title = makeid()
  }, [])

  console.log(data)
  return (
    <div className="App">
      <List data={data.results} />
      <Charts />
    </div>
  )
}

export default App
