import React from 'react';
import { Link } from 'react-router-dom';
// Style
import styled from 'styled-components';
const NotFound = () => {
  return (
    <WrapperStyle className='main'>
      <div class='site'>
        <div class='sketch'>
          <div class='bee-sketch red'></div>
          <div class='bee-sketch blue'></div>
        </div>

        <h1>
          404:
          <small>Page Not Found</small>
          <Link to='/'>
            <button className='btn home-btn'>Home</button>
          </Link>
        </h1>
      </div>
    </WrapperStyle>
  );
};

export default NotFound;
