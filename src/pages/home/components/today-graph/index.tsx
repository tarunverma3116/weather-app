import React, { useEffect } from "react";
import { LineChart, Line, Tooltip, XAxis, CartesianGrid } from "recharts";

type Props = {
  day: any;
};

const TodayGraph = (props: Props) => {
  console.log("day in today graph", props.day[0].feels_like);
  const [graph_data, setGraphData] = React.useState<any>(null);

  const covertKelvinToCelsius = (kelvin: any) => {
    const celsius = Math.round(kelvin - 273.15);
    return celsius;
  };

  useEffect(() => {
    setGraphData(props.day[0].feels_like);
    console.log("graph_data in graph ", graph_data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graph_data]);

  const chart_data = [
    {
      name: "Morning",
      tempertaure: covertKelvinToCelsius(graph_data?.morn),
    },
    {
      name: "Day",
      tempertaure: covertKelvinToCelsius(graph_data?.day),
    },
    {
      name: "Evening",
      tempertaure: covertKelvinToCelsius(graph_data?.eve),
    },
    {
      name: "Night",
      tempertaure: covertKelvinToCelsius(graph_data?.night),
    },
  ];

  //   const graph_data = props.day.daily[0].feels_like;
  //   console.log("graph_data", graph_data);
  return (
    <div>
      {chart_data && (
        <LineChart className="px-6" width={600} height={300} data={chart_data}>
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          {/* <Tooltip /> */}
          {/* <Legend /> */}
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

export default TodayGraph;
