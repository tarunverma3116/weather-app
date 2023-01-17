import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  day: any;
};

const DailyGraph = (props: Props) => {
  // console.log("day in daily graph", props.day.daily);

  const convertUnixTime = (unixTime: any) => {
    const date = new Date(unixTime * 1000);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    return day;
  };

  const covertKelvinToCelsius = (kelvin: any) => {
    const celsius = Math.round(kelvin - 273.15);
    return celsius;
  };

  const graph_data = props.day?.daily?.map((day: any) => {
    return {
      name: convertUnixTime(day.dt),
      tempertaure: covertKelvinToCelsius((day.temp.max + day.temp.min) / 2),
      pv: day.temp.night,
      amt: day.temp.eve,
    };
  });

  return (
    <div>
      {graph_data && (
        <LineChart width={1100} height={300} data={graph_data}>
          {/* <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend /> */}
          <Line
            type="monotone"
            dataKey="tempertaure"
            stroke="#f97e28"
            activeDot={{ r: 5 }}
          />
        </LineChart>
      )}
    </div>
  );
};

export default DailyGraph;
