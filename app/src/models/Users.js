"use strict";

const UserStorage = require("./UserStorage");


class User {   
    constructor(body){
        this.body = body;
    }

    //await은 promise를 반환하는 애한테 주는 옵션
    //함수를 비동기 함수로 바꿔줘야함
    async login(){
        const client = this.body;
        try{
        const user = await UserStorage.getUserInfo(client.id);

    //스토리지에 있는 id, pw 값과 클라이언트가 입력한 값이 일치하는지 검증하는 로직
        if(user) {
            if (user === client.id && psword === client.psword){
                return { success: true };
                }
            return { success: false, msg: "비밀번호가 일치하지 않습니다."};
            }
        return { success: false, msg: "존재하지 않는 아이디입니다."};
        } catch(err){
            return { success: false, err };
        }
    }
    
    async register(){ 
        const client = this.body;
        try {
        const response = await UserStorage.save(client); 
        return response;
        }catch (err) {
        return { success: false, err };
        }
    }
}


//밖에서 파일을 사용할 수 있게 모듈 exports함.
module.exports = User;
