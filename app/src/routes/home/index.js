"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.control");

router.get("/", ctrl.output.root);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;