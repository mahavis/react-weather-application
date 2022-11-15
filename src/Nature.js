import React, { useState } from "react";
import axios from "axios";
import "./Nature.css";

export default function Nature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      date: "Sunday 11:00",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      humidity: response.data.temperature.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather p-5 container">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
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
        <h1>{props.defaultCity}</h1>
        <ul className="descriptionList">
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span classname="units">°C</span>
            </div>
          </div>
          <div className="Credentials col-6">
            <ul>
              <li>Humidity: {weatherData.Humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "87ff24d7eb3707aa3o3e240bt1fdfd01";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return "Loading..";
}
