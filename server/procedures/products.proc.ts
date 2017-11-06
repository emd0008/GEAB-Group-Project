import {row, rows} from "../config/db";

export function productsBySubCat(SubCatID: number): Promise<Array<models.IProduct>>{
    return rows("ProductsBySubcategory", [SubCatID]);
}

