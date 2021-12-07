import React, { useEffect } from "react";
// Router
import { Route, Switch } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";

import Nav from "./components/navbar/Nav";
import Welcome from "./pages/Welcome";
import Footer from "./components/layout/Footer";
// Alert
import Alert from "./components/layout/Alert";

// Actions
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/authActions";

//Footer

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Alert />
      <Switch>
        <Route path="/" component={Welcome} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/login" component={LoginPage} exact />

        <PrivateRoute path="/home" component={Home} exact />
      </Switch>

      <Footer />
    </div>
  );
}
export default App;
