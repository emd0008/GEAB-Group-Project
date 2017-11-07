"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 12;
function encryptPassword(pw) {
    return bcrypt.hash(pw, SALT_ROUNDS);
}
exports.encryptPassword = encryptPassword;
function checkPassword(pw, hash) {
    return bcrypt.compare(pw, hash);
}
exports.checkPassword = checkPassword;
