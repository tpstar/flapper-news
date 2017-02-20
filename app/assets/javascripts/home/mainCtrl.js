angular.module('flapperNews')
  .controller('MainCtrl', ['$scope', 'posts', 'postsArray',
    //postsArray from app $stateProvider resolve
    function($scope, posts, postsArray) {

      $scope.posts = postsArray

      $scope.addPost = function() {
        if(!$scope.title || $scope.title === '') {return};
        var postInput = {
          title: $scope.title,
          link: $scope.link
        }
        posts.create(postInput)
          .then(post => $scope.posts.push(post))
        $scope.title = '';
        $scope.link = '';
      };


      $scope.incrementUpvotes = function(post) {
        posts.upvote(post);
      }
    }])
