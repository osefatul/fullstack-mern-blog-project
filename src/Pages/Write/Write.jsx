import React from "react";
import "./Write.css";

function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://c4.wallpaperflare.com/wallpaper/952/714/565/escarpment-natural-dam-bamyan-afghanistan-wallpaper-preview.jpg"
        alt=""
      />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class=" writeIcon fas fa-plus"></i>
          </label>

          {/*as we imported label symbol, we will hide the input */}
          <input type="file" id="fileInput" style={{ display: "none" }} />

          {/*autofocus: when we refresh the page it will automatically focus on this input */}
          <input
            type="text"
            placeholder="Title"
            class="writeInput"
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;