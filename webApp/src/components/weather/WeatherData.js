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

const StyledWeatherData = styled(motion.div)`
  h2 {
    color: #ffffff;
  }
  h3 {
    color: #f7f7f7;
  }
  height: 100%;
  width: 40vw;
  background-color: rgba(255, 255, 255, 0.09);
  font-size: 1.1rem;

  .form {
    height: 15%;
    display: flex;
    flex-direction: column;

    input {
      width: 90%;
      height: 50px;
      color: #fff;;
    }

    label {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 75rem) {
    width: 100%;
    font-size: 1rem;
  }
`;

const WeatherDetails = styled(motion.div)`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CurrentWeatherDetails = styled(motion.div)`
  font-size: 1.3rem;
  height: 60%;

  .weather-holders {
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.89);
    }
  }
`;

export default WeatherData;
