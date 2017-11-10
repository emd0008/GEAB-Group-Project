"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const products_ctrl_1 = require("./controllers/products.ctrl");
const contact_ctrl_1 = require("./controllers/contact.ctrl");
const payments_ctrl_1 = require("./controllers/payments.ctrl");
const users_ctrl_1 = require("./controllers/users.ctrl");
const router = express.Router();
router
    .use("/products", products_ctrl_1.default)
    .use("/contactform", contact_ctrl_1.default)
    .use("/payments", payments_ctrl_1.default)
    .use("/users", users_ctrl_1.default);
exports.default = router;
