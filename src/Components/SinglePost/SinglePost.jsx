import React from "react";
import "./SinglePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://c4.wallpaperflare.com/wallpaper/123/449/77/5bd48d091dc95-wallpaper-preview.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem Ipsum Dollor sit amet
          <div className="singlePostEdit">
            <i class="singlePostIcon far fa-edit"></i>
            <i class="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Sefat</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          voluptates totam accusamus natus modi quo nulla ipsa dicta a iste
          excepturi debitis eligendi omnis, hic, quos, nisi explicabo
          necessitatibus. Atque! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat voluptates totam accusamus natus modi quo
          nulla ipsa dicta a iste excepturi debitis eligendi omnis, hic, quos,
          nisi explicabo necessitatibus. Atque! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat voluptates totam accusamus natus
          modi quo nulla ipsa dicta a iste excepturi debitis eligendi omnis,
          hic, quos, nisi explicabo necessitatibus. Atque! Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Fugiat voluptates totam
          accusamus natus modi quo nulla ipsa dicta a iste excepturi debitis
          eligendi omnis, hic, quos, nisi explicabo necessitatibus. Atque!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
