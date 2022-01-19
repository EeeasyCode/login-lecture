"use strict";

//modules
const express = require("express");
const app = express();


//routing
const home = require("./routes/home")

//app setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use -> 미들웨어를 등록해주는 메서드

module.exports = app; 

