angular
  .module("MyNewPet.directives", [])
  .directive("mainNav", [
    function() {
      return {
        templateUrl: "directives/navbar.html",
        restrict: "E",
        scope: {
          activePage: "="
        },
        controller: function($scope, $rootScope) {
          $rootScope.logInOut = "Log In";
          console.log($rootScope.logInOut);
        }
      };
    }
  ])
  .directive("mainFooter", [
    function() {
      return {
        templateUrl: "directives/footer.html",
        restrict: "E"
      };
    }
  ]);
