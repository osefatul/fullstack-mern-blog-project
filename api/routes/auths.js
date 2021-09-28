const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTRATION
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    // The findOne() function is used to find one document according to the condition. If multiple documents match the condition, then it returns the first document satisfying the condition.
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong Credential !"); // if there is not user found

    //compare the hashed stored password with the password that has been written in the body by user
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong Credential !"); // passwords dont matching

    //if we want to send everything except password:
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
