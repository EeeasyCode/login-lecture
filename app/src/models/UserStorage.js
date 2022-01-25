"use strict";

//유저 스토리지 만들기 다시 복습하기 
//이해가 잘 안됨

const db = require("../config/db");

class UserStorage {

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id],(err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
            
        });
    }
    

    static async save(userInfo){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(
                query,
                [userInfo.id, userInfo.name, userInfo.psword],
                (err) => {
                    if (err) reject(`${err}`);
                    else resolve({ success: true });
                }
            );
                
            
        });
    }

}

module.exports = UserStorage;   