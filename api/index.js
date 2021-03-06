const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
//Routes
const authRoute = require("./routes/auths");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

dotenv.config();

//This code snippet, however, would enable CORS for all resources on your server.

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/api/auths", authRoute);
app.use("/api/users/", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

//Create a storage for uploading file
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    //filename will be sent to react application so it will be taken from a user written in the body. basically we can't use body here for now
    callback(null, req.body.name);

    //callback(null, "hello.jpg");
  },
});

const upload = multer({ storage: storage });
//we are uploading one file and it name will be "file"
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded successfully");
});

// activating the listennign of the server
app.listen("5000", () => {
  console.log("backend is running");
});
