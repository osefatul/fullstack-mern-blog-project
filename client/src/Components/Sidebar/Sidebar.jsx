import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [cats, setCats] = useState([]);

  const getCats = async () => {
    const res = await axios.get("http://localhost:5000/api/categories");
    setCats(res.data);
  };
  useEffect(() => {
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="http://farmgirlmarketingsolutions.com/wp-content/uploads/2015/12/blog-pic-b2c.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          labore atque accusamus ratione esse aliquid rem error earum, quis est
          mollitia suscipit quae, saepe harum magni et placeat ipsa perferendis.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link">
              <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
