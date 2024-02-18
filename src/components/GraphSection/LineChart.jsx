import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { year: "2001", privateEquity: 1, sp500: 1 },
  { year: "'04", privateEquity: 2, sp500: 1.5 },
  { year: "'07", privateEquity: 3, sp500: 2 },
  { year: "'10", privateEquity: 4, sp500: 2.5 },
  { year: "'13", privateEquity: 5, sp500: 3 },
  { year: "'16", privateEquity: 7, sp500: 3.5 },
  { year: "'19", privateEquity: 9, sp500: 4 },
  { year: "2020", privateEquity: 10, sp500: 4.5 },
];

const AnimateLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="year" />
        <YAxis domain={[0, "dataMax + 1"]} ticks={[0, 2, 4, 6, 8, 10]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="privateEquity"
          stroke="rgba(67, 117, 251, 1)"
          activeDot={{ r: 8 }}
          animationDuration={2000}
        />
        <Line
          type="monotone"
          dataKey="sp500"
          stroke="rgba(70, 78, 199, 0.5)"
          activeDot={{ r: 8 }}
          animationDuration={2000}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AnimateLineChart;
