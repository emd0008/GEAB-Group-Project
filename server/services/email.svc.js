"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
function sendEmail(from, subject, body) {
    const msg = {
        to: "BKB4979@gmail.com",
        from: from,
        subject: subject,
        html: body
    };
    return sgMail.send(msg);
}
exports.sendEmail = sendEmail;
