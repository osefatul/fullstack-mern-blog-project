import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://i.pinimg.com/originals/82/8e/09/828e09c5a638731106c83a6f71d9fd0c.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, labore atque accusamus ratione esse aliquid rem error earum, quis est mollitia suscipit quae, saepe harum magni et placeat ipsa perferendis.</p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
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
  )
}

export default Sidebar 