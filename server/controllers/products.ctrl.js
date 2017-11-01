"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const procedures = require("../procedures/products.proc");
let router = express.Router();
router.route("/").get((req, res) => {
    procedures.all()
        .then(products => {
        res.send(products);
    })
        .catch(err => {
        res.sendStatus(500);
    });
});
router.route("/category/:CatID").get((req, res) => {
    procedures.productsByCat(req.params.CatID)
        .then(products => {
        res.send(products);
    })
        .catch(err => {
        res.sendStatus(500);
    });
});
router.route("/:id").get((req, res) => {
    procedures.product(req.params.id)
        .then(product => {
        res.send(product);
    })
        .catch(err => {
        res.sendStatus(500);
    });
});
exports.default = router;
