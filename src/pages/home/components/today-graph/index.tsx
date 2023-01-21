import React, { useEffect } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

type Props = {
  day: any;
  weather: any;
};

const TodayGraph = (props: Props) => {
  const [graph_data, setGraphData] = React.useState<any>(null);
  const [icon_data, setIconData] = React.useState<any>(null);

  useEffect(() => {
    console.log("weather icon", props.weather);
  }, [props.weather]);

  const covertKelvinToCelsius = (kelvin: any) => {
    const celsius = Math.round(kelvin - 273.15);
    return celsius;
  };

  useEffect(() => {
    // console.log(props.day, "day data");
    setGraphData(props.day[0].temp);
    console.log("graph_data in graph ", graph_data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.day]);

  const [chart_data, setChartData] = React.useState<any>(null);

  useEffect(() => {
    setChartData([
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
    ]);
    console.log(chart_data, "chart_data");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graph_data]);

  const [icons, setIcons] = React.useState<any>(null);

  // useEffect(() => {
  //   {weather}

  return (
    <div className="rounded-xl shadow-md w-full aspect-auto p-6 flex flex-col gap-5 min-h-[310px] relative glass">
      <div className="flex w-[90%] my-auto mx-auto z-10">
        {chart_data != null && (
          <ResponsiveContainer width="100%" height={175}>
            <LineChart className="px-0 lg:px-6" data={chart_data}>
              <Line
                type="monotone"
                dataKey="tempertaure"
                stroke="#f97e28"
                strokeWidth={2}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className="grid grid-cols-4 w-[95%] divide-x h-[260px] absolute bottom-6 left-0 lg:left-6">
        {chart_data?.map((data: any, index: any) => {
          return (
            <div
              className="w-full flex flex-col gap-3 p-2 h-full justify-end text-white"
              key={index}
            >
              <p className="text-xs">{data.name}</p>
              <p className="text-sm font-bold">{data.tempertaure}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodayGraph;
