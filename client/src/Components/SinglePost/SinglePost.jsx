import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./SinglePost.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function SinglePost() {
  const location = useLocation();
  //console.log(location.pathname.split("/")[2]); //get the id from the link
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const user = useSelector(selectUser);
  const PF = "http://localhost:5000/images/";
  console.log(post.username === user?.username);
  console.log(post._id);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      //console.log(res.data);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  // const handleEdit = async () => {};

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/"); //check out Post.jsx file for this link
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          {/* Edit and Delete button */}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}

export default SinglePost;
