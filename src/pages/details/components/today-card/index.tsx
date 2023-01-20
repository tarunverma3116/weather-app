import React from "react";

type Props = {
  day: any;
};

const TodayCard = (props: Props) => {
  const convertKelvinToCelsius = (kelvin: any) => {
    const celsius = kelvin - 273.15;
    return celsius.toFixed(0);
  };

  const convertTimeToHourAndMinute = (unixTime: any) => {
    const date = new Date(unixTime * 1000);
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour}:${minute}`;
  };

  console.log("day in today card", props.day);
  return (
    <div>
      {props.day && (
        <div className="glass text-white shadow-md rounded-xl p-5 flex flex-col gap-4">
          <img
            className="w-10 h-10 mx-auto"
            src={`http://openweathermap.org/img/w/${props.day.weather[0].icon}.png`}
            alt=""
          />
          <p className="font-bold text-s">{props.day.weather[0].main}</p>
          <p className="font-bold text-xl text-primary">
            {convertKelvinToCelsius(props.day.temp)}°C
          </p>
          <p className="font-bold text-s">{props.day.weather[0].description}</p>
          <p className="font-bold text-s">
            {convertTimeToHourAndMinute(props.day.dt)}
          </p>
        </div>
      )}
    </div>
  );
};

export default TodayCard;
