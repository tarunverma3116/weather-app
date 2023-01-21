import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import { useNavigate } from "react-router-dom";
import { useCoordinations } from "../../hooks/useCoordinations";
import { useWeatherFetch } from "../../hooks/useWeatherFetch";
import { SEARCH_BY_WORD } from "../../api/index";

type Props = {};

const Layout = (props: Props) => {
  const navigate = useNavigate();

  const [{ lat, long }, loadingLocation, findCoordinates] = useCoordinations();
  const [
    weather,
    loading,
    error,
    fetchWeather,
    searchByLocation,
    getWeatherLocation,
  ] = useWeatherFetch();
  const [showDays, setShowDays] = useState(false);

  const fetchCoordinates = () => {
    findCoordinates();
    // getWeatherLocation(lat, long);
  };

  // const nightModeCallback = () => {
  //   nightModeChanged();
  // };
  // const showDaysCallback = (enabled: any) => {
  //   setShowDays(enabled);
  // };

  // const doSearchLocation = (searchTerm: any) => {
  //   searchByLocation(searchTerm);
  //   fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
  // };
  // const unitTempCallback = (enabled: any) => {
  //   unitModeChanged(enabled);
  // };

  //console.log("location", lat, long);
  //console.log('Weather', weather);

  useEffect(() => {
    //default fetching..
    fetchCoordinates();
    // getWeatherLocation(lat, long);
    // fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
  }, [lat, long]);

  useEffect(() => {
    navigate("/home");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col flex-grow max-h-full max-w-full min-h-[100vh]">
      <Navbar />
      <div className="flex flex-grow max-h-full min-h-0 relative pt-14 max-w-full overflow-x-hidden">
        <SideNav />
        <div className="min-h-0 max-h-full max-w-full overflow-y-auto flex-grow scrollbar-hide">
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
