import React from "react"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ScatterChart,
  Scatter
} from "recharts"

const List = ({ data }) => {
  console.log(data)

  if (!data) return <div>load ...</div>

  const data2 = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 600, pv: 3400, amt: 3400 }
  ]

  const chartData = data.map(el => ({
    name: el.name,
    price: el.price_level,
    rating: el.rating,
    userRatingsTotal: el.user_ratings_total
  }))

  // return <div>{data.map(el => el.name)}</div>
  return (
    <div>
      <BarChart width={1000} height={450} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="price" />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
      <BarChart width={1000} height={450} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="price" />
        <YAxis dataKey="rating" />
        <Tooltip />
        <Legend />
        <Bar fill="#82ca9d" />
      </BarChart>

      <ScatterChart
        width={400}
        height={1000}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="price" name="Price" unit="cm" />
        <YAxis type="number" dataKey="rating" name="Rating" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={chartData} fill="#8884d8" />
      </ScatterChart>
    </div>
  )
}

export default List
