import {row, rows} from "../config/db";

export function all(): Promise<Array<models.IProduct>>{
    return rows("AllProducts");
}

export function product(id: number): Promise<Array<models.IProduct>>{
    return row("ProductByID", [id]);
}

export function productsByCat(CatID: number): Promise<Array<models.IProduct>>{
    return rows("ProductsByCategory", [CatID]);
}

export function productsBySubCat(SubCatID: number): Promise<Array<models.IProduct>>{
    return rows("ProductsBySubcategory", [SubCatID]);
}