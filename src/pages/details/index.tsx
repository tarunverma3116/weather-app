import React from "react";
import DailyCard from "./components/daily-card";
import DailyGraph from "./components/daily-graph";
import TodayCard from "./components/today-card";

type Props = {
  weather: any;
};

const Details = (props: Props) => {
  console.log("weather in details", props.weather);
  const [activeTab, setActiveTab] = React.useState("daily");
  return (
    <section>
      <div className="flex flex-col justify-center align-center items-center w-full gap-6">
        <p className="font-bold text-xl">Weather Forecast</p>
        <div className="mb-4 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li>
              <button
                className={
                  activeTab === "daily"
                    ? "inline-block p-4 border-b-2 border-primary rounded-t-lg text-primary"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg"
                }
                onClick={() => setActiveTab("daily")}
              >
                1 Day
              </button>
            </li>
            <li>
              <button
                className={
                  activeTab === "weekly"
                    ? "inline-block p-4 border-b-2 border-primary rounded-t-lg text-primary"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg"
                }
                onClick={() => setActiveTab("weekly")}
              >
                7 Days
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          {activeTab === "daily" ? (
            <div className="flex flex-col gap-6">
              {props?.weather && (
                <div className="w-full overflow-x-scroll">
                  <div className="w-full grid grid-cols-6 gap-4 pb-6">
                    {props.weather.hourly &&
                      props.weather.hourly.map((day: any, index: any) => {
                        return <TodayCard key={index} day={day} />;
                      })}
                  </div>
                </div>
              )}
              <DailyGraph day={props.weather} />
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {props?.weather && (
                <div className="w-full grid grid-cols-8 gap-4">
                  {props.weather.daily &&
                    props.weather.daily.map((day: any, index: any) => {
                      return <DailyCard key={index} day={day} />;
                    })}
                </div>
              )}
              <DailyGraph day={props.weather} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Details;
