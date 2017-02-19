angular.module('flapperNews')
  .factory('posts', ['$http',
    function($http){
      return {
        all, create, upvote, get
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
        console.log(id);
        return $http.get('/posts/' + id + '.json')
          .then(response => response.data)
          .catch(err => console.log(err))
      }

  }]);
