import React from 'react'
import "./Header.css"
import afg from "../../afg.jpg"
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
          THE GREATEST
        </span>
        <h1 className="headerTitleLg"> AFGHANISTAN</h1>
        <img className="backgroundImg" src={afg} />
      </div>
    </div>
  )
}

export default Header
