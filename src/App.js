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
    setTemp(
      <ul>
        <li>{Math.round(response.data.main.temp)}°C</li>
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
        <button type="button" className="btn btn-primary">
          Search
        </button>
      </form>
      <div>{temp}</div>
    </div>
  );
}
