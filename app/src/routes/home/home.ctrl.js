"use strict";

const User = require("../../models/User.js");

// 단순히 html을 넘겨주는 부분
const output = {
  // 메인 페이지
  hello: (req, res) => {
    res.render("home/index");
  },
  // 로그인 화면
  login: (req, res) => {
    res.render("home/login");
  },
  // 회원가입 화면
  register: (req, res) => {
    res.render("home/register");
  },
};

// API들, 클라이언트의 요청값으로 뭔가 프로세싱을 하는 부분들
const process = {
  // 로그인 버튼 눌렀을 때
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
