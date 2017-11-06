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
        {
          id: "@id"
        },
        {
          queryBySubcategory: {
            method: "GET",
            url: "/api/products/subcategory/:SubCatId",
            isArray: true
          }
        }
      );
    }
  ]);
//   .factory("Animals", [
//     "$resource",
//     function($resource) {
//       return $resource(
//           "/api/products/subcategory/:subcategoryid",
//           {
//         id: "@id"
//       }, {
//           queryBySubcategory: {
//               method: "GET",
//               url: "/api/products/subcategory/:subcategoryid",
//               isArray: true
//           }
//       }
//     );
//     }
//   ])
