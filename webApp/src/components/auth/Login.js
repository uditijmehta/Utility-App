import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChangeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <FormStyle>
      <form className="login" onSubmit={onSubmitHandler}>
        <h1 className="large text-primary">Sign In</h1>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(e) => onChangeHandler(e)}
          autoComplete="off"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          minLength="6"
          value={password}
          onChange={(e) => onChangeHandler(e)}
          required
        />
        <button type="submit" className="btn btn-primary" value="Login">
          Sign In
        </button>
        <div className="sign-up">
          <p className="my-1">New Here?</p>
          <Link to="/register">
            <button className="btn-sign-up">Sign Up</button>
          </Link>
        </div>
      </form>
    </FormStyle>
  );
}
export default Login;
