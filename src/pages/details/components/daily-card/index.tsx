import React from "react";

type Props = {
  day: any;
};

const DailyCard = (props: Props) => {
  console.log("day in daily card", props.day);

  const convertUnixTime = (unixTime: any) => {
    const date = new Date(unixTime * 1000);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    return day;
  };

  const convertKelvinToCelsius = (kelvin: any) => {
    const celsius = kelvin - 273.15;
    return celsius.toFixed(0);
  };

  return (
    <div>
      {props.day && (
        <div className="glass text-white shadow-md rounded-xl p-5 flex flex-col gap-4">
          <img
            className="w-10 h-10 mx-auto"
            src={`http://openweathermap.org/img/w/${props.day.weather[0].icon}.png`}
            alt=""
          />
          <p className="font-bold text-s">{convertUnixTime(props.day.dt)}</p>
          <p className="font-bold text-xl">
            {convertKelvinToCelsius(props.day.temp.day)}°C
          </p>
          <p className="font-bold text-s">{props.day.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default DailyCard;
