import React from "react";
import styled from "styled-components";

const Main = styled.div`
  padding: 1rem;
  background-size: cover;

  background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
`;

const Content = styled.div`
  margin: auto;
  margin-bottom: 6rem;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 40px;

  h1 {
    margin: 1rem;
  }
  span {
    color: #ff3d3d;
  }
  h3 {
    margin: 0.5rem;
  }
  p {
    padding: 2px;
  }
  transition: all 0.75s ease-in-out;
  &:hover {
    /* background: rgba(0, 0, 0, 0.8); */
  }
`;

