import {row, rows} from "../config/db";

export function getDogToys(): Promise<Array<models.IProduct>>{
    return rows("GetAllDogToys");
}

export function getAllDogs(): Promise<Array<models.IProduct>> {
    return rows("GetAllDogs");
}

export function getAllCats(): Promise<Array<models.IProduct>>{
    return row("GetAllCats");
}

export function productsByCat(CatID: number): Promise<Array<models.IProduct>>{
    return rows("ProductsByCategory", [CatID]);
}

export function productsBySubCat(SubCatID: number): Promise<Array<models.IProduct>>{
    return rows("ProductsBySubcategory", [SubCatID]);
}

