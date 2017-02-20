angular.module('flapperNews')
  .controller('PostsCtrl', ['$scope', 'posts', 'postData',//factory 'posts' and 'postsArray from app state resolve'

    function($scope, posts, postData){
      // console.log(postData);
      $scope.post = postData;

      $scope.incrementUpvotes = function(comment) {
        comment.upvotes += 1;
      };

      $scope.addComment = function(){

        if($scope.body === "") {return;}
        var commentInput = {
          body: $scope.body,
          author: 'user'
        }
        posts.addComment(postData.id, commentInput)
          .then(function(comment) { //why comment is undefined
            $scope.post.comments.push(comment);
          })
        $scope.body = '';
      }
      //_posts.html <form ng-submit="addComment()"
      //postsCtrl $scope.addComment posts.addComment(postData.id, commentInput) postData from state resolve
      //posts.js $http(req)
      //postsCtrl comment => comment
    }]);
