import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Settings.css";
import afg from "../../afg.jpg";
function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Accout</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form action="" className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img
              className=""
              src="https://www.wagrati.eu/media/images/flagge-afghanistan-1400x933.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Sefat" />
          <label htmlFor="">Email</label>
          <input type="text" placeholder="sefat@gmai.com" />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="" />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
