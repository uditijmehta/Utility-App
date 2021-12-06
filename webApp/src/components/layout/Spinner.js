import React from "react";

import styled from "styled-components";

const Spinner = () => {
  return (
    <SpinnerStyle>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerStyle>
  );
};

export default Spinner;
