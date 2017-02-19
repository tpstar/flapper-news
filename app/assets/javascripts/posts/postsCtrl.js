angular.module('flapperNews')
  .controller('PostsCtrl', ['$scope', 'posts', 'postData',//factory 'posts' and 'postsArray from app state resolve'

    function($scope, posts, postData){
      console.log(postData);
      $scope.post = postData;
      $scope.post.comments = [];
      $scope.incrementUpvotes = function(comment) {
        comment.upvotes += 1;
      };
      $scope.addComment = function(){

        if($scope.body === "") {return;}
        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });
        $scope.body = '';
      }
    }])
