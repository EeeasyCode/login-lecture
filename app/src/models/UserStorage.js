"use strict";

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
}

module.exports = UserStorage;