import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./routes";
import { useEffect, useState } from "react";
// require("dotenv");

function App() {
  const [lat, setLat] = useState(13);
  const [lng, setLng] = useState(78);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState("null");

  const getLocation = async () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      await navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus("Found location");
          console.log("position", position);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("null");
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <PublicRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
