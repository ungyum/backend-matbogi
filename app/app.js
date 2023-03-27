"use strict";

// 모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); // 이렇게 해 놔야 렌더가 js랑 css를 읽을 수 있음. 그리고 디렉토리를 public으로 설정해줘서 script src에 바로 js/home 처럼 쓰면 됨. 브라우저의 요청에 따라 꺼내줄 수 있는 파일이기 때문에 public안에 들어가는듯
app.use(bodyParser.json()); // bodyParser 설치 후 사용하기
app.use(bodyParser.urlencoded({ extended: true })); // 한글 인코딩 문제 해결

// 라우팅
app.use("/", home); // use는 미들웨어를 등록해주는 메소드

module.exports = app;
