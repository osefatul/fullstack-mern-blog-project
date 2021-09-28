const router = require("express").Router();
const User = require("../models/user");

//UPDATE
router.post("./:id", async (req, res) => {
  //check if the id in the parametter is is the same as the user is requesting from the body: req.body.
  if (req.body.userId === req.params.id) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

//DELETE
