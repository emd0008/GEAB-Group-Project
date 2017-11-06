angular
  .module("MyNewPet.controllers", ["ngRoute"])
  .controller("AnimalsController", [
    "$scope",
    "$location",
    "$resource",
    "Products",
    "$routeParams",
    function($scope, $location, $resource, Products, $routeParams) {
      $scope.animals = Products.queryBySubcategory({
        SubCatId: $routeParams.subcategoryid
      });
      console.log($scope.animals);
    }
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
    "$routeParams",
    function($scope, $location, $resource, Products, $routeParams) {
      $scope.products = Products.queryBySubcategory({
        id: $routeParams.id
      });
      console.log($scope.products);
    }
  ])
  // .controller("SingleProductController", [
  //     "$scope",
  //     "$location",
  //     "$resource",
  //     "$routeParams",
  //     "Products",
  //     function($scope, $location, $resource, $routeParams, Products) {
  //         $scope.product = Products.get({ id: $routeParams.id });
  //     }
  // ])
  // .controller("SubCatController", ["$scope", "$location", "$routeParams", "Products", function($scope, $location, $resource, $routeParams, SubCategory) {
  //     // You'll need the Product(s)  factory pulled in here
  //     // this controller is in charge of getting a list of all products with a given subcategory
  //     $scope.products = Products.queryBySubcategory({ subcategoryid: $routeParams.id });
  // }])
  // .controller("ApplyController", [
  //     "$scope",
  //     "$location",
  //     "$resource",
  //     function($scope, $location, $resource) {}
  // ])
  .controller("ContactController", [
    "$scope",
    "ContactForm",
    "$location",
    function($scope, ContactForm, $location) {
      $scope.send = function() {
        let contact = new ContactForm({
          from: $scope.from,
          subject: $scope.subject,
          message: $scope.message
        });

        //makes a POST request to /api/contactform with a body with properties from and message
        contact.$save(
          function() {
            alert(
              "Thank you for your message! We will get back to you shortly."
            );
          },
          function(err) {
            console.log(err);
          }
        );
      };
    }
  ])
  // .controller("SummaryController", [
  //     "$scope",
  //     "$resource",
  //     function($scope, $resource) {}
  // ])
  // .controller("CheckoutController", [
  //     "$scope",
  //     "$resource",
  //     function($scope, $resource) {}
  // ])
  .controller("PaymentController", [
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

// $scope.products = Products.queryBySubcategory({ subcategoryid: $routeParams.id });
