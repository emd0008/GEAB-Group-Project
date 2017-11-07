declare namespace models{
    interface IResponse{
        id: number;
    }

    interface IProduct{
        id: number;
        name: string;
        description: string;
        price: number;
        imageurl: string;
        SubCatID: number;
        subcategory: string;
        CatID: number;
        category: string;
    }

    interface ICategory{
        id: number;
        name: string;
    }

    interface ISubCategory{
        id: number;
        name: string;
        CatID: number;
        category: string;
    }
    interface IUser {
        id: number;
        email: string;
        password: string;
    }
}