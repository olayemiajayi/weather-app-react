import React, { useState } from "react";
import axios from "axios";
export default function App() {
  let [city, setCity] = useState(" ");
  let [temp, setTemp] = useState(" ");
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function showWeather(response) {
    console.log(response.data);
    let Temperature = `${city} ${Math.round(response.data.main.temp)}°C`;
    setTemp(
      <ul>
        <div className="city">
          <li>
            <strong>{Temperature}</strong>
          </li>
        </div>
        <li>
          {" "}
          <img
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </li>
        <div className="wind">
          <strong>
            <li>Wind: {response.data.wind.speed} Km/h</li>
            <li>Humidity: {response.data.main.humidity}</li>
          </strong>
        </div>
      </ul>
    );
  }

  function handleWeather(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c48afa47a9a9c24f3500c7039d50aaa&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  return (
    <div className="Weather">
      <form onSubmit={handleWeather}>
        <input type="search" placeholder="Type city" onChange={updateCity} />
        <input type="submit" value="search" class="btn btn-primary w-48 m-2" />
      </form>

      <h2>{temp}</h2>
    </div>
  );
}
