"use strict";

const idInput = document.getElementById("id"),
  pwInput = document.getElementById("pw"),
  loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", login);
function login() {
  const req = {
    id: idInput.value,
    pw: pwInput.value,
  };
  console.log(req);
}
