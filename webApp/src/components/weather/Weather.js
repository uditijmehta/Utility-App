import React from "react";
// Components
import WeatherData from "./WeatherData";
import weatherBg from "../../img/weatherBg.jpg";

// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Weather = () => {
  return (
    <StyledWeather>
      <WeatherData />
    </StyledWeather>
  );
};

const StyledWeather = styled(motion.div)`
  background: url(${weatherBg}) center center/cover;
  display: flex;
  justify-content: space-between;
`;

export default Weather;
