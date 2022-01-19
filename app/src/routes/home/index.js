"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.control");

router.get("/", ctrl.output.root);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;