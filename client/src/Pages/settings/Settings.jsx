import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Settings.css";
import afg from "../../afg.jpg";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";
function Settings() {
  const [file, setFile] = useState(null);
  const user = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //create a new post
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name; // this is good for an id of a file
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("http://localhost:5000/api/upload", data); //thats where we upload our new post
      } catch (err) {
        console.log(err);
      }
    }
    try {
      //after uploading the newpost to the posts we then should be directed to single post
      const res = await axios.put("http://localhost:5000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id); //check out Post.jsx file for this link
    } catch (err) {
      console.log(err);
    }
  };

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
            <img className="" src={user.profilePic} alt="" />
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
