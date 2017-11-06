"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const products_ctrl_1 = require("./controllers/products.ctrl");
const contact_ctrl_1 = require("./controllers/contact.ctrl");
const payment_ctrl_1 = require("./controllers/payment.ctrl");
const router = express.Router();
router
    .use("/products", products_ctrl_1.default)
    .use("/contactform", contact_ctrl_1.default)
    .use("/payment", payment_ctrl_1.default);
//.use("/users", users);
exports.default = router;
