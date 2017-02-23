angular.module('flapperNews')
  .controller('AuthCtrl', ['$scope', '$state', 'Auth',
    function($scope, $state, Auth) {

      $scope.login = function(){
        console.log("I am in authCtrl")
        Auth.login($scope.user)
          .then(function(user) {
            console.log(user);
            $state.go('home');
        })
      }
      $scope.register = function(){
        Auth.register($scope.user)
          .then(() => $state.go('home'))
      }
    }]);
