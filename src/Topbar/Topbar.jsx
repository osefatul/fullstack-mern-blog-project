import React from 'react'
import './topbar.css'
function Topbar() {
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
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>

        </ul>
      </div>
      <div className="topRight">
        <img className="topImage" src="https://www.wagrati.eu/media/images/flagge-afghanistan-1400x933.jpg" alt="" />
        <i className="topSearchIcon fas fa-search"></i>
      </div>

    </div>
  )
}

export default Topbar
