"use strict";

//modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");


//routing
const home = require("./src/routes/home")

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use("/", home); //use -> 미들웨어를 등록해주는 메서드

module.exports = app;  