"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
function productsBySubCat(SubCatID) {
    return db_1.rows("ProductsBySubcategory", [SubCatID]);
}
exports.productsBySubCat = productsBySubCat;
