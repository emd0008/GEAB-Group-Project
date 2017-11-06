"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const procedures = require("../procedures/users.proc");
let router = express.Router();
router.get('/', (req, res) => {
    procedures.all()
        .then((users) => {
        res.send(users);
    }, (err) => {
        res.status(500).send(err);
    });
});
exports.default = router;
