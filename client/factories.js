angular
  .module("MyNewPet.factories", [])
  .factory("ContactForm", [
    "$resource",
    function($resource) {
      return $resource("/api/contactform/:id", { id: "@id" });
    }
  ])
  .factory("Products", [
    "$resource",
    function($resource) {
      return $resource(
        "/api/products/:id",
        { id: "@id" },
        {
          queryByCategory: {
            method: "GET",
            url: "/api/products/category/:categoryid",
            isArray: true
          },
          queryBySubcategory: {
            method: "GET",
            url: "/api/products/",
            isArray: true
          }
        }
      );
    }
  ])
  .factory("Animals", [
    "$resource",
    function($resource) {
      return $resource(
        "/api/animals/:id",
        { id: "@id " },
        {
          queryBySubcategory: {
            method: "GET",
            url: "/api/animals/subcategory/:subcategoryid",
            isArray: true
          }
        }
      );
    }
  ]);
