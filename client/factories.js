angular.module("MyNewPet.factories", [])

.factory("ContactForm", ["$resource", function($resource) {
    return $resource("/api/contactform/:id", { id: "@id" });
  }
])
.factory("Payment", ["$resource", function($resource){
  return $resource("/api/payments/:id", { id: '@id' });
}])
.factory("Products", ["$resource", function($resource) {
  return $resource("/api/products/:id",{ id: "@id" },
    { queryBySubcategory: {
      method: "GET",
      url: "/api/products/subcategory/:SubCatId",
      isArray: true
    }
  })
}])

.factory ('User', ['$resource', function ($resource) {
  return $resource ('api/users/:id', {id: '@id'} )
}]);

  

