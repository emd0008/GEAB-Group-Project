angular
  .module("MyNewPet.controllers", ["ngRoute"])
  .controller("WelcomeController", [])
  .controller("AnimalsController", [
    "$scope",
    "$location",
    "$resource",
    function($scope, $location, $resource) {}
  ])
  .controller("SingleAnimalController", [
    "$scope",
    "$location",
    "$resource",
    function($scope, $location, $resource) {}
  ])
  .controller("ProductsController", [
    "$scope",
    "$location",
    "$resource",
    "Products",
    function($scope, $location, $resource, Products) {
      function getProducts(){
        $scope.products = Products.query();
      }
      getProducts();
    }
  ])
  .controller("SingleProductController", [
    "$scope",
    "$location",
    "$resource",
    "$routeParams",
    "SingleProduct",
    function($scope, $location, $resource, $routeParams, SingleProduct) {
      $scope.product = SingleProduct.get({id: $routeParams.id});
    }
  ])
  .controller("ApplyController", [
    "$scope",
    "$location",
    "$resource",
    function($scope, $location, $resource) {}
  ])
  .controller("ContactController", [
    "$scope",
    "$resource",
    function($scope, $resource) {}
  ])
  .controller("SummaryController", [
    "$scope",
    "$resource",
    function($scope, $resource) {}
  ])
  .controller("CheckoutController", [
    "$scope",
    "Payment",
    function($scope, Payment) {
      let elements = stripe.elements();
      let card = elements.create("card");
      card.mount("#card-number");
      $scope.process = function() {
        stripe.createToken(card).then(result => {
          if (result.error) {
            $scope.error = result.error.message;
          } else {
            let p = new Payment({
              token: result.token.id,
              amount: $scope.amount
            });

            p.$save(
              function() {
                $location.path("/");
              },
              function(err) {
                $scope.error = err.data;
              }
            );
          }
        });
      };
    }
  ])
  .controller("LoginController", ["$scope", function($scope) {}]);
