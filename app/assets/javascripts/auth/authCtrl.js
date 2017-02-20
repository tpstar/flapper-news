angular.module('flapperNews')
  .controller('AuthCtrl', ['$scope', 'Auth', '$state',
    function($scope, Auth, $state) {

      $scope.login = function(){
        Auth.login($scope.user)
          .then(() => $state.go('home'))
      }
      $scope.register = function(){
        Auth.register($scope.user)
          .then(() => $state.go('home'))
      }
    }]);
