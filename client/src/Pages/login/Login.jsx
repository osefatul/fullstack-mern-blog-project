import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" action="">
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email address"
        />
        <label htmlFor="" className="">
          Password
        </label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password"
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
