"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
function getDogToys() {
    return db_1.rows("GetAllDogToys");
}
exports.getDogToys = getDogToys;
function getAllDogs() {
    return db_1.rows("GetAllDogs");
}
exports.getAllDogs = getAllDogs;
function getAllCats() {
    return db_1.row("GetAllCats");
}
exports.getAllCats = getAllCats;
function productsByCat(CatID) {
    return db_1.rows("ProductsByCategory", [CatID]);
}
exports.productsByCat = productsByCat;
function productsBySubCat(SubCatID) {
    return db_1.rows("ProductsBySubcategory", [SubCatID]);
}
exports.productsBySubCat = productsBySubCat;
