angular
    .module("MyNewPet.factories", [])
    .factory("Product", [
        "$resource",
        function($resource) {
            return $resource(
                "/api/products/:id",
                {
                    id: "@id"
                },
                {
                    queryByCategory: {
                        method: "GET",
                        url: "/api/products/category/:categoryid",
                        isArray: true
                    },
                    queryBySubCategory: {
                        method: "GET",
                        url: "/api/products/category/subcategory/:subcategoryid",
                        isArray: true
                    }
                }
            )
        }
    ])
    .factory
    ;