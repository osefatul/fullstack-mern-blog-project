const express = require("express");
const app = express();

//Import the library from the dotenec so we can hide the url we are using for the http
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auths");

dotenv.config();

//express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());
app.use("/api/auths", authRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

// activating the listennign of the server
app.listen("5000", () => {
  console.log("backend is running");
});
