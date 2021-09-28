const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//UPDATE
router.put("/:id", async (req, res) => {
  //check if the id in the URL parameter is the same as the user is requesting from the body:
  if (req.body.userId === req.params.id) {
    //if there is any password in the body.
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      //udpate the old password with the salt we defined
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      //find the user wiht the params.id and udpate everything of it with what is given in the body of request. and the new user credential should be shown to true in order to see it in the res.status(200).json(updatedUser)
      const userUpdated = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      //once it is set then:
      res.status(200).json(userUpdated);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("Wrong user ID, You can update only YOUR account !");
  }
});

//DELETE

module.exports = router;
