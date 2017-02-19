angular.module('flapperNews')
  .controller('PostsCtrl', ['$scope', '$stateParams', 'posts', 'postsArray', //factory 'posts' and 'postsArray from app state resolve'

    function($scope, $stateParams, posts, postsArray){
      $scope.post = postsArray[$stateParams.postID];
      $scope.post.comments = [];
      $scope.incrementUpvotes = function(comment) {
        comment.upvotes += 1;
      };
      $scope.addComment = function(){

        if($scope.body === "") {return;}
        $scope.post.comments.push({
          body: $scope.body,
          author: 'user'
        });
        $scope.body = '';
      }
    }])
