angular.module("MyNewPet.factories", []).factory("ContactForm", [
  "$resource",
  function($resource) {
    return $resource("/api/contactform/:id", { id: "@id" });
  }
]);
