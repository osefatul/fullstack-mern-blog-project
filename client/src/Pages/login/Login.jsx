import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import { useDispatch } from "react-redux";
import {
  login,
  loginFailure,
  selectError,
  selectUser,
} from "../../features/userSlice";
import { useSelector } from "react-redux";
import "./Login.css";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  //const { user, dispatch, isFetching } = useContext(Context);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  //const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        header: {
          "content-type": "application/json",
        },
      };

      //if both values of the inputs are there or not empty
      if (userRef.current.value && passwordRef.current.value) {
        const res = await axios.post(
          "http://localhost:5000/api/auths/login",
          {
            username: userRef.current.value,
            password: passwordRef.current.value,
          },
          config
        );

        //send data
        dispatch(login(res.data));
        res.data && window.location.replace("/");
      } else {
        //we are using an error from the redux. this will turn error variable to true
        dispatch(loginFailure());
      }
    } catch (err) {
      console.log(err);
    }
  };

  //console.log(user);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your Username"
          ref={userRef}
        />
        <label htmlFor="" className="">
          Password
        </label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Plz enter you login credentials
        </span>
      )}
    </div>
  );
}

export default Login;
