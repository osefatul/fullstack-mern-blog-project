import React from 'react'
import "./Post.css"
function post() {
  return (
    <div className="post">
      <img className="postImg" src="https://c4.wallpaperflare.com/wallpaper/434/522/370/afghanistan-mosque-landscape-wallpaper-preview.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <p className="postTitle">
          Lorem ipsum dolor
        </p>
        <hr />
        <p className="postDate">1 hour ago</p>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus quia corporis enim ad? Dolore, porro rerum amet unde animi minus veniam dolorum quod debitis illum facilis, iusto, dolorem dicta.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus quia corporis enim ad? Dolore, porro rerum amet unde animi minus veniam dolorum quod debitis illum facilis, iusto, dolorem dicta.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus quia corporis enim ad? Dolore, porro rerum amet unde animi minus veniam dolorum quod debitis illum facilis, iusto, dolorem dicta.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus quia corporis enim ad? Dolore, porro rerum amet unde animi minus veniam dolorum quod debitis illum facilis, iusto, dolorem dicta.
        </p>
      </div>
    </div>
  )
}

export default post
