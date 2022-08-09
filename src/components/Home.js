import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import CurrentLocation from "./CurrentLocation";
import "./Home.css";

function Home() {
  const [data, setData] = useState(null);
  const [lat, setLat] = useState(13.134435);
  const [long, setLong] = useState(78.131817);
  const [status, setStatus] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    getData();
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  async function getData() {
    const actualData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=3a4429fa2cba4d77b86b9c24bf33391f
      `
    ).then((response) => response.json());
    // console.log(actualData);
    setData(actualData);
  }

  const goToCurrentLocation= ()=>{
    navigate('/CurrentLocation')
  }

  if (data != null) {
    return (
      <div>
        <div className="homeHeader">
          <h2>Home</h2>
        </div>

        <p><b>Your lat:</b>{data.coord.lat}</p>
        <p><b>Your long:</b> {data.coord.lon}</p>

        {data.weather.map((i) => {
          return (
            <div key={i.id}>
              <p><b>current weather :</b> {i.main}</p>
            </div>
          );
        })}

        <p><b>current Temp:</b> {data.main.temp}</p>

        {/* <div
          style={{
            display: "flex",
            flexDirection:'column',
            justifyContent: "center",
            alignItems: "center",
            // alignSelf: "center",
            alignContent: "center",
            border: `2px solid red`,
            marginTop: "100px",
          }}
        >
          <h1>Get current Temperature</h1>
          <button onClick={getLocation}>Get Location</button>
          <p><b>Latitude:</b> {lat}</p>
          <p><b>Longitude</b>: {long}</p>
          <p><b>current Temp</b>: {data.main.temp}</p>
        </div> */}

        <div>
        <button onClick={()=>{goToCurrentLocation()}}>Get Location</button>
        </div>
        <div>
          <CurrentLocation lat={lat} long={long} temp={data.main.temp}/>
        </div>

      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default Home;
