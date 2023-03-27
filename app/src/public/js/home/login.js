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

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((r) => r.json())
    .then((j) => {
      if (j.success === true) {
        location.href = "/";
      } else {
        alert(j.msg);
      }
    })
    .catch((err) => {
      console.err(new Error(err));
    });
}
