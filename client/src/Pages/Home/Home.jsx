import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";
function Home() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    //make sure you added proxy in the package.json
    const res = await axios.get("http://localhost:5000/api/posts");

    //console.log(res);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
