"use strict";

//프론트 개발 로직  


const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#psword");
const confirmPassword = document.querySelector("#confirm-psword");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    if (!id.value) return alert("아이디를 입력해주십시오.");
    if (password.value !== confirmPassword.value) 
    return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value, 
        name: name.value,
        psword: password.value,
    };
   

    //promise 반환
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
            }else{
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });

}

