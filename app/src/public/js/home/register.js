"use strict";

//프론트 개발 로직  


// sjy -> 이거는 직관적으로 const로 선언해주는 것이 좋을듯 함
const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#psword"),
    confirmPassword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");
registerBtn.addEventListener("click", register);

function register(){
    if (!id.value) return alert("아이디를 입력해주십시오.");
    if (password.value !== confirmPassword) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        name: name.value,
        psword: password.value,
    };
    console.log(req);

    fetch("/register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success){
                location.href="/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
            console.err(err) // console err로 fetch의 에러가 뭔지 알면 디버깅할때 조금 편함
        });

}

