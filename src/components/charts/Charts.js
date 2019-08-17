import React from "react"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ScatterChart,
  Scatter,
  Legend
} from "recharts"

const Charts = ({ data }) => {
  if (!data) return <div>loading ...</div>

  const chartData = data.map(el => ({
    name: el.name,
    price: el.price_level,
    rating: el.rating,
    userRatingsTotal: el.user_ratings_total
  }))

  return (
    <div className="content is-center">
      <h2 className="content-head is-center">Ratings</h2>
      <ScatterChart
        width={730}
        height={250}
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" name="Name" unit="" />
        <YAxis
          domain={["dataMin", "dataMax"]}
          dataKey="rating"
          name="rating"
          unit=" ⭐"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="A school" data={chartData} fill="#1f8dd6" />
      </ScatterChart>
    </div>
  )
}

export default Charts
