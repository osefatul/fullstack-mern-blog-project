import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setUsername("");
    setPassword("");

    setError(false);

    try {
      const res = await axios.post("http://localhost:5000/api/auths/register", {
        username,
        password,
        email,
      });

      //we can use useHistory as well to go to another link once data is there which means once data is submitted
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="" className="">
          Password
        </label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span styles={{ color: "red" }}>Something went wrong</span>}
    </div>
  );
}

export default Register;
