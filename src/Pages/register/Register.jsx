import React from "react";
import "./Register.css";
function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" action="">
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username"
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email address"
        />
        <label htmlFor="" className="">
          Password
        </label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}

export default Register;
