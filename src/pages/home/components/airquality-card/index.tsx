import React, { useEffect } from "react";
// import getWeatherDetails from "../../../../hooks/getWeatherDetails";
import { TbWind } from "react-icons/tb";
import "../weather-card/style.css";

type Props = {
  weather: any;
};

const AirQualityCard = (props: Props) => {
  return (
    <div>
      {props.weather ? (
        <div
          className="rounded-xl shadow-md w-full p-6 flex flex-col gap-5"
          id="Air"
        >
          <div className="flex-row flex gap-3 items-center">
            <div className="rounded-full bg-white p-2 flex items-center text-primary">
              <TbWind />
            </div>
            <div className="flex flex-col gap-1 items-start text-black">
              <p className="text-base font-bold">Air Quality</p>
              <p className="text-s">Wind Speed</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 h-auto text-left px-2 text-black">
            <p className="text-xxl font-bold">{props.weather.wind.speed} m/s</p>
            <p className="text-sm">
              Visibility - {props.weather.current?.visibility / 1000} km
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="rounded-xl w-full bg-[#192840] flex flex-col gap-3 p-2 text-white">
              <p className="text-xs">Degree</p>
              <p className="text-sm font-bold">{props.weather.wind.deg}°</p>
            </div>
            <div className="rounded-xl w-full bg-[#cce16a] flex flex-col gap-3 p-2">
              <p className="text-xs">Dew Point</p>
              <p className="text-sm font-bold">
                {props.weather.current?.dew_point}
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

export default AirQualityCard;
