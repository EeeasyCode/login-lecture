"use strict";

//유저 스토리지 만들기 다시 복습하기 
//이해가 잘 안됨


class UserStorage {
     static #users = {
        id: ["ethan", "이창민", "이성희"],
        psword: ["1234", "qwer", "qwer1234"],
        names: ["기모찌", "레전드", "야메떼"],
    };

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
}

module.exports = UserStorage;