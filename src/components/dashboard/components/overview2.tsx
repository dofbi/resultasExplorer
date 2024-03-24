import "../../../styles/css/carte2.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
    {
      name: "Dakar",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Diourbel",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Fatick",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Kaffrine",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Kédougou",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Kaolack",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Kolda",
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: "Louga",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Matam",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Saint-Louis",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Sédhiou",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Tambacounda",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Thiès",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Ziguinchor",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

export default function Overview2() {
  return (
 
    <BarChart
      width={1500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip cursor={true}/>
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
    </BarChart>
 
  );
}
