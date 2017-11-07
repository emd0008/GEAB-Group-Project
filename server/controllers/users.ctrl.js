"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const procedures = require("../procedures/users.proc");
const auth = require("../middleware/auth.mw");
let router = express.Router();
router.get('/', (req, res) => {
    procedures.all()
        .then((users) => {
        res.send(users);
    }, (err) => {
        res.status(500).send(err);
    });
});
router.get('/', auth.isLoggedIn, (req, res) => {
});
exports.default = router;
