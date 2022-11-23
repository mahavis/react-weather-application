import React, { useState } from "react";
import "./WeatherForecastData.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecastData(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecastData">
        <div className="row">
          <div className="col">
            <WeatherForecastDay day={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "87ff24d7eb3707aa3o3e240bt1fdfd01";
    let city = "The Hague";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
