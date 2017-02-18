angular.module('flapperNews')
  .controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts', //factory 'posts'
    function($scope, $stateParams, posts){
      $scope.post = posts.posts[$stateParams.postID];
      // console.log($scope.post);
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
