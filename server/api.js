"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const products_ctrl_1 = require("./controllers/products.ctrl");
const contact_ctrl_1 = require("./controllers/contact.ctrl");
const router = express.Router();
router.use("/products", products_ctrl_1.default).use("/contactform", contact_ctrl_1.default);
exports.default = router;
