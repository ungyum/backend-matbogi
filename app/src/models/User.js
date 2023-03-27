"use strict";

const UserStorage = require("./UserStorage.js");

class User {
  constructor(body) {
    this.id = body.id;
    this.pw = body.pw;
  }

  login() {
    const id = this.id,
      pw = this.pw;
    const userFound = UserStorage.getUser(id);

    const response = {};
    if (userFound != null) {
      // 일단 아이디는 있음
      if (userFound.pw === pw) {
        response.success = true;
        return response; // POST 요청이 왔을 때 서버에서 실행하는 함수로. response로 json(response)를 보내는거임
      } else {
        response.success = false;
        response.msg = "비밀번호가 틀렸습니다.";
        return response;
      }
    } else {
      // 아이디가 없음
      response.success = false;
      response.msg = "회원 정보가 없습니다.";
      return response;
    }
  }
}

module.exports = User;
