import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">POST ABOUT ANYTHING</span>
        <h1 className="headerTitleLg">THE BLOG</h1>

        <img
          className="backgroundImg"
          src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg"
        />
        <img
          className="backgroundImg"
          src="https://parade.com/wp-content/uploads/2020/06/iStock-1203599963.jpg"
        />
        <img
          className="backgroundImg"
          src="https://www.wallpaperup.com/uploads/wallpapers/2015/12/12/858715/38ab8700ce1051a9b2311504d06f8289.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
