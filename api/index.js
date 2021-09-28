const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Routes
const authRoute = require("./routes/auths");
const userRoute = require("./routes/users");

dotenv.config();

//express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());
app.use("/api/auths", authRoute);
app.use("/api/users/", userRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

// activating the listennign of the server
app.listen("5000", () => {
  console.log("backend is running");
});
