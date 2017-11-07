"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const email_svc_1 = require("../services/email.svc");
const router = express_1.Router();
//actually api/contact
router.post("/", (req, res) => {
    email_svc_1.sendEmail(req.body.from, req.body.subject, req.body.message)
        .then((response) => {
        res.sendStatus(201);
    })
        .catch((e) => {
        console.log(e.response.body.errors);
        res.sendStatus(500);
    });
});
exports.default = router;
