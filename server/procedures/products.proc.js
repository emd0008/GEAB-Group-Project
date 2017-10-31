"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
function all() {
    return db_1.rows("AllProducts");
}
exports.all = all;
function product(id) {
    return db_1.row("ProductByID", [id]);
}
exports.product = product;
function productsByCat(CatID) {
    return db_1.rows("ProductsByCategory", [CatID]);
}
exports.productsByCat = productsByCat;
function productsBySubCat(SubCatID) {
    return db_1.rows("ProductsBySubcategory", [SubCatID]);
}
exports.productsBySubCat = productsBySubCat;
