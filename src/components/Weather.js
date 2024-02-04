// Weather.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Cairns");
  const apiKey = "70442c28014469b0989e0dafab475066";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      const data = response.data;

      if (data.cod && data.cod !== 200) {
        // Check for errors in the response
        throw new Error(data.message);
      }

      const weatherInfo = {
        temperature: data.main.temp - 273.15,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        weatherDesc: data.weather[0].description,
        cityName: data.name,
      };

      setWeather(weatherInfo);
    } catch (error) {
      console.error("Error fetching weather:", error.message);
      // Handle error (e.g., display an error message to the user)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div className="container">
      <div className="mb-3">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="form-control"
        />
        <button
          className="btn btn-primary mt-2"
          onClick={handleSearch}
        >
          Search Weather
        </button>
      </div>
      <div className="mt-4">
        <h4>{weather.cityName} Weather Information</h4>
        <p>Temperature: {weather.temperature}°C</p>
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind Speed: {weather.windSpeed} m/s</p>
        <p>Weather Description: {weather.weatherDesc}</p>
      </div>
    </div>
  );
};

export default Weather;
