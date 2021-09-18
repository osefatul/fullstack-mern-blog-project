import React from 'react'
import "./Header.css"
import afg from "../afg.jpg"
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
          THE GREATEST
        </span>
        <span className="headerTitleLg">AFGHANISTAN</span>
        <img className="backgroundImg" src="https://cdn.wallpapersafari.com/26/4/8w5aYj.jpg" />
      </div>
    </div>
  )
}

export default Header
