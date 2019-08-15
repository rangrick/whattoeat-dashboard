import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  LabelList
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
    <div>
      <BarChart width={window.innerWidth} height={450} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="price">
          <Label value="Price" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis dataKey="rating" />
        <Tooltip />

        <Bar dataKey="rating" fill="#2f7abf">
          <LabelList dataKey="name" position="center" angle="90" />
        </Bar>
      </BarChart>
    </div>
  )
}

export default Charts
