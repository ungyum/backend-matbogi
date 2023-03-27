"use strict";

// 오토컴플리트 끄기
const inputs = document.querySelectorAll("input");
inputs.forEach((e) => (e.autocomplete = "off"));

const idInput = document.getElementById("id"),
  pwInput = document.getElementById("pw"),
  confirmPwInput = document.getElementById("confirmPw"),
  nicknameInput = document.getElementById("nickname"),
  registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", register);
function register() {
  const userInfo = {
    id: idInput.value,
    pw: pwInput.value,
    confirmPw: confirmPwInput.value,
    nickname: nicknameInput.value,
  };
  postUserInfo(userInfo);
}

const postUserInfo = async (userInfo) => {
  try {
    // req 담아서 post 보내기
    const res = await (
      await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
    ).json();
    // 아래에 res 가지고 뭐할지 작성
    console.log(res);
  } catch (err) {
    console.err(new Error(err));
  }
};
