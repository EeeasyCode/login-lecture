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

    static #getUsers(data, isAll ,fields){
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers; 


    }

    static getUsers(isAll, ...fields){
        return fs
        .readFile("./src/DB/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);
    }

    static getUserInfo(id) {
  
            return fs
                .readFile("./src/DB/users.json")
                .then((data) => {
                    return this.#getUserInfo(data, id);
                })
                .catch(console.error);
    }
    

    static async save(userInfo){
        const users = await this.getUsers(true);
        //데이터 추가
        if (users.id.includes(userInfo)) {
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile( "./src/DB/users.json", JSON.stringify(users));  
        return { success: ture };

    }
}

module.exports = UserStorage;   