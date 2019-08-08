import React from "react"

const List = ({ data }) => {
  console.log(data)

  if (!data) return <div>load ...</div>

  return <div>{data.map(el => el.name)}</div>
}

export default List
