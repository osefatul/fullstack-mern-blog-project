import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Settings.css";
import { useDispatch } from "react-redux";
import { selectUser, login } from "../../features/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";

function Settings() {
  const [file, setFile] = useState(null);
  const user = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    console.log(user.username);
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
        //thats how we upload our new profile picture in the storage that is defined in the api/index.js. a public static path for a directory named "images"
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    /*#########################################################################################
    THE MOST IMPORTANT PART OF THIS PAGE IS HOW TO UPDATE A LOGIN USER USING REDUX
    ########################################################################################
    */

    try {
      const res = await axios.put(
        "http://localhost:5000/api/users/" + user._id,
        updatedUser
      );

      dispatch(login(res.data));
      localStorage.setItem("userInfo", JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   localStorage.getItem("userInfo");
  // }, [user]);

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Accout</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form action="" className="settingsForm" onSubmit={handleSubmit}>
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img className="" src={PF + user.profilePic} alt="" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
          />
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
