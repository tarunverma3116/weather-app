import SemiCircleProgressBar from "react-progressbar-semicircle";
import { WiSunrise, WiSunset } from "react-icons/wi";
import "./index.css";
import { HiSun } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

type Props = {
  weather: any;
};

const SunCard = (props: Props) => {
  const navigate = useNavigate();

  const getTime = (time: number) => {
    const date = new Date(time * 1000);
    console.log("date", date);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    return hours + ":" + minutes.substr(-2);
  };

  const getTimePercentage = () => {
    const sunrise = props.weather.sys.sunrise;
    const sunset = props.weather.sys.sunset;
    const now = new Date().getTime() / 1000;
    const percentage = ((now - sunrise) / (sunset - sunrise)) * 100;
    return percentage;
  };

  const getDate = (time: number) => {
    const date = new Date(time * 1000);
    const weekday = date.toLocaleString("en-us", { weekday: "long" });
    return weekday;
  };

  const convertTimeTo12Hour = (time: number) => {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const abbreviated = hours >= 12 ? "PM" : "AM";
    const formattedTime = hours % 12 || 12;
    return formattedTime + ":" + minutes.substr(-2) + " " + abbreviated;
  };

  const convertKelvinToCelsius = (degrees: any) => {
    return Math.round(degrees - 273.15);
  };

  return (
    props.weather && (
      <div className="w-full h-full shadow-md rounded-xl p-5 glass text-white">
        <div className="flex flex-col justify-between gap-5 items-center">
          <SemiCircleProgressBar
            percentage={getTimePercentage()}
            showPercentValue={false}
            diameter={250}
            strokeWidth={2}
            stroke="#f97e28"
          />{" "}
          <div className="flex w-full justify-between">
            <div className="flex flex-col justify-center">
              <div className="flex flex-row gap-1 items-center">
                <p className="text-sm text-primary font-bold">
                  {getTime(props.weather.sys.sunrise)}
                </p>
                <p className="text-xl text-primary font-bold">
                  <WiSunset />
                </p>
              </div>
              <p className="text-s font-bold">Sunrise</p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-row gap-1 items-center">
                <p className="text-sm text-primary font-bold">
                  {getTime(props.weather.sys.sunset)}
                </p>
                <p className="text-xl text-primary font-bold">
                  <WiSunrise />
                </p>
              </div>
              <p className="text-s font-bold">Sunset </p>
            </div>
          </div>
          <div className="rounded-xl w-full bg-[#192840] flex flex-row gap-3 p-4 text-white items-center">
            <HiSun className="text-3xl text-primary" />
            <div className="flex flex-col justify-between gap-1 items-start h-full">
              <p className="text-xl font-bold">
                {props.weather.current?.uvi} UVI
              </p>
              <p className="text-s">Moderate risk from UV rays.</p>
            </div>
          </div>
          {props.weather.daily?.slice(1, 3).map((day: any, index: number) => {
            return (
              <div
                key={index}
                className="rounded-xl w-full shadow-md bg-white justify-between flex flex-row p-4 text-black items-center"
              >
                <div className="flex flex-col lg:flex-row gap-3 items-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt="weather icon"
                    className="w-10 h-10"
                  />
                  <div className="flex flex-col justify-between gap-1 items-start h-full">
                    <p className="text-base font-bold">{getDate(day.dt)}</p>
                    <p className="text-xs">{day.weather[0].description}</p>
                  </div>
                </div>
                <div className="flex">
                  <p className="text-lg text-primary font-bold">
                    {convertKelvinToCelsius(day.temp.max)}°C/
                    {convertKelvinToCelsius(day.temp.min)}°C
                  </p>
                </div>
              </div>
            );
          })}
          <button
            className="btn btn-[#f97e28] w-full"
            onClick={() => navigate("/forecast")}
          >
            Next 7 Days
          </button>
        </div>
      </div>
    )
  );
};

export default SunCard;
