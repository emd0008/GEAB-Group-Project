"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const passport = require("passport");
const procedures = require("../procedures/users.proc");
const auth = require("../middleware/auth.mw");
const utils = require("../utils");
let router = express.Router();
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        if (!user) {
            return res.status(401).send(info);
        }
        req.logIn(user, (err) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            else {
                delete user.password;
                return res.send(user);
            }
        });
    })(req, res, next);
});
router.get('/', (req, res) => {
    procedures.all()
        .then((users) => {
        res.send(users);
    }, (err) => {
        console.log(err);
        res.status(500).send(err);
    });
});
router.post('/', (req, res) => {
    utils.encryptPassword(req.body.password)
        .then((hash) => {
        return procedures.createUser(req.body.email, hash);
    }).then((id) => {
        res.send(id);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
router.all('*', auth.isLoggedIn);
router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(() => {
            req.logOut();
            res.sendStatus(204);
        });
    }
});
router.route('/').get(auth.isAdmin, (req, res) => {
    procedures.all()
        .then((users) => {
        res.send(users);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
}).post(auth.isAdmin, (req, res) => {
    utils.encryptPassword(req.body.password)
        .then((hash) => {
        return procedures.createUser(req.body.email, hash);
    }).then((id) => {
        res.status(201).send(id);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
router.get('/me', (req, res) => {
    res.send(req.user);
});
router.route(':/id').get(auth.isAdmin, (req, res) => {
    procedures.read(req.params.id)
        .then((user) => {
        res.send(user);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
exports.default = router;
