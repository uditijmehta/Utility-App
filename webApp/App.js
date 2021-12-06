import React, { useEffect } from "react";
// Router
import { Route, Switch } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";

import Nav from "./components/navbar/Nav";


const App = () => {

  return (
    <div className="App">
      <Nav></Nav>
    </div>
  );
};

export default App;
