import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { workout } from "./content";

export const Workout = () => {
  return (
    <Cards>
      {workout.map((info) => (
        <Container key={info.id}>
          <img src={info.img} alt="" />
          <h3>{info.title}</h3>
          <p>{info.content}</p>
          <Link to={info.path}>
            <Button>LETS START</Button>
          </Link>
        </Container>
      ))}
    </Cards>
  );
};

export default Workout;
