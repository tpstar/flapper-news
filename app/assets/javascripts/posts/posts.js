angular.module('flapperNews')
  .factory('posts', ['$http',
    function($http){
      return {
        all, create, upvote, get, addComment
      }

      function all(){
        return $http.get('/posts.json')
          .then(response => response.data)
          .catch(err => console.log(err))
      }

      function create(postInfo) {
        const req = {
          method: 'POST',
          url: '/posts',
          headers: {
            'Content-Type': 'application/json'
          },
          data: postInfo
        }
        return $http(req)
          .then(response => response.data) //return posted data to mainCtrl
          .catch(err => console.log(err))
      }

      function upvote(post) { //post is the selected post object
        // console.log(post.id)
        const req = {
          method: 'PUT',
          url: '/posts/' + post.id + '/upvotes.json',
          headers: {
            'Content-Type': 'application/json'
          }
        }
        return $http(req) //route will call upvote method in PostsController
          .then(post.upvotes += 1) //for view
      }

      function get(id) {
        return $http.get('/posts/' + id + '.json')
          .then(response => response.data)
          .catch(err => console.log(err))
      }

      function addComment(id, commentInput) {
        // console.log(commentInput);
        const req = {
          method: 'POST',
          url: '/posts/' + id + '/comments.json',
          headers: {
            'Content-Type': 'application/json'
          },
          data: commentInput
        }
        return $http(req)
          .then(response => response.data) // response.data = {id:10, body: "comment1", ...}
      }

  }]);
