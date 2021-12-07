import React from "react";
import { useSelector } from "react-redux";
// Style
import styled from "styled-components";


const HeaderStyle = styled.div`
  margin-top: 5vh;
  color: #fff;
  font-size: 1.5rem;
  h3 {
    letter-spacing: 1px;
    margin: 0;
    span {
      color: #ffc917;
    }
  }
  @media (max-width: 48rem) {
    width: 350px;
  }
`;
