const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://mongo:27017/mydb");

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(5000, () => console.log("Backend running on port 5000"));
