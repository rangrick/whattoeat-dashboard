import React, { useState, useEffect } from "react"

const Randomize = ({ data }) => {
  const [item, setItem] = useState()
  useEffect(() => {
    setItem(data[Math.floor(Math.random() * data.length)])
  }, [data])

  if (!item) return <div>loading ...</div>

  return (
    <div className="splash-container">
      <div className="splash">
        <h1 className="splash-head">{item.name}</h1>
        <p className="splash-subhead">
          <i>{item.formatted_address}</i>
        </p>

        <h3>
          Price Level: {item.price_level} 💰 Rating: {item.rating} ⭐ Ratings
          total:
          {item.user_ratings_total} 📱
        </h3>

        <p>
          <button
            onClick={() =>
              setItem(data[Math.floor(Math.random() * data.length)])
            }
            className="pure-button pure-button-primary"
          >
            Don't like it, show me antother!
          </button>
        </p>
      </div>
    </div>
  )
}

export default Randomize
