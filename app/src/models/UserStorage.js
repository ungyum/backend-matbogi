"use strict";

class UserStorage {
  // DB 느낌내기 ㅎㅎ
  static #users = [
    {
      id: "asdf",
      pw: "qwer",
    },
    {
      id: "haha",
      pw: "jaja",
    },
  ];

  static getUser(id) {
    return this.#users.find((i) => i.id === id);
  }
}

module.exports = UserStorage;
