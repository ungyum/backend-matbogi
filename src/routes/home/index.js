"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello); // 메인 페이지
router.get("/login", ctrl.login); // 로그인 화면

module.exports = router;
