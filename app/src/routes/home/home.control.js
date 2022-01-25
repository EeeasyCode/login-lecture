"use strict";

const User = require("../../models/Users");
const logger = require("../../config/logger");

//get 메서드
const output = {
    root: (req, res) => {
        logger.info(`GET / 200 홈 화면으로 이동`);
        res.render("home/index");
    },

    login: (req, res) => {
        logger.info(`GET / 200 로그인 화면으로 이동`);
        res.render("home/login");
    },

    register: (req, res) => {
        logger.info(`GET / 200 회원가입 화면으로 이동` );
        res.render("home/register");
    }
        
};

//post 메서드
const process = {
    login: async (req, res) => {  
        const user = new User(req.body);
        const response = await user.login();
        if (response.err)
            logger.error(
                `POST /login 200 Response: "Success: ${response.success}, ${response.err}"` 
            );
        else
            logger.info(
                `POST /login 200 Response: "Success: ${response.success}, msg: ${response.msg}"`
            );    
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if (response.err)
            logger.error(
                `POST /login 200 Response: "Success: ${response.success}, ${response.err}"` 
            );
        else         
            logger.info(
                `POST /register 200 Response: "Success: ${response.success}, msg: ${response.msg}"`
            );    
        return res.json(response);      
    },
};

module.exports = {
    output,
    process,
};