"use strict";

// 유저 스토리지 만들기 다시 복습하기 
// 이해가 잘 안됨


class UserStorage {
    static userList = [
        { id: 'ethan', psword: '1234', name: '기모찌' },
        { id: '이창민', psword: 'qwer', name: '레전드' },
        { id: '이성희', psword: 'qwer1234', name: '야메떼' },
        { id: '성진영', psword: '0216', name: '기모찌' },
    ]


    // 이렇게 객체를 구성해도 좋지만 그러면 배열에 너무 의존적이게 되어서 배열의 순서가 꼬인다든지 값이 빠졌을 떄 error catch가 하기가 힘듬
     static #users = {
        id: ["ethan", "이창민", "이성희"],
        psword: ["1234", "qwer", "qwer1234"],
        name: ["기모찌", "레전드", "야메떼"],
    };

    //...fieids 이거는 모든 인자들을 다 받는다는건데 직관적으로 뭐를 받는지 params를 정하면 좋지 않을까? 싶네
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers; 
    }


    // object array를 사용하면 이런식으로 내장 메소드를 사용하면 조금 더 단순하게 로직을 작성할수 있음 maybe
    static getUserById (id) {
        return this.userList.find(user => user.id === id)
    }


    // 위에가 아래거를 바꾼건데 id끼리 배열에 묶어두면 아래처럼 검색하기가 힘듬
    // 일단 객체를 배열로 바꾸는 Object.keys(), Object.entries(), Object.values()를 사용하기 시작하면 객체 --> 배열로 추출 요런 플로우가 나름 복잡할 수도 있다
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, pw, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    
    // 동작만 놓고 본다면 save보다 insert에 가까움 아래는 이제 Object Array를 사용했을 때 더 편하게? 값을 넣을 수 있다? 이런느낌
    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    }

    static insert(userInfo) {
        if(!userInfo) {
            return { success: false }
        }
        this.userList.push({ id: userInfo.id, name: userInfo.name, psword: userInfo.psword })
        //요기 userList는 내가 위에 구현한 object Array임
        return { success: false }
    }
}

module.exports = UserStorage;