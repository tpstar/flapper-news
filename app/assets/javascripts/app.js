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
      })
      .state('posts', {
        url: '/posts/:postID',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsCtrl',
        resolve: {
          postsArray: function (posts) {   //key postsArray goes to MainCtrl posts?
            return posts.all();
          }
        }
      });

    $urlRouterProvider.otherwise('home');
  }])
