angular.module('flapperNews')
  .factory('posts', ['$http',
    function($http){
      return {
        all, create
      }

      function all(){
        return $http.get('/posts.json')
          .then(response => response.data)
          .catch(err => console.log(err))
      }

      function create(postInfo) {
        console.log(postInfo);
        const req = {
          method: 'POST',
          url: '/posts',
          headers: {
            'Content-Type': 'application/json'
          },
          data: postInfo 
        }
        return $http(req)
          .then(response => console.log(response.data))
          .catch(err => console.log(err))
      }

  }]);
