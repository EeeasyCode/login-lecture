"use strict";

const UserStorage = require("./UserStorage");


class User {   
    constructor(body){
        this.body = body;
    }

    login(){
        const body = this.body;
        const { id, psword } = UserStorage.getUserInfo(body.id);

    //스토리지에 있는 id, pw 값과 클라이언트가 입력한 값이 일치하는지 검증하는 로직
        if(id) {
            if (id === body.id && psword === body.psword){
                return { success: true };
                }
            return { success: false, msg: "비밀번호가 일치하지 않습니다."};
            }
        return { success: false, msg: "존재하지 않는 아이디입니다."};
    }
    
}


//밖에서 파일을 사용할 수 있게 모듈 exports함.
module.exports = User;
