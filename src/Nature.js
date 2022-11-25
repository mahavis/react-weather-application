import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Nature.css";
import WeatherForecastData from "./WeatherForecastData";

export default function Nature(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
    });
  }
  function search() {
    const apiKey = "87ff24d7eb3707aa3o3e240bt1fdfd01";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather p-5 container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecastData
          symbol={weatherData.iconUrl}
          coordinates={weatherData.coordinates}
        />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
