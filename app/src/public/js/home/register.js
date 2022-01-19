"use strict";

//프론트 개발 로직  


const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#psword"),
    confirmPassword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    const req = {
        id: id.value, 
        name: name.value,
        psword: password.value,
        confirmPassword: confirmPassword.value,
    };

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
                location.href="/";
            }else{
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"));
        
        });

}

