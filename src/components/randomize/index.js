import React from "react"

const Randomize = ({ data }) => {
  if (!data) return <div>loading ...</div>
  var item = data[Math.floor(Math.random() * data.length)]
  return (
    <div>
      <address>{item.formatted_address}</address>
      <div>{item.name}</div>
      <div>Price Level: {item.price_level}</div>
      <div>Rating: {item.rating}</div>
      <div>Ratings: {item.user_ratings_total}</div>
    </div>
  )
}

export default Randomize
