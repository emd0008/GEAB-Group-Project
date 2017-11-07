"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
function read(id) {
    return db_1.row("ProductByID", [id]);
}
exports.read = read;
function productsByCat(CatID) {
    return db_1.rows("ProductsByCategory", [CatID]);
}
exports.productsByCat = productsByCat;
function productsBySubCat(SubCatID) {
    return db_1.rows("ProductsBySubcategory", [SubCatID]);
}
exports.productsBySubCat = productsBySubCat;
