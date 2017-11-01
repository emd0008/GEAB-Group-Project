angular.module("MyNewPet", [
        "ngRoute",
        "ngResource",
        "MyNewPet.controllers",
        "MyNewPet.factories",
        "MyNewPet.directives",
        // "MyNewPet.services"
    ])
    .config([
        "$locationProvider",
        "$routeProvider",
        function($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/', {
                    templateUrl: 'views/welcome.html',
                    controller: ''
                })
                .when('/dogs', {
                    templateUrl: 'views/animals.html',
                    controller: 'AnimalsController'
                })
                .when('/cats', {
                    templateUrl: 'views/animals.html',
                    controller: 'AnimalsController'
                })
                .when('/dogs/:id', {
                    templateUrl: 'views/single_animal.html',
                    controller: 'SingleAnimalController'
                })
                .when('/cats/:id', {
                    templateUrl: 'views/single_animal.html',
                    controller: 'SingleAnimalController'
                })
                .when('/products', {
                    templateUrl: 'views/products.html',
                    controller: 'ProductsController'
                })
                .when('/products/:id', {
                    templateUrl: 'views/single_product.html',
                    controller: 'SingleProductController'
                })
                .when('/apply', {
                    templateUrl: 'views/apply.html',
                    controller: 'ApplyController'
                })
                .when('/contact', {
                    templateUrl: 'views/contact.html',
                    controller: 'ContactController'
                })
                .when('/summary', {
                    templateUrl: 'views/summary.html',
                    controller: 'SummaryController'
                })
                .when('/checkout', {
                    templateUrl: 'views/checkout.html',
                    controller: 'CheckoutController'
                })
                .when('/payment', {
                    templateUrl: 'views/payment.html',
                    controller: 'PaymentController'
                })
                .when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);