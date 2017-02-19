angular.module('flapperNews', ['ui.router', 'templates'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl',
        resolve: {
          postsArray: function (posts) {   //key postsArray goes to MainCtrl posts?
            // console.log(posts.all());
            return posts.all();
          }
        }
        //html '/home' calls state home
        //in app.js posts.all();
        //in posts.js function all(){return $http.get('/posts.json')
        //in app.js send postsArray to MainCtrl
        //in mainCtrl $scope.posts = postsArray
        //in _home.html <div ng-repeat="post in posts | orderBy: '-upvotes'">
      })
      .state('posts', {
        url: '/posts/:postID',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsCtrl',
        resolve: {
          postData: ['$stateParams', 'posts', function ($stateParams, posts) {   //key postsArray goes to PostCtrl posts?
            return posts.get($stateParams.postID);
          }]
          //in _home.html    <a ui-sref="posts({postID: post.id})">Comments</a>
          //in app.js .state('posts'{url: '/posts/:postID'
          //in app.js posts.get($stateParams.postID);
          //in posts.js function function get(id) {return $http.get('/posts/' + id + '.json')
          //in app.js send postDate to PostsCtrl
          //in postCtrl $scope.post = postData; //postData = {id: 7, title: "new post" ...}
          //in _post.html {{post.title}}


        }
      });

    $urlRouterProvider.otherwise('home');
  }])
