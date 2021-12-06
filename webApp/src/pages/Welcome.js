import React from "react";
import { Link } from "react-router-dom";
// Style
import styled from "styled-components";

const Welcome = () => {

  return (
    <WelcomeStyle className="landing-page">
      <div className="wrapper">
        <div className="header">
          <div className="content">
            <h1>
              Welcome to Helper <br />
              <span className="heading-secondary">Your daily personal assistant</span>
            </h1>
            <div className="buttons">
              <Link className="button register" to="/register">
                Register
              </Link>
              <Link className="button login" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="background"></div>
    </WelcomeStyle>
  );
};

export default Welcome;
