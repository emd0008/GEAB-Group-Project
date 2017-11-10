angular.module("MyNewPet.controllers", ["ngRoute"])
    .controller("AnimalsController", [
        "SEOService",
        "$scope",
        "$location",
        "$resource",
        "Products",
        "$routeParams",
        function (SEOService, $scope, $location, $resource, Products, $routeParams) {
            SEOService.setSEO({
                title: "Homeward Bound Pet Adoption",
                image: "http://" + $location.host() + "/images/cutegoldens.jpg",
                url: $location.url(),
                description: "Homeward Bound Pet Adoption"
            });
            $scope.products = Products.queryBySubcategory({
                SubCatId: $routeParams.subcategoryid
            });
            console.log($scope.animals);
        }
    ])
    .controller("HomeController", [
        "SEOService",
        "$scope",
        "$location",
        "$resource",
        function (SEOService, $scope, $location, $resource) {
            SEOService.setSEO({
                title: "Homeward Bound",
                image: "http://" + $location.host() + "/images/dog-shopping.jpg",
                url: $location.url(),
                description: "Homeward Bound"
            });
        }
    ])
    .controller("SingleAnimalController", [
        "SEOService",
        "$scope",
        "$location",
        "$resource",
        function (SEOService, $scope, $location, $resource) {
            SEOService.setSEO({
                title: "Shop Homeward Bound",
                image: "http://" + $location.host() + "/images/dog-shopping.jpg",
                url: $location.url(),
                description: "Shop Homeward Bound"
            });
        }
    ])
    .controller("ProductsController", [
        "SEOService",
        "$scope",
        "$location",
        "$resource",
        "Products",
        "$routeParams",
        "CartService",
        function (SEOService, $scope, $location, $resource, Products, $routeParams, CartService) {
            SEOService.setSEO({
                title: "Shop Homeward Bound",
                image: "http://" + $location.host() + "/images/dog-shopping.jpg",
                url: $location.url(),
                description: "Shop Homeward Bound"
            });

            $scope.products = Products.queryBySubcategory({
                SubCatId: $routeParams.subcategoryid
            });
            console.log("Log for " + $scope.products);

            $scope.addToCart = function() {
                CartService.addItem($scope.product);
                alert('Your item has been added to the shopping cart!');
              };
        }
    ])
    .controller("SingleProductController", [
        "SEOService",
        "$scope",
        "$location",
        "$resource",
        "$routeParams",
        "Products",
        "CartService",
        function (SEOService, $scope, $location, $resource, $routeParams, Products, CartService) {
            $scope.product = Products.get({ id: $routeParams.id }, function (success) {
                SEOService.setSEO({
                    title: "Homeward Bound | " + $scope.product.ProductName,
                    image: "http://" + $location.host() + $scope.product.image,
                    url: $location.url(),
                    description: $scope.product.description
                });
            });

            $scope.addToCart = function() {
                CartService.addItem($scope.product);
                alert('Your item has been added to the shopping cart!');
              };
        }
    ])
    .controller("ContactController", [
        "SEOService",
        "$scope",
        "ContactForm",
        "$location",
        function (SEOService, $scope, ContactForm, $location) {
            SEOService.setSEO({
                title: "Contact Homeward Bound",
                image: "http://" + $location.host() + "/images/dog-writing.jpg",
                url: $location.url(),
                description: "Contact Homeward Bound"
            });
            $scope.send = function () {
                let contact = new ContactForm({
                    from: $scope.from,
                    subject: $scope.subject,
                    message: $scope.message
                });

                //makes a POST request to /api/contactform with a body with properties from and message
                contact.$save(
                    function () {
                        alert(
                            "Thank you for your message! We will get back to you shortly."
                        );
                    },
                    function (err) {
                        console.log(err);
                    }
                );
            };
        }
    ])
    .controller("PaymentController", [
        "SEOService",
        "$scope",
        "$location",
        "Payment",
        "CartService",
        function(SEOService, $scope, $location, Payment, CartService) {
            SEOService.setSEO({
                title: "Homeward Bound | Checkout",
                image: "http://" + $location.host() + "/images/dog-shopping.jpg",
                url: $location.url(),
                description: "Homeward Bound Checkout"
            });
            if (localStorage.getItem("cart" === '')) {
                console.log("No items in cart")
              } else {
                $scope.items = JSON.parse(localStorage.getItem("cart"));
                console.log($scope.items);
              };
        
              $scope.removeItem = function() {
                alert("Are you sure you want to remove this item?");
                $scope.items = JSON.parse(localStorage("cart"));
                if ($scope.items.quantity == "1") {
                  // delete from cart all together
                } else {
                  $scope.items.quantity = $scope.items.quantity - 1;
                }
              }
        
              let elements = stripe.elements();
              let card = elements.create("card", {
                style: {
                  base: {
                    iconColor: "#666EE8",
                    color: "#31325F",
                    lineHeight: "25px",
                    fontWeight: 300,
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: "15px",
        
                    "::placeholder": {
                      color: "#CFD7E0"
                    }
                  }
                }
              });
              card.mount("#card-field");
        
              $scope.purchase = function() {
                stripe.createToken(card).then(function(result) {
                  if (result.error) {
                    $scope.error = result.error.message;
                  } else {
                    let p = new Purchase({
                      token: result.token.id,
                      amount: $scope.amount
                    });
        
                    p.$save(
                      function() {
                        alert(
                          "Thank you for your purchase! You will receive a summary email shortly!"
                        );
                        $location.path("/");
                      },
                      function(err) {
                        $scope.err = err;
                      }
                    );
                  }
                });
<<<<<<< HEAD
            };
    }])
=======
              };
        }
    ])
>>>>>>> 0ec9bb3ae750a029b171d280915758920907bca1
    .controller("LoginController", [
        "$scope", 
        function($scope) {

    }])
    .controller("ApplyController", [
        "$scope",
        "$location",
        "$resource",
        function($scope, $location, $resource) {

    }]);