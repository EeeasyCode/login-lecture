"use strict";

//유저 스토리지 만들기 다시 복습하기 
//이해가 잘 안됨

const fs = require("fs").promises;

class UserStorage {

    //프라이빗한 변수나 메서드는 클래스의 최상단으로 
    static #getUserInfo(data,id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, pw, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
    return userInfo;
    }

    static getUsers(...fields){
       // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers; 
    }

    static getUserInfo(id) {
  
            return fs.readFile("./src/DB/users.json")
                .then((data) => {
                    return this.#getUserInfo(data, id);
                })
                .catch(console.error);
    }
    

    static save(userInfo){
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage;