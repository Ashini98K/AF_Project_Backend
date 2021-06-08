const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongo = require("mongoose");
//var mongoUri = require('mongo');
const UserModel = require("./models/user-model");
const userApi = require("./IT19136134/controllers/user-controller");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

mongo.connect(
  "mongodb+srv://root:root@cluster0.pikdq.mongodb.net/icafDB?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

mongo.connection.once("open", function () {
  console.log("Mongo db connected");
});

app.route("/").get((req, res) => {
  res.send("SLIIT AF FINAL API");
});

//change only here
app.use("/user", userApi());

var server = app.listen(5000, function () {
  console.log("Node server is running..");
});
