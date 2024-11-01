import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  const { main, name, weather } = weatherData;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <p>{weather[0].description}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;