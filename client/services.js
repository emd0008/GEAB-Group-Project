angular
  .module("MyNewPet.services", [])
  .service("SEOService", [
    "$rootScope",
    function($rootScope) {
      this.setSEO = function(data) {
        $rootScope.seo = {};
        for (var p in data) {
          $rootScope.seo[p] = data[p];
        }
      };
    }
  ])
  .service("CartService", [
    "$rootScope",
    function($rootScope) {
      this.getCart = function() {
        if (localStorage.getItem("cart") === null) {
          localStorage.setItem("cart", JSON.stringify([]));
        }
        // console.log(localStorage.getItem("cart"));
        return JSON.parse(localStorage.getItem("cart"));
      };
      this.addItem = function(item) {
        let list = this.getCart();
        let index = indexOf(item, list);
        if (index == -1) {
          item.quantity = 1;
          list.push(item);
        } else {
          list[index].quantity = list[index].quantity + 1;
        }
        // console.log(list)
        localStorage.setItem("cart", JSON.stringify(list));
        // console.log(localStorage.setItem("cart", JSON.stringify(list)));
      };
      function indexOf(item, list) {
        for (let i = 0; i < list.length; i++) {
          if (list[i].id === item.id) {
            return i;
          }
        }
        return -1;
      }
      this.removeItem = function(id) {
        let list = this.getCart();
        for (i = 0; i < list.length; i++) {
          if (list[i].id === id) {
            list.splice(i, 1);
          }
          localStorage.setItem("cart", JSON.stringify(list));
          $rootScope.$broadcast("CartUpdated");
          console.log(localStorage.cart);
        }
      };
      this.emptyCart = function() {
        cartItems = [];
      };
    }
  ])
  .service('UserService', ['$http', '$location', function($http, $location) {
    let currentUser;

    this.isLoggedIn = function() {
        if (currentUser) {
            return true;
        } else {
            return false;
        }
    }

    this.loginRedirect = function(){
        let current = $location.path();
        $location.path('/login').search('dest', current);
    }

    this.login = function(email, password) {
        return $http({
            method: 'POST',
            url: '/api/users/login',
            data: {
                email: email,
                password: password
            }
        }).then((response) => {
            currentUser = response.data;
            return currentUser;
        });
    }

    this.logout = function() {
        return $http({
            method: 'GET',
            url: '/api/users/logout'
        }).then(() => {
            currentUser = undefined;
        });
    }

    this.me = function() {
        if (currentUser) {
            return Promise.resolve(currentUser);
        } else {
            return $http({
                method: 'GET',
                url: '/api/users/me'
            }).then((response) => {
                currentUser = response.data;
                return currentUser;
            });
        }
    }
}]);