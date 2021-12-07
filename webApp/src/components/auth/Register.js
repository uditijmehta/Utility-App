import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";


const Register = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
  
    const { name, email, password, password2 } = formData;
  
    const onChangeHandler = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmitHandler = async (e) => {
      e.preventDefault();
      if (password !== password2) {
        dispatch(setAlert("Password don not match!", "danger"));
      } else {
        dispatch(register({ name, email, password }));
      }
    };
  
    // Redirect to Home
    if (isAuthenticated) {
      return <Redirect to="/home" />;
    }
  
    return (
      <FormStyle >
        <form className="login" onSubmit={onSubmitHandler}>
          <h1 className="large text-primary">Sign Up</h1>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={(e) => onChangeHandler(e)}
            autoComplete="off"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChangeHandler(e)}
            required
          />
          <button type="submit" className="btn btn-primary" value="Login">
            Sign Up
          </button>
          <div className="sign-up">
            <p className="my-1">Already onboard?</p>
            <Link to="/login">
              <button className="btn-sign-up">Sign In</button>
            </Link>
          </div>
        </form>
      </FormStyle>
    );
};

export default Register;
