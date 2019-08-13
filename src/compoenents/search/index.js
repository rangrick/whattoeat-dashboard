import React, { useState } from "react"

const Search = ({ dispatchSearch }) => {
  const [city, setCity] = useState("")
  const [what, setWhat] = useState("")
  return (
    <form className="pure-form">
      <input
        value={city}
        placeholder="Which city?"
        onInput={e => setCity(e.target.value)}
        type="text"
        className="pure-input-rounded"
      />
      <input
        value={what}
        placeholder="Looking for what?"
        onInput={e => setWhat(e.target.value)}
        type="text"
        className="pure-input-rounded"
      />
      <button
        onClick={e => {
          dispatchSearch(`${city} ${what}`)
          e.preventDefault()
        }}
        type="submit"
        className="pure-button"
      >
        Search
      </button>
    </form>
  )
}

export default Search
