angular.module('flapperNews')
  .controller('NavCtrl', ['$scope', 'Auth',
    function($scope, Auth) {
      console.log(Auth.isAuthenticated)
      $scope.signedIn = Auth.isAuthenticated;
      $scope.logout = Auth.logout;

      Auth.currentUser()
        .then(user => $scope.user = user)

      $scope.$on('devise:new-registration', function(e, user) {
        $scope.user = user;
      });

      $scope.$on('devise:login', function(e, user) {
        $scope.user = user;
      });

      $scope.$on('devise:logout', function(e, user) {
        $scope.user = {};
      })

    }]);