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
        function (SEOService, $scope, $location, $resource, Products, $routeParams) {
            SEOService.setSEO({
                title: "Shop Homeward Bound",
                image: "http://" + $location.host() + "/images/dog-shopping.jpg",
                url: $location.url(),
                description: "Shop Homeward Bound"
            });
            $scope.products = Products.queryBySubcategory({
                SubCatId: $routeParams.subcategoryid
            });
            console.log($scope.products);
        }
    ])
    .controller("SingleProductController", [
        "SEOService",
        "$scope",
        "$location",
        "$resource",
        "$routeParams",
        "Products",
        function (SEOService, $scope, $location, $resource, $routeParams, Products) {
            $scope.product = Products.get({ id: $routeParams.id }, function (success) {
                SEOService.setSEO({
                    title: "Homeward Bound | " + $scope.product.ProductName,
                    image: "http://" + $location.host() + $scope.product.image,
                    url: $location.url(),
                    description: $scope.product.description
                });
            });
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
    .controller("CartController", [
        "$scope",
        "$location",
        ($scope.removeItem = function () {
            alert("Are you sure you want to remove this item?");
            $scope.items = JSON.parse(localStorage("cart"));
            if ($scope.items.quantity == "1") {
                // delete from cart all together
            } else {
                $scope.items.quantity = $scope.items.quantity - 1;
            }
        })
    ])
    .controller("PaymentController", [
        "SEOService",
        "$scope",
        "$location",
        "Payment",
        function (SEOService, $scope, $location, Payment) {
            SEOService.setSEO({
                title: "Homeward Bound | Checkout",
                image: "http://" + $location.host() + "/images/dog-shopping.jpg",
                url: $location.url(),
                description: "Homeward Bound Checkout"
            });
            let elements = stripe.elements();
            let card = elements.create("card");
            card.mount("#card-field");
            $scope.process = function () {
                stripe.createToken(card).then(result => {
                    if (result.error) {
                        $scope.error = result.error.message;
                    } else {
                        let p = new Payment({
                            token: result.token.id,
                            amount: $scope.amount
                        });
                        p.$save(
                            function () {
                                $location.path("/");
                            },
                            function (err) {
                                $scope.error = err.data;
                            }
                        );
                    }
                });
            };
        }
    ])
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