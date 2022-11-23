import React from "react";

export default function WeatherForecastDay(props) {
  function maximumTemperature() {
    let temperature = Math.round(props.day.temperature.maximum);
    return `${temperature}°`;
  }
  function minimumTemperature() {
    let temperature = Math.round(props.day.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.day.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img src={props.day.condition.icon_url} alt={props.day.condition.icon} />
      <div className="WeatherForecast-temperatures">
        <span className="temperatureMax">{maximumTemperature()}</span>
        <span className="temperatureMin">{minimumTemperature()}</span>
      </div>
    </div>
  );
}
