import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
// Actions
import { fetchWeather } from "../../actions/weatherAction";
// Icons
import * as BsIcons from "react-icons/bs";

const WeatherData = () => {
  const { weatherInfo, loading } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  // Handlers
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(input));
    setInput("");
  };

  return (
    <StyledWeatherData>
      <div className="search" onClick={searchHandler}>
        <BsIcons.BsSearch id="search" />
      </div>
      <form onSubmit={searchHandler} className="form">
        <label htmlFor="searchWeather">Search Another City</label>
        <input
          onChange={onChangeHandler}
          value={input}
          type="text"
          name="searchWeather"
        />
      </form>

      <WeatherDetails>
        <h2>Weather Details</h2>
        {loading ? (
          <div className="loading">
            <Spinner />
          </div>
        ) : (
          <CurrentWeatherDetails>
            <div className="weather-holders">
              <h3>
                <span>Cloudy</span>
                <span className="w-data">{`${weatherInfo.clouds.all}%`}</span>
              </h3>
            </div>
            <div className="weather-holders">
              <h3>
                <span>Humidity</span>
                <span className="w-data">{`${weatherInfo.main.humidity}%`}</span>
              </h3>
            </div>
            <div className="weather-holders">
              <h3>
                <span>Wind</span>
                <span className="w-data">{`${weatherInfo.wind.speed}km/h`}</span>
              </h3>
            </div>
            <div className="weather-holders">
              <h3>
                <span>Pressure</span>
                <span className="w-data">{`${weatherInfo.main.pressure}mb`}</span>
              </h3>
            </div>
          </CurrentWeatherDetails>
        )}
      </WeatherDetails>
    </StyledWeatherData>
  );
};

export default WeatherData;
