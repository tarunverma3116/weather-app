import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import getForecast from "../hooks/getForecast";
import Details from "../pages/details";
import Home from "../pages/home/index";
import Layout from "../pages/layout/index";
import { useCoordinations } from "../hooks/useCoordinations";
import { useWeatherFetch } from "../hooks/useWeatherFetch";
import Location from "../pages/location";

// type Props = {
//   location: {
//     lat: Number;
//     lng: Number;
//   };
// };

export const PublicRoutes = () => {
  const [{ lat, long }, loadingLocation, findCoordinates] = useCoordinations();
  const [
    weather,
    loading,
    error,
    fetchWeather,
    searchByLocation,
    getWeatherLocation,
  ] = useWeatherFetch();

  // const [showDays, setShowDays] = useState(false);

  const fetchCoordinates = () => {
    findCoordinates();
    getWeatherLocation(lat, long);
  };
  // const nightModeCallback = () => {
  //   nightModeChanged();
  // };
  // const showDaysCallback = (enabled: any) => {
  //   setShowDays(enabled);
  // };

  // const doSearchLocation = (searchTerm) => {
  //   searchByLocation(searchTerm);
  //   fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
  // };
  // const unitTempCallback = (enabled) => {
  //   unitModeChanged(enabled);
  // };

  useEffect(() => {
    //default fetching..
    fetchCoordinates();
    getWeatherLocation(lat, long);
    // fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
  }, [lat, long]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home weather={weather} />} />
        {/* <Route path="/details/:id" element={<Details />} /> */}
        <Route path="/forecast" element={<Details weather={weather} />} />
        <Route path="/location" element={<Location weather={weather} />} />
      </Route>
    </Routes>
  );
};
