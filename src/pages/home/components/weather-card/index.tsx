import React, { useEffect } from "react";
import { RiSunCloudyLine } from "react-icons/ri";
import "./style.css";

type Props = {
  weather: any;
};

const WeatherCard = (props: Props) => {
  const [hour, setHour] = React.useState("Night");

  const convertKelvinToCelsius = (degrees: any) => {
    return Math.round(degrees - 273.15);
  };

  useEffect(() => {
    var date = new Date();
    var currentHour = date.getHours();
    console.log("currentHour", currentHour);
    if (currentHour >= 6 && currentHour <= 12) {
      setHour("Morning");
    } else if (currentHour >= 12 && currentHour <= 18) {
      setHour("Afternoon");
    } else if (currentHour >= 18 && currentHour <= 24) {
      setHour("Evening");
    } else {
      setHour("Night");
    }

    //eslint-disable-next-line
    console.log("hour", hour);
  }, [hour]);

  return (
    <div>
      {props.weather ? (
        <div
          className="rounded-xl shadow-md w-full aspect-auto p-6 flex flex-col gap-5"
          id={hour}
        >
          <div className="flex-row flex gap-3 items-center">
            <div className="rounded-full bg-white p-2 flex items-center text-primary">
              <RiSunCloudyLine />
            </div>
            <div className="flex flex-col gap-1 items-start text-black">
              <p className="text-base font-bold">Weather</p>
              <p className="text-s">Whats the weather</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 h-auto text-left px-2 text-black">
            <p className="text-xxl font-bold ">
              {convertKelvinToCelsius(props.weather.main.temp)}°C
            </p>
            <p className="text-sm">{props.weather.weather[0].main}</p>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full">
            <div className="rounded-xl w-full bg-[#192840] flex flex-col gap-3 p-2 text-white">
              <p className="text-xs">Humidity</p>
              <p className="text-sm font-bold">
                {props.weather.main.humidity}%
              </p>
            </div>
            <div className="rounded-xl w-full bg-[#cce16a] flex flex-col gap-3 p-2">
              <p className="text-xs">Clouds</p>
              <p className="text-sm font-bold">{props.weather.clouds.all}</p>
            </div>
            <div className="rounded-xl w-full bg-[#fefffe] flex flex-col gap-3 p-2">
              <p className="text-xs">Pressure</p>
              <p className="text-sm font-bold">
                {props.weather.main.pressure} mb
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default WeatherCard;
