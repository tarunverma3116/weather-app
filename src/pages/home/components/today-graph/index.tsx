import React, { useEffect } from "react";
import { LineChart, Line } from "recharts";

type Props = {
  day: any;
};

const TodayGraph = (props: Props) => {
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

  return (
    <div>
      <div className="rounded-xl shadow-md w-full aspect-auto p-6 flex flex-col gap-5 h-full">
        <div className="flex-row flex gap-3 items-center">
          {chart_data && (
            <LineChart
              className="px-6"
              width={580}
              height={175}
              data={chart_data}
            >
              <Line
                type="monotone"
                dataKey="tempertaure"
                stroke="#f97e28"
                activeDot={{ r: 5 }}
              />
            </LineChart>
          )}
        </div>
        <div className="grid grid-cols-4 gap-2 w-full">
          {chart_data.map((data, index) => {
            return (
              <div className="w-full flex flex-col gap-3 p-2" key={index}>
                <p className="text-xs">{data.name}</p>
                <p className="text-sm font-bold">{data.tempertaure}°C</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodayGraph;
