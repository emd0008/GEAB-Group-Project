"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
exports.pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_URL,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});
function callProcedure(procedureName, args = []) {
    return new Promise(function (resolve, reject) {
        exports.pool.getConnection(function (err, connection) {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                let placeholders = "";
                if (args && args.length > 0) {
                    for (let i = 0; i < args.length; i++) {
                        if (i === args.length - 1) {
                            placeholders += "?";
                        }
                        else {
                            placeholders += "?,";
                        }
                    }
                }
                let callString = "CALL " + procedureName + "(" + placeholders + ");";
                connection.query(callString, args, function (err, resultsets) {
                    connection.release();
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    else {
                        resolve(resultsets);
                    }
                });
            }
        });
    });
}
function rows(procedureName, args = []) {
    return callProcedure(procedureName, args).then(resultsets => {
        return resultsets[0];
    });
}
exports.rows = rows;
function row(procedureName, args = []) {
    return callProcedure(procedureName, args).then(resultsets => {
        return resultsets[0][0];
    });
}
exports.row = row;
function empty(procedureName, args = []) {
    return callProcedure(procedureName, args).then(() => {
        return;
    });
}
exports.empty = empty;
