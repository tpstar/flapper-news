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
        // $scope.posts.push({
        //   title: $scope.title,
        //   upvotes: 0,
        //   link: $scope.link,
        //   comments: [
        //     {author: 'Joe', body: 'Cool post!', upvotes: 0},
        //     {author: 'Bot', body: 'Great idea but everything is wrong!', upvotes: 0}
        //   ]
        // });
        $scope.title = '';
        $scope.link = '';
      };

      $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
      }
    }])
