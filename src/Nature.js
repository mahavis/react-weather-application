import React from "react";
import axios from "axios";
import "./Nature.css";

export default function Nature() {
  function handleSubmit(response) {}
  const apiKey = "87ff24d7eb3707aa3o3e240bt1fdfd01";
  const city = "The Hague";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleSubmit);

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
      <h1>The Hague</h1>
      <ul className="descriptionList">
        <li>Sunday 11:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly cloudy"
              className="float-left"
            />
            <span className="temperature">9</span>
            <span classname="units">°C</span>
          </div>
        </div>
        <div className="Credentials col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 87%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
