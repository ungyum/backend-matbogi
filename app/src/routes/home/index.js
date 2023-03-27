"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello); // 메인 페이지
router.get("/login", ctrl.output.login); // 로그인 화면
router.get("/register", ctrl.output.register); // 회원가입 화면

router.post("/login", ctrl.process.login); // 로그인 화면

module.exports = router;
