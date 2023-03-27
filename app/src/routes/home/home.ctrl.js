"use strict";

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

// DB 느낌내기 ㅎㅎ
const users = [
  {
    id: "asdf",
    pw: "qwer",
  },
  {
    id: "haha",
    pw: "jaja",
  },
];

const process = {
  login: (req, res) => {
    let reqData = req.body;
    let userFound = users.find((i) => i.id === reqData.id);
    if (userFound != null) {
      // 회원확인 됨
      if (userFound.pw === reqData.pw) {
        return res.json({
          success: true,
        });
      } else {
        return res.json({
          success: false,
          msg: "비밀번호가 틀렸습니다.",
        });
      }
    } else {
      return res.json({
        success: false,
        msg: "회원 정보가 없습니다.",
      });
    }
  },
};

module.exports = {
  output,
  process,
};
