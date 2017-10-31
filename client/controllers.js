angular.module("Project1.controllers", [])
.controller("PaymentController", ["$scope", "Payment", function($scope, Payment){
    let elements = stripe.elements();
    let card = elements.create("card");
    card.mount('#card-number');
    $scope.process = function(){
        stripe.createToken(card).then(result => {
            if(result.error){
                $scope.error = result.error.message;
            }else{
                let p = new Payment({
                    token: result.token.id,
                    amount: $scope.amount
                });

                p.$save(function(){
                    $location.path("/");
                }, function(err){
                    $scope.error = err.data;
                });
            }
        });
    }
}]);