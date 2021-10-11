import axios from "axios";
import React, { useState } from "react";
import "./Write.css";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const user = useSelector(selectUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //create a new post
    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name; // this is good for an id of a file
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("http://localhost:5000/api/upload", data); //thats where we upload our new post
      } catch (err) {
        console.log(err);
      }
    }
    try {
      //after uploading the newpost to the posts we then should be directed to single post
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id); //check out Post.jsx file for this link
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write">
      {file && <img className="writeImg" src={URL.createObjectURL(file)} />}
      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class=" writeIcon fas fa-plus"></i>
          </label>

          {/*as we imported label symbol, we will hide the input */}
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          {/*autofocus: when we refresh the page it will automatically focus on this input */}
          <input
            type="text"
            placeholder="Title"
            class="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
