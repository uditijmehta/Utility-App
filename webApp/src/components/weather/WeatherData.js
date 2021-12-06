import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
// Actions
import * as BsIcons from "react-icons/bs";


const WeatherData = () => {
  const { weatherInfo, loading } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  return (
    <StyledWeatherData>
      <div className="search" onClick={}>
        <BsIcons.BsSearch id="search" />
      </div>
      <form onSubmit={} className="form">
        <label htmlFor="searchWeather">Search Another City</label>
        <input
          onChange={}
          value={input}
          type="text"
          name="searchWeather"
        />
      </form>
    </StyledWeatherData>
  );
};

export default WeatherData;
