"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [

  {
    name: "Dakar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Diourbel",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Fatick",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Kaffrine",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Kaolack",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Kédougou",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Kolda",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Matam",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "SaintLouis",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sédhiou",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Tamba",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Thiès",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Ziguinchor",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}