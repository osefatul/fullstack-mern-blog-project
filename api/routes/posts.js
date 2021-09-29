const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE
router.post("/", async (req, res) => {
  // in order to create a new post we have to create a new object for the post. we will get in the object everthing is in the body of the request.
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("you can UPDATE only YOUR POST !");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        //directyl delete the post
        await post.delete();
        res.status(200).json("Post has been deleted successfully");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("you can DELETE only YOUR POST !");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET one Post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET all post
router.get("/", async (req, res) => {
  // ?user = <any name> this is how we query in the params
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    // we are using this bevause we want it to be changeable
    let posts;

    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      //look up this categories array and inside if you find this catName then return this posts
      posts = await Post.find({ categories: { $in: [catName] } });
    } else {
      //just find all posts
      posts = await Post.find({});
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
