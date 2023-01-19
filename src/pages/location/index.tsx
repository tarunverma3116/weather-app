import React from "react";

type Props = {
  weather: any;
};

const Location = (props: Props) => {
  const { weather } = props;
  console.log("weather in location", weather);

  return (
    <section>
      <div className="flex flex-col justify-center align-center items-center w-full gap-6">
        <p className="font-bold text-xl">Location Details</p>
      </div>
    </section>
  );
};

export default Location;
