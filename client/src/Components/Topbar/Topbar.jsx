import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { selectUser, logout } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const PF = "http://localhost:5000/images/";

function Topbar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    //e.preventDefault();
    dispatch(logout()); //toggle state.user in the redux to null
    localStorage.removeItem("userInfo"); //remove every data you find in the userInfo
    window.location.replace("/login"); //redirect user to login page again
  };

  //THIS IS EXTREMELY IMPORTANT FOR USER LOGIN PERSISTATION
  useEffect(() => {
    localStorage.getItem("userInfo");
  }, [user]);

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-instagram"></i>
        <i className="topIcon fab fa-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITER
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImage" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>

            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Topbar;
