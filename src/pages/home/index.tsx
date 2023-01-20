import AirQualityCard from "./components/airquality-card";
import WeatherCard from "./components/weather-card";
import SunCard from "./components/sun-card";
import TodayGraph from "./components/today-graph";

type Props = {
  weather: any;
};

const Home = (props: Props) => {
  console.log("weather in home", props.weather);
  return (
    <section>
      <div className="flex flex-col lg:flex-row w-full h-full gap-6">
        <div className="basis-2/3 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6 w-full">
            <WeatherCard weather={props.weather} />
            <AirQualityCard weather={props.weather} />
          </div>
          {props.weather?.daily && (
            <TodayGraph day={props.weather.daily} weather={props.weather} />
          )}
        </div>
        <div className="basis-1/3 flex flex-col gap-3">
          <SunCard weather={props.weather} />
        </div>
      </div>
    </section>
  );
};

export default Home;
