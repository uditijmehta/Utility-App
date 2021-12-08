import React from "react";
// Components
import Greeting from "./Greeting";
import weatherBg from "../../img/weatherBg.jpg";

// Styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Weather = () => {
  return (
    <StyledWeather>
      <Greeting />
    </StyledWeather>
  );
};

const StyledWeather = styled(motion.div)`
  background: url(${weatherBg}) center center/cover;
  height: 80vh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 75rem) {
    flex-direction: column;
  }
`;

export default Weather;
