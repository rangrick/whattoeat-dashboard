import React, { useState } from "react"

const Search = ({ dispatchSearch }) => {
  const [city, setCity] = useState("")
  const [what, setWhat] = useState("")
  return (
    <div className="ribbon l-box-lrg pure-g">
      <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5" />
      <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
        <h2 className="content-head content-head-ribbon">
          Laboris nisi ut aliquip.
        </h2>

        <form className="pure-form">
          <input
            value={city}
            placeholder="Which city?"
            onChange={e => setCity(e.target.value)}
            type="text"
            className="pure-input-rounded"
          />
          <input
            value={what}
            placeholder="Looking for what?"
            onChange={e => setWhat(e.target.value)}
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
      </div>
    </div>
  )
}

export default Search
