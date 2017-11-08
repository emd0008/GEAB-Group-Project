"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
<<<<<<< HEAD
function createUser(firstName, lastName, email, hash) {
    return db_1.row('CreateUser', [firstName, lastName, email, hash]);
=======
function createUser(email, hash) {
    return db_1.row('CreateUser', [email, hash]);
>>>>>>> 776ac61111c9dc3f966576087f141ae23bba7d3c
}
exports.createUser = createUser;
function readByEmail(email) {
    return db_1.row('GetUserByEmail', [email]);
}
exports.readByEmail = readByEmail;
function all() {
    return db_1.rows('GetUsers');
}
exports.all = all;
function read(id) {
    return db_1.row('GetUser', [id]);
}
exports.read = read;
function create(email, hash, firstName, lastName) {
    return db_1.row('InsertUser', [firstName, lastName, email, hash]);
}
exports.create = create;
