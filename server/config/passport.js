"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const session = require("express-session");
let MySQLStore = require("express-mysql-session")(session);
const passport_local_1 = require("passport-local");
const userProc = require("../procedures/users.proc");
const db_1 = require("./db");
const utils = require("../utils");
function configurePassport(app) {
    passport.use(new passport_local_1.Strategy({
        usernameField: "email",
        passwordField: "password"
    }, (email, password, done) => {
<<<<<<< HEAD
        let loginError = 'Invalid Login Credentials';
        userProc.readByEmail(email).then((user) => {
=======
        userProc.readByEmail(email).then(user => {
>>>>>>> 776ac61111c9dc3f966576087f141ae23bba7d3c
            if (!user) {
                return done(null, false, { message: loginError });
            }
<<<<<<< HEAD
            return utils.checkPassword(password, user.password)
                .then((matches) => {
                if (matches) {
                    delete user.password;
                    return done(null, user);
                }
                else {
                    return done(null, false, { message: loginError });
                }
            });
        }).catch((err) => {
=======
            if (user.password !== password) {
                return done(null, false, { message: "Nope!" });
            }
            return done(null, user);
        }, err => {
>>>>>>> 776ac61111c9dc3f966576087f141ae23bba7d3c
            return done(err);
        });
    }));
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        userProc.read(id).then(user => {
            done(null, user);
        }, err => {
            done(err);
        });
    });
    let sessionStore = new MySQLStore({
        createDatabaseTable: true
    }, db_1.pool);
    app.use(session({
        secret: "dgpuueFmsoEq",
        store: sessionStore,
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}
exports.default = configurePassport;
