import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `4d0850e5170aa01c3c0597d0577f945a`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(url);
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setTemperature(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed}km/h</li>
      </ul>
    );
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form className="Weather" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Submit" />
      </form>
      <h4>{temperature}</h4>
    </div>
  );
}
