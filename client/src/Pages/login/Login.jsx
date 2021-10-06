import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import { useDispatch } from "react-redux";
import {
  login,
  loginError,
  credentialsFetched, // this is like the setIsFeching in the useState(), where the variable is set to the new state.
  selectIsFetching,
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
  const IsFetching = useSelector(selectIsFetching); // this is the state of the variable isfetching.
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
        //if there is data in the form to submit lets dispatch the below action to turn the fetching on.
        dispatch(credentialsFetched());

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
        //we are using an error from the redux. this will turn error variable true
        dispatch(loginError());
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log("Data is fetching ? " + IsFetching);
  console.log(user);

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
        {/* make the button disabled when data is fetching, or isFetching === true */}
        <button className="loginButton" type="submit" disabled={IsFetching}>
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
