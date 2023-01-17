import { useState } from "react";

export const useCoordinations = () => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  const findCoordinates = () => {
    if (navigator.geolocation) {
      setLoadingLocation(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log(pos, "pos from geolocation api in hook");
          setLat(pos.coords.latitude.toString());
          setLong(pos.coords.longitude.toString());
        },
        (positionError) => {
          setLat("12.996484");
          setLong("77.695296");
          console.log(positionError, "error from geolocation api in hook");
        }
      );
      setLoadingLocation(false);
    } else {
      console.log("It's not supported by this browser.");
    }
  };

  const updateLocation = (lat: any, long: any) => {
    setLat(lat);
    setLong(long);
    //console.log('Updated Location')
  };

  return [
    { lat, long },
    loadingLocation,
    findCoordinates,
    updateLocation,
  ] as const;
};
