import React, { useState } from "react";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import './App.css';

const API_KEY = "0a963f3990b8ba92ca2bbb808ddf186f";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    if (data.cod === "404") {
      setError("City not found");
    } else {
      setWeatherData(data);
      setError(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <Search fetchWeather={fetchWeather} />
      {error && <p>{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;