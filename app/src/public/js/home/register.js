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
  // 값 입력 확인
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      return alert(`${inputs[i].placeholder} 값을 입력하세요`);
    }
  }
  // 비밀번호 다른지 확인
  if (pwInput.value !== confirmPwInput.value) {
    return alert("비밀번호가 일치하지 않습니다.");
  }
  // post할 정보 담기
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
