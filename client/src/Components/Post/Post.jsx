import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

function post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => (
            <span className="postCat">{category.name}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <p className="postTitle">{post.title}</p>
        </Link>
        <hr />
        <p className="postDate">{new Date(post.createdAt).toDateString()}</p>
        <p className="postDesc">{post.desc}</p>
      </div>
    </div>
  );
}

export default post;
