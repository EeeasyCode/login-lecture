"use strict";

const UserStorage = require("./UserStorage");


class User {   
    constructor(body) {
        // body가 뭐를 정확히 의미하는지 몰라서 직관적으로 parameter 네이밍을 해주면 좋을듯?
        // 아래에서 3번 선언된거 constructor내에서 한번선언해서 가져다 쓰면 좋을듯 함
        this.client = body.client
        // -

        this.body = body;
    }

    loginV2() {
        const user = UserStorage.getUserByLoginData(this.client.id)

        if (!user) return { success: false, msg: '존재하지 않는 아이디입니다.' }
        if (user.psword !== this.client.psword) return { success: false, msg: '비밀번호가 일치하지 않습니다.' }

        return { success: true }
    }

    login() {
        // 여기도 마찬가지임 위의 loginV2를 참고하면 좋을 듯 함
        // const client = this.body;
        const { id, psword } = UserStorage.getUserInfo(this.client.id);
        

    //스토리지에 있는 id, pw 값과 클라이언트가 입력한 값이 일치하는지 검증하는 로직
        if(id) {
            if (id === this.client.id && psword === this.client.psword) return { success: true };
            return { success: false, msg: "비밀번호가 일치하지 않습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."};
    }
    
    register() {
        //위에서 constructor로 선언해서 가져다 쓰면 이렇게 const 변수로 다시 선언할 필요가 없음 const client가 3번이 선언되었는데 다 같은 값이라 constructor에 선언해도 됨
        // const client = this.body;
        const response = UserStorage.save(this.client.id); 
        return response;
    }
}


//밖에서 파일을 사용할 수 있게 모듈 exports함.
module.exports = User;
